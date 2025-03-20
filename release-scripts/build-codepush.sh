#!/bin/bash

if ! command -v gum &> /dev/null; then
  echo "gum is not installed. Please install it (e.g., brew install gum) and try again."
  exit 1
fi

# Sử dụng gum để chọn nền tảng
platform=$(gum choose "iOS" "Android")

if [ "$platform" == "iOS" ]; then
  echo "Building iOS bundle..."
  npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ./code-push/main.jsbundle --assets-dest ./code-push
elif [ "$platform" == "Android" ]; then
  echo "Building Android bundle..."
  npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output ./code-push/index.android.bundle --assets-dest ./code-push
else
  echo "Invalid choice. Exiting."
  exit 1
fi
