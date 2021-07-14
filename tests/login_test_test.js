

let faker = require('faker');
let randomEmail = faker.internet.email();
let randomPassword = faker.datatype.string();



Feature('login_test');


Scenario('test something', ({ I }) => {

    I.amOnPage(`/`);
    I.waitForVisible(`//form[@name='login_form']//a[contains(@href,'create_account')]`);
    I.click(`//form[@name='login_form']//a[contains(@href,'create_account')]`);
    I.waitForVisible(`//h1[@class='title' and text()='Create Account']`);
    I.fillField(`//input[@name='firstname']`, faker.name.firstName());
    I.fillField(`//input[@name='lastname']`, faker.name.lastName());
    I.fillField(`//input[@name='address1']`, faker.address.direction());
    I.fillField(`//input[@name='postcode']`, '123213');
    I.fillField(`//input[@name='city']`, faker.address.city());
    I.fillField(`//input[@name='email']`, randomEmail);
    I.fillField(`//input[@name='phone']`, faker.phone.phoneNumber('+7916#######'));
    I.fillField(`//input[@name='password']`, randomPassword);
    I.fillField(`//input[@name='confirmed_password']`, randomPassword);
    I.uncheckOption(`//input[@name='newsletter']`);
    I.click(`//button[@name='create_account']`);
    I.waitForVisible(`//div[@class='notice success' and contains(text(), 'account has been created')]`, 10);
    I.waitForVisible(`//*[@id="box-account"]/div/ul/li[4]/a`, 10);

});


Scenario ('Log in and log out', ({ I }) => {

    I.amOnPage(`/`);



})
