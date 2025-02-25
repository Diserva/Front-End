import { test, expect } from '@playwright/test';

//

test.describe('authorization', async () => {
	test('should redirect user to discord on click', async ({ page }) => {
		await page.goto(process.env.BASE_URL as string);
		await page.getByText(/login/i).click();
		await expect(page).toHaveURL(
			process.env.NEXT_PUBLIC_DISCORD_AUTH_URL as string
		);
	});

	test('should redirect user to dashboard if cookie exist', async ({
		context,
		page
	}) => {
		await context.addCookies([{ name: 'jwt', value: 'some jwt value' }]);
		await page.goto(process.env.BASE_URL as string);
		await page.getByText('Увійти, як авторизований').click();
	});

	test('should get and write jwt token if user appears on callback page and redirect him to dashboard', async ({
		page
	}) => {
		await page.route('https://discord.com/api/oauth2/token', async route => {
			const randomToken = {
				access_token: 'random_access_token',
				expires_in: 0,
				refresh_token: 'none',
				scope: 'none',
				token_type: 'none'
			};

			await route.fulfill({ json: randomToken });
		});

		await page.route(
			`${process.env.BACKEND_URL}/auth/discord/`,
			async route => {

				
			}
		);

		await page.goto(
			`${process.env.NEXT_PUBLIC_DISCORD_AUTH_URL}/callback?code=testcode`
		);
	});
});

// такс, що мені треба. Поперше перевірити чи працюють конкретно ці тести. Далі перевірити, що при потраплянні на сторінку callback запит продовжує працювати. Тоді треба буде мокнути сервер, щоб він повернув jwt токен.

// перевірити, що клієнт рендерить карточки успішно
// перевірити, що клієнт рендерить юзера успішно
