export const config: WebdriverIO.Config = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'test/tsconfig.json'
        }
    },
    specs: [
        './test/specs/**/*.ts'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            binary: '/Users/darst/Downloads/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
            args: ["--headless", "user-agent=...", "--disable-gpu", "--window-size=1920,1080"]
        }
    }],
    services: [
        ['chromedriver', {
              chromedriverCustomPath: '/Users/darst/Downloads/chromedriver_mac64/chromedriver',
        }]
    ],
    logLevel: 'trace',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
