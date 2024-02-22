import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React/);
});

test('get started link', async ({ page }) => {
  var email = "bob@test.com";
  var password = "Pa$$w0rd";

  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('button', { name: 'LogIn!' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Login to Reactivities' })).toBeVisible();
});
