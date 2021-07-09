const fs = require('fs');
const puppeteer = require('puppeteer');

/* HaxBall Server Script
 * This script launches the headless browser instance and loads the script for HaxBall
 *
 * Takes the ReCaptcha token obtained at: https://www.haxball.com/headlesstoken as a parameter
 * Outputs the URL of the newly created room and remains running for the room to stay open
 */

(async () => {
  // open and config browser
  const browser = await puppeteer.launch({headless: false});

  // get default tab
  const [page] = await browser.pages();

  // hook program close to closing this tab
  page.on('close', () => browser.close());

  // navigate to headless haxball page
  await page.goto('https://html5.haxball.com/headless');

  // put recaptcha token on a variable within the browser for the script to read
  await page.evaluate(`const headlessToken = "${process.argv[2]}"`);

  // load HaxBall script into page (need to wait for the iframe to load)
  setTimeout(() => fs.readFile('haxball.js', 'utf8', (err, hbScript) => {
    if (err) throw err;

    page.evaluate(hbScript);
  }), 1e3);
})();
