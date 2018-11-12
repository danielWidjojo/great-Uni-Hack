
const puppeteer = require('puppeteer');

async function function2() {
    // stuff you want to happen right away
    console.log('Welcome to My Console,');
    await page.click(Email_Input);
  await page.keyboard.type('Ignatius Daniel Widjojo');
  await page.waitForNavigation();
}



async function run() {
    const Button_AddcartSelector = '#add-remove-buttons > input';
    const Button_CheckOut='#cart > a.button.checkout';
    const Name_Input='#order_billing_name';
    const Email_Input='#order_email';
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  
  
  

  //await page.goto('https://www.supremenewyork.com/shop');
  await page.goto('https://www.supremenewyork.com/shop/jackets/mv7be58m4');
  await page.click(Button_AddcartSelector);
  
  //await page.waitForNavigation();
 
 
  await page.waitFor(1000);
  await page.click(Button_CheckOut);
  await page.waitFor(4000);
  //await page.click(Email_Input);
  //await page.keyboard.type('Ignatius Daniel Widjojo');
  //await page.waitForSelector('input[name="order[billing_name]"]');
  //await page.type('input[name="order[billing_name]"]', 'test comment', {delay: 200})
  await console.log(page.frames());
  await page.click('#pay > input');
  
  //await page.waitForSelector('input[id="order_billing_name"]');
  //page.evaluate(document.querySelector('#order_billing_name'));
  await page.type('input[id="order_billing_name"]', 'test comment', {delay: 200});
  await page.waitForNavigation();

  
  

  //await page.screenshot({ path: 'screenshots/github.png' });

  
  
  //browser.close();

}



run();