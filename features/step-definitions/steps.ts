import { Given, When, Then } from 'cucumber';
import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';

let driver: WebDriver;

Given('I am on the Tokopedia homepage', async () => {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.tokopedia.com/');
});

When('I search for {string}', async (query: string) => {
  const searchBox = await driver.findElement(By.name('q'));
  await searchBox.sendKeys(query, Key.RETURN);
});

When('I click on the first product in the search results', async () => {
  const firstProduct = await driver.findElement(By.css('.pcv3__items .pcv3__item:first-child .pcv3__info a'));
  await firstProduct.click();
});

Then('I should be on the detail page for that product', async () => {
  await driver.wait(until.urlContains('/product/'));
  const title = await driver.findElement(By.css('.rvm-product-title h1')).getText();
  expect(title).to.contain('Asus');
});

After(async () => {
  await driver.quit();
});
