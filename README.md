# XKCDo
Helping non-physicists understand Randall Munroe's humor.

![In action](img/screenshot.png)

## Contents

* In the `xkcdo` folder are the actual extension files, which will be packaged:
  -  A content script, `epxlain.js`, that is injected into any pages under xkcd.com
 It adds:
      - The title text of the comic image below it because you don't want to move your cursor like a sucker
      - A link to explainxkcd.com because you don't really understand what Randall means
  -  A `manifest.json` which tells browsers what this is
  - A kick-ass icon
* This README
* `package.sh` which is used to package the add-on for adding to Firefox
* A screenshot and a large icon


## Changelog

### `[v1.0.0]`
#### Added
 - Display alt text under image
 - Display link to explainxkcd.com under image

### `[v1.1.0]`
#### Added
 - Support for Mozilla for Android Nightly


## Stuff I read in order to make this
 - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
  - https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/
  - https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/