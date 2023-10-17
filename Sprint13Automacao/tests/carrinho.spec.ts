import {   expect, test } from "@playwright/test";

test('Colocando produto no carrinho',async ({page}) =>{
    
    await test.step ('login',async ()=> {

    await page.goto ('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    const shopping_cart_badge = await page.locator ('.header_secondary_container > span');

    await expect (shopping_cart_badge).toBeVisible();

    });
});

test('Acessando o carrinho',async ({page}) =>{
    
    await test.step ('login',async ()=> {

    await page.goto ('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[class="shopping_cart_link"]').click();
    await expect(await page.url()).toBe('https://www.saucedemo.com/cart.html');

    });
});



test('Retirando o  produto no carrinho',async ({page}) =>{

    await test.step ('login',async ()=> {

    await page.goto ('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    const shopping_cart_badge = await page.locator ('.header_secondary_container > span');

    await expect (shopping_cart_badge).toBeVisible();
    });
  
});
