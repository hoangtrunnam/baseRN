#!/bin/bash

if ! command -v gum &> /dev/null; then
  echo "gum is not installed. Please install it (e.g., brew install gum) and try again."
  exit 1
fi

if ! command -v jq &> /dev/null; then
  echo "jq is not installed. Please install it (e.g., brew install jq) and try again."
  exit 1
fi

platform=$(gum choose "iOS" "Android")
echo "You selected: $platform"

# OS: 1: IOS, 2: Android
if [ "$platform" == "iOS" ]; then
  os_param=1
elif [ "$platform" == "Android" ]; then
  os_param=2
else
  echo "Invalid platform selection. Exiting."
  exit 1
fi

# Bước 2: Call API to get available environments (Staging, Production, Development) for the selected OS
echo "Fetching available environments for os=$os_param from API..."
api_url="http://codepushnh.click/v0.1/public/codepush/get_env?os=$os_param"
response=$(curl -s "$api_url" \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-CodePush-Plugin-Name: react-native-code-push' \
  --header 'X-CodePush-Plugin-Version: 9.0.1' \
  --header 'X-CodePush-SDK-Version: 4.2.3')

# Kiểm tra nếu không có dữ liệu trả về (API trả về [] hoặc null)
if [ -z "$response" ] || [ "$(echo "$response" | jq -r '.data | length')" -eq 0 ]; then
  echo "No environments available for this OS. Exiting."
  exit 1
fi

# Parse dữ liệu JSON để lấy danh sách deployment_name
deployments=$(echo "$response" | jq -r '.data[].deployment_name')

# Nếu có dữ liệu, cho phép người dùng chọn deployment
options=()
while IFS= read -r deployment; do
  options+=("$deployment")
done <<< "$deployments"

if [ ${#options[@]} -eq 0 ]; then
  echo "No environments found. Exiting."
  exit 1
fi

selected_deployment=$(gum choose "${options[@]}")

deployment_name="$selected_deployment"
echo "You selected deployment: $deployment_name"

# Bước 3: Gọi API để lấy danh sách version theo os và deployment_name
echo "Fetching available versions for os=$os_param and deployment_name=$deployment_name from API..."
api_url="http://codepushnh.click/v0.1/public/codepush/get_version?os=$os_param&deployment_name=$deployment_name"
response=$(curl -s "$api_url" \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-CodePush-Plugin-Name: react-native-code-push' \
  --header 'X-CodePush-Plugin-Version: 9.0.1' \
  --header 'X-CodePush-SDK-Version: 4.2.3')

# Kiểm tra nếu không có dữ liệu trả về
if [ -z "$response" ]; then
  echo "No response from API. Exiting."
  exit 1
fi

# Parse dữ liệu JSON để lấy danh sách version
versions=$(echo "$response" | jq -r '.data[].app_version')

# Nếu có dữ liệu, cho phép người dùng chọn hoặc nhập version mới
if [ -z "$versions" ]; then
  echo "No versions available for this deployment. You can enter a custom version."
  read -p "Enter your custom version (e.g., 1.0.0): " version
else
  # Đặt danh sách các version vào một mảng và thêm tùy chọn cho version custom
  options=()
  while IFS= read -r version; do
    options+=("$version")
  done <<< "$versions"
  options+=("Enter custom version")

  selected_version=$(gum choose "${options[@]}")
  if [ "$selected_version" == "Enter custom version" ]; then
    read -p "Enter your custom version (e.g., 1.0.0): " version
  else
    version="$selected_version"
  fi
fi

echo "You selected version: $version"

# Bước 4: Hỏi xem release có bắt buộc không
read -p "Is this release mandatory? (Y/N): " mandatory
if [[ "$mandatory" =~ ^[Yy]$ ]]; then
  flag="--mandatory"
else
  flag=""
fi

# Bước 5: Xây dựng lệnh release dựa theo nền tảng đã chọn và deployment_name
if [ "$platform" == "iOS" ]; then
  cmd="code-push release basern-IOS ./code-push $version --bundle-name main.jsbundle $flag --deploymentName $deployment_name && rm -rf ./code-push/*"
elif [ "$platform" == "Android" ]; then
  cmd="code-push release basern-Android ./code-push $version --bundle-name index.android.bundle $flag --deploymentName $deployment_name && rm -rf ./code-push/*"
else
  echo "Invalid platform selection. Exiting."
  exit 1
fi

echo "Executing: $cmd"
eval $cmd
