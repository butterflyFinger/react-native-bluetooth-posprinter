add these code to node_modules\react-native-bluetooth-escpos-printer\android\src\main\java\RNBluetoothManagerModule.java
---------------------------------------

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;



add these permissions to adnroid > app > main > androidManifest.xml
-------------------------------------
  <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
  <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
  <uses-permission android:name="android.permission.BLUETOOTH" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
  <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />

use this instruction for another project
------------------------------------
- follow instrucion github for bluetooth plugin " https://github.com/januslo/react-native-bluetooth-escpos-printer " 
- important file need to change/follow

  - android/settings.gradle
  - android/app/build.gradle
  - android/app/src/main/java/com/safwan/PROJECT_NAME/MainApplication.java
  - android/app/src/main/java/com/safwan/PROJECT_NAME/MainActivity.java

  - node_modules/react-native-bluetooth-escpos-printer/android/build.gradle
  - node_modules/expo/AppEntry.js 
  - node_modules/react-native-bluetooth-escpos-printer/android/src/main/java/cn/jystudio/bluetooth/RNBluetoothManagerModule.java

  - ./App.js 
  - ./package.json
  - ./app.json
  - ./index.js
  - ./metro-config.js
  - ./dummy-logo.js
  - ./itemsList.js
  - ./SamplePrint.js
  - ./styles.js
  
