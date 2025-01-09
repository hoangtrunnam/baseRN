## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```


## 1. Thumb 
- import from `src/components`
- sử dụng `<FastImage>` hiển thị ảnh, thay thế `<Image>` react-native
- nếu đang load: hiển thị `Loading`, nếu lỗi hiển thị ảnh nền default, nếu load thành công hiển thị ảnh thật

## 2. Header
- import from `src/components`
- tạo header cho page
- chứa title, goBack(), renderRight() (nếu cần), ...

## 3. Các component, hàm dùng chung
- ButtonCustom: Dùng để design các button
- FooterSingleButton: Dùng để hiện bottom button với 1 action
- PackageCard
- formatNumberWithCurrency, formatNumberWithoutCurrency: dùng để format number có dấu chấm ngăn cách



# II. Common

## 1. isIphoneX
- Trả về device có phải là dạng iphoneX hay không

## 2. getOffset
- Trả về `statusBar` và `bottomSpace`


# III. Api

## 1. debounce
- tránh việc gọi 1 func liên tục ( ví dụ request api liên tục)
- debounce: (func: (...arg: any[]) => void, wait: number, immediate?: boolean) => (...args: any[]) => void;


# IV. Configs

## 1. colors
- cách dùng
     ``` javascript
        import { useAppColors } from 'src/configs'
        ...

        const colors = useAppColors()
        ...

        <View style={{backgroundColor: colors.red}}>
    ```
- format colors
    ``` javascript
       // background color
        // #FFF5E9
        bg_FFF5E9: '#FFF5E9',
        ...
        // text
        // #E0E1E0
        text_E0E1E0: '#E0E1E0',
        ...
        // status color
        // format: h_color | rgb_r_g_b | rgba_r_g_b_a
        h_2E92FF: '#2E92FF',
        rgba_29_172_14_15: 'rgba(29, 172, 14, 0.15)',
        ...
    ```

## 2. I18n
- cách dùng
     ``` javascript
        import i18n from 'src/locales/i18n'
        ...

        {i18n.t('languages.vi')}
        ...
        
    ```
- format i18n
    ``` javascript

            labels: {
                name: 'tên',
            },
            placeholders: {},
            errors: {},
            messages: {},
            actions: {},
        
    ```

# V. Navigation

## 1.Stack

- cách tạo mới stack screen
    + tạo màn hình mới
    + khai báo tên trong `src/navigation/routes`
    + tạo `<Stack.Screen>` trong `src/navigation/MainStack`
- chuyển screen
        ``` javascript

            onPress={() => navigation.navigate(routes_name)}
            onPress={() => navigation.push(routes_name, {params})}
        
        ```
- lấy param
    ``` javascript

        const { itemId , otherParam} = route.params
        
    ```
  

# VI. Icon

- import from `src/assets/icons/`
- sử dụng ảnh svg trong các folder tương ứng: action, arrow, ...

# VII. Commit Lint
- commit theo đúng định dạng, nếu không đúng định dạng sẽ báo lỗi
- format cơ bản
        type(scope?): subject   
        #scope là optional;
- ví dụ: 
    git commit -m 'chore: run tests on travis ci'
    git commit -m 'fix(server): send cors headers'
    git commit -m 'feat(blog): add comment section'
- type cơ bản: 
    + build : build
    + chore : việc vặt
    + docs : tài liệu
    + feat : tính năng
    + fix : fix 
    + perf : hoàn thành
    + refactor : cấu trúc lại
    + revert : hoàn lại
    + style : style
    + test : test
    + add : thêm

# VIII. Define Name
- Đặt tên biến đúng với kiểu dữ liệu, List thì chỉ chuyển list vào, Object thì chỉ chuyển Object vào....
- Đặt tên một biết Array hạn chế sử dụng tiền tốt list: vì dụ ListItem => Items.
- Đặt tên hàm call api = có tiền tố api* . Ví dụ: apiGetDetail()
- Đặt tên icon: Icon + tên icon. Ví dụ: IconAdd. Tên icon đặt giống trên figma, trường hợp trên figma không có tên mới tự định nghĩa tên.

# IX. NOTE:
- node >= 18
- java >= 17
- build android bằng lệnh, android studio đang gặp lỗi không xác định