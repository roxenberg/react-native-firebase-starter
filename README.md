## Getting Started

Prepare Firebase Config

  1. Create a new project in [Firebase Console](https://console.firebase.google.com/)
  2. Add an Android app to your project
  3. Download the `google-services.json` file and place it in `android/app/` directory
  4. Add an iOS app to your project
  5. Download the `GoogleService-Info.plist` file and place it in `ios/` directory


## Install dependencies

> Make sure you have CocoaPods installed on your machine. If not, run `gem install cocoapods`

```bash
yarn && cd ios && bundle exec pod install
```


## Run the app

### iOS
```bash
yarn ios
```

### Android
```bash
yarn android
```


