## First issue
```
2019-03-07T22:12:39.300Z ERROR @wdio/utils:initialiseServices: Error: Couldn't initialise "@wdio/applitools-service".
Error: Cannot find module './src/Eyes'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/eyes.webdriverio/index.js:1:78)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at safeRequire (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/utils/build/initialisePlugin.js:19:13)
    at initialisePlugin (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/utils/build/initialisePlugin.js:46:24)
    at initialiseServices (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/utils/build/initialiseServices.js:64:53)
    at Launcher.run (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/cli/build/launcher.js:66:52)
    at launch (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/cli/build/run.js:93:12)
    at run (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/cli/build/run.js:68:12)
    at Object.run (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/cli/build/index.js:45:20)
    at Object.<anonymous> (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/cli/bin/wdio.js:11:21)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
```

copied src from https://github.com/applitools/eyes.webdriverio.javascript

## Second issue

```
2019-03-07T22:15:34.466Z ERROR @wdio/sync: TypeError: Cannot read property 'sessionID' of undefined
    at Eyes.getAUTSessionId (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/eyes.webdriverio/src/Eyes.js:1363:85)
    at Eyes.startSession (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@applitools/eyes.sdk.core/lib/EyesBase.js:1814:17)
    at Eyes._ensureRunningSession (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@applitools/eyes.sdk.core/lib/EyesBase.js:1585:17)
    at _validateSessionOpen.then.then (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@applitools/eyes.sdk.core/lib/EyesBase.js:1542:25)
    at <anonymous>
    at ApplitoolsService.beforeTest (/Users/kevinmcdonnell/dev/src/github.com/deputyapp/test-web/appli/node_modules/@wdio/applitools-service/build/index.js:66:20)
```

