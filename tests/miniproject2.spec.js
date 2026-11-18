const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginpage.js');
const { SearchHotel } = require('../pages/searchhotel.js');
const { BookHotel } = require('../pages/bookhotel.js');

test('Adactin Hotel Booking', async ({ browser }) => {

    const context = await browser.newContext({
        recordVideo: { dir: 'videos/' }
    });

    const page = await context.newPage();

    // Login
    await page.goto('https://adactinhotelapp.com/');
    const login = new LoginPage(page);
    await login.login('Naveen87', 'Naveen87@@');    

    await expect(page.locator('select[name="location"]')).toBeVisible();
    await page.screenshot({ path: 'screenshots/logins.png' });

    // Search Hotel
    const search = new SearchHotel(page);
    await search.search();

    await expect(page.locator('input[name="radiobutton_0"]')).toBeVisible();
    //await page.screenshot({ path: 'screenshots/page1.png' });
    await search.selectHotel();
    await page.screenshot({ path: 'screenshots/page1.png' });

    // Book Hotel
    const book = new BookHotel(page);
    await book.book();


    await page.waitForURL('**/BookingConfirm.php');
    
    await expect(page.locator('input[name="logout"]')).toBeVisible();

    await page.screenshot({
    path: 'screenshots/page2.png'
    });

  // STEP 4: LOGOUT
    await book.logout();
    await expect(page.getByText('Click here to login again')).toBeVisible();

    await context.close();
});
