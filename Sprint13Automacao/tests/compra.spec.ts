import {   expect, test } from "@playwright/test";

test('Conferindo a compra',async ({page}) =>{
    
    await test.step ('login',async ()=> {

    await page.goto ('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[class="shopping_cart_link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await expect(await page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
});
});

test('Finalizando  a compra',async ({page}) =>{
    
    await test.step ('login',async ()=> {

    await page.goto ('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[class="shopping_cart_link"]').click();

    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('gigi');
    await page.locator('[data-test="lastName"]').fill('gigichr');
    await page.locator('[data-test="postalCode"]').fill('2035');

    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(await page.url()).toBe('https://www.saucedemo.com/checkout-complete.html');

    });
});

