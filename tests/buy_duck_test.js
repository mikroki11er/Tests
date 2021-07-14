Feature('buy_duck');


var value = 4;

Scenario('test something', ({ I }) => {


    I.amOnPage(`/`);
    I.fillField(`//input[@name='email']`, 'test0110@mail.ru');
    I.fillField(`//input[@name='password']`, 'testpass');
    I.click(`//button[@name='login']`);
    I.waitForVisible(`//div[@class='content']/ul/li[4]/a[contains(@href,'logout')]`);
    I.click(`//div[@id='box-most-popular']//a[contains(@href,'-p-5')]`)
    I.fillField(`//input[@name='quantity']`, value);
    I.click(`//button[@type='submit']`);
    I.waitForVisible(`//span[@class='quantity' and contains(text(), 4)]`);
    I.click(`//div[@id='cart']/a[3]`);
    I.waitForVisible(`//input[@value='4']`);
    I.fillField(`//input[@name='quantity']`, 8);
    I.click(`//button[@name='update_cart_item']`);
    I.waitForVisible(`//table[@class='dataTable rounded-corners']/tbody/tr[2]/td[contains(text(),8)]`);
    I.waitForVisible(`//table[@class='dataTable rounded-corners']/tbody/tr[2]/td[6][contains(text(),0)]`);
    I.click(`//div[@class='confirm']`);
    I.waitForVisible(`//div[@class='box']`);

});
