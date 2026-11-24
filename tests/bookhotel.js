class BookHotel {
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('input[name="first_name"]');
        this.lastName = page.locator('input[name="last_name"]');
        this.address = page.locator('textarea[name="address"]');
        this.cardNumber = page.locator('input[name="cc_num"]');
        this.cardType = page.locator('select[name="cc_type"]');
        this.expiryMonth = page.locator('select[name="cc_exp_month"]');
        this.expiryYear = page.locator('select[name="cc_exp_year"]');
        this.cvv = page.locator('input[name="cc_cvv"]');
        this.bookNow = page.locator('input[name="book_now"]');
        this.logoutBtn = page.locator('input[name="logout"]');
    }

    async book() {
        await this.firstName.fill('Naveen');
        await this.lastName.fill('Kumar');
        await this.address.fill(
            'Sample Address, Kundrathur, Chennai'
        );

        
        await this.cardNumber.fill('1029384756018230');
        await this.cardType.selectOption({ label: 'VISA' });
        await this.expiryMonth.selectOption({ label: 'May' });
        await this.expiryYear.selectOption({ label: '2030' });
        await this.cvv.fill('778');

        await this.bookNow.click();
    }

    async logout() {
        await this.logoutBtn.click();
    }
}

module.exports = { BookHotel };
