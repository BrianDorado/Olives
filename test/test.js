// const assert = require('assert'),
//     webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until,
//     test = require('selenium-webdriver/testing'),
//     chrome = require('selenium-webdriver/chrome'),
//     edge = require('selenium-webdriver/edge'),
//     ie = require('selenium-webdriver/ie'),
//     firefox = require('selenium-webdriver/firefox'),
//     path = require('chromedriver').path;

// const chromeService = new chrome.ServiceBuilder(path).build();
// chrome.setDefaultService(chromeService);

// const chromeDriver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .build();

// // const edgeService = new edge.ServiceBuilder(path).build()
// // edge.setDefaultService(edgeService)

// // const edgeDriver = new webdriver.Builder()
// //     .withCapabilities(webdriver.Capabilities.edge())
// //     .build()

// // const ieService = new ie.ServiceBuilder(path).build()
// // ie.setDefaultService(ieService)

// // const ieDriver = new webdriver.Builder()
// //     .withCapabilities(webdriver.Capabilities.ie())
// //     .build()

// // const ffService = new firefox.ServiceBuilder(path).build()
// // firefox.setDefaultService(ffService)

// // const firefoxDriver = new webdriver.Builder()
// //     .withCapabilities(webdriver.Capabilities.firefox())
// //     .build()

// describe('Etsy search and route', function () {
//     this.timeout(15000)

//     before(function () {
//         chromeDriver.get('https://etsy.com')
//     })
//     after(function () {
//         // chromeDriver.quit()
//     })

//     it('Verify Titles', function () {
//         this.timeout(15000)
//         chromeDriver.getTitle().then(function (title) {
//             console.log(title);
//         })
//     })
//     it('Search for Halloween', function (done) {
//         this.timeout(30000)
//         try {
//             chromeDriver.findElement(By.id('search-query')).sendKeys('Halloween')
//             chromeDriver.wait(until.elementsLocated(By.className('as-rich')), 15000).then(function (element) {
//                     // ===== Calling .click on a promise (not an element) ===== //
//                     console.log(element[4]);
//                     element[4].click()
//                 // try {
//                 //     const suggestedSearch = chromeDriver.findElements(By.css('#search-suggestions > ul > li:nth-child(2) > div > div > div > span'))[0]
//                 //     .then(function(element) {
//                 //         rElm = function (min,max) {
//                 //             return Math.floor(Math.random() * (max - min) + min)
//                 //         }
//                 //         element.map(function (elm) {
//                 //             elm[rElm(1,5)].getText().then(function(txt){
//                 //                 console.log('Suggested search text: ' + txt);
//                 //             })
//                 //         })
//                 //     })
                    
//                 // } catch (error) {
//                 //     console.log('Could not find declared suggestion', error)
//                 // }
//             })

//             // chromeDriver.findElement(By.className('homepage-search-button')).click()
//             // chromeDriver.findElements(By.tagName('a')).then(function (e) {
//             //     e.map(elm => {
//             //         elm[rElm()].getText().then(function (txt) {
//             //             console.log(txt);
//             //         })
//             //         chromeDriver.getCurrentUrl().then(URL => console.log('Navgigated to: ' + URL))
//             //     })
//             //     console.log('ran all the things')
//             // })
//             done()
//         } catch (error) {
//             console.log('Unable to fulfull' , error);
//             done(error)
//         }
//     });
// })


// // driver.sleep(8000)
// // driver.quit()


// // react-scripts test --env=jsdom