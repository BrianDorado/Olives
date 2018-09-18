const assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome'),
    path = require('chromedriver').path;

const chromeService = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(chromeService);

const chromeDriver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

    
// ===== Mocha test suites, desribe is litterally defining the test you want to run. First is the name of the test, then the functionality ===== //
describe('Etsy search and route', function () {
    // ===== Try and catch statements are a Javascript feature. Literally try this block of code, if any of it fails run the catch. Finally will always run no matter if there is  fail or not ===== //
    try {
        // ===== This timeout sets the maximum time that the test should run. Usually meant for performance ===== //
        this.timeout(15000)
        // ===== Will run before all the test ===== //
        before(function () {
            // ===== This is the simplest Selenium command. Sinply navigate to a given URL ===== //
            chromeDriver.get('https://etsy.com')
        })
        // ===== Runs only after all test are complete ===== //
        after(function () {
            // ===== .quit() will kill all instances if test have run correctly ===== //
            // chromeDriver.quit()
        })
        // ===== You can nest several test together. It is specific test instance ===== //

        it('Verify Titles', function (done) {
            try {
                chromeDriver.getTitle().then(function (title) {
                    console.log('Page title: ', title);
                })
            } catch (error) {
                console.log('Could not access title', error);
                done(error)
            }
            done()
        })

        it('Search for Halloween', function (done) {
            try {
                // ===== the sendKeys command is how you fill out an input tag, like a search box ===== //
                chromeDriver.findElement(By.id('search-query')).sendKeys('Halloween')

                chromeDriver.findElement(By.className('homepage-search-button')).click()
                const compareURL = function () {
                    const URL = chromeDriver.getCurrentUrl()
                    // ===== If an element is not immediatly visible, you can tell Selenium to wait until it appears. Below is code that I have not managed to get working just yet ===== //
                    return chromeDriver.wait(function () {
                        if (URL === 'https://www.etsy.com/search?q=halloween&order=most_relevant&view_type=gallery') {
                            return URL
                        } else {
                            return false
                        }
                    })
                }
                chromeDriver.wait(compareURL)
                // done()

            } catch (error) {
                console.log('Unable to search', error);
                done(error)
            }
            done()
        });

        it('Verify URL Param and search term persistance', function () {
            try {

                chromeDriver.getCurrentUrl().then(function (URL) {
                    console.log('Navgigated to: ' + URL)
                })
                chromeDriver.findElement(By.id('search-query')).getText().then(function (txt) {
                    console.log('Search term persisted as: ' + txt);
                })

            } catch (error) {
                console.log('Search failed: ' + error)
            }
        })
    } catch (error) {
        console.log('One or more of the test have failed: ' + error);
    }
})