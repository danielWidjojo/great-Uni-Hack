
const puppeteer = require('puppeteer');

async function function2() {
    // stuff you want to happen right away
    console.log('Welcome to My Console,');
    await page.click(Email_Input);
  await page.keyboard.type('Ignatius Daniel Widjojo');
  await page.waitForNavigation();
}



async function run() {
    const Button_AddcartSelector = '#login_field';
    const Button_CheckOut='#cart > a.button.checkout';
    const Name_Input='#order_billing_name';
    const Email_Input='#order_email';
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  
  
  

  //await page.goto('https://www.supremenewyork.com/shop');
  await page.goto('https://accounts.google.com/signin/v2/identifier?hl=en-US&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  //await page.click(Button_AddcartSelector);
  
  
  //await page.waitForNavigation();
 
  //await page.click(#identifierNext);
  //await page.waitFor(4000);
  //await page.click(Email_Input);
  //await page.keyboard.type('Ignatius Daniel Widjojo');
  await page.waitFor('input[autocomplete="username"]');
  await page.type('input[autocomplete="username"]', 'princess.apartment8@gmail.com', {delay: 10})
  await page.click('#identifierNext');
  await page.waitFor(1000);
  await page.screenshot({ path: 'screenshots/github.png' });
  //await page.waitForNavigation();
  //await page.waitFor('input[autocomplete="current-password"]');
  await page.type('input[autocomplete="current-password"]', '30princess', {delay: 10});
  await page.click('#passwordNext');
  

  await page.waitForNavigation();

  
  

  //await page.screenshot({ path: 'screenshots/github.png' });

  
  
  //browser.close();

}



run();