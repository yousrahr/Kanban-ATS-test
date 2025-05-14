import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('http://localhost:3000/');
   await page.getByRole('button', { name: '+ Add New Task' }).click();
  await page.getByRole('button', { name: 'Create Task' }).click();
  await page.getByRole('textbox', { name: 'Task Name Description' }).click();
  await page.getByRole('textbox', { name: 'Task Name Description' }).fill('create negative test scenario ');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).click();
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).fill('i will try to create this task without adding eny subtasks ');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'e.g. It\'s always good to take' }).fill('i will try to create this task without adding any subtasks ');
  await page.getByRole('button', { name: 'Create Task' }).click();
});