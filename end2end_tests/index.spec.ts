import test, { chromium } from '@playwright/test';

test.describe('should be able to login', () => {
	test('login', async () => {
		const chrome = await chromium.launch();
		const context = await chrome.newContext();
		const page = await context.newPage();
		await page.goto(process.env.NEXT_PUBLIC_BASE_URL as string);
		await page.getByText(/login/i).click();
	});
});
