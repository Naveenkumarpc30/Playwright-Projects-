class SearchHotel {
    constructor(page) {
        this.page = page;
        this.location = page.locator('select[name="location"]');
        this.hotel = page.locator('select[name="hotels"]');
        this.roomType = page.locator('select[name="room_type"]');
        this.roomNo = page.locator('select[name="room_nos"]');
        this.checkIn = page.locator('input[name="datepick_in"]');
        this.checkOut = page.locator('input[name="datepick_out"]');
        this.adults = page.locator('select[name="adult_room"]');
        this.children = page.locator('select[name="child_room"]');   
        this.searchBtn = page.locator('input[name="Submit"]');
        this.firstHotel = page.locator('input[name="radiobutton_0"]');
        this.continueBtn = page.locator('input[name="continue"]');
    }
    async search() {
        await this.location.selectOption({ label: 'Sydney' });
        await this.hotel.selectOption({ label: 'Hotel Creek' });
        await this.roomType.selectOption({ label: 'Double' });
        await this.roomNo.selectOption({ label: '2 - Two' });
        await this.checkIn.fill('25/10/2026');
        await this.checkOut.fill('27/10/2026');
        await this.adults.selectOption({ label: '2 - Two' });
        await this.children.selectOption({ label: '1 - One' });
        await this.searchBtn.click();
    }
    async selectHotel() {
        await this.firstHotel.check();
        await this.continueBtn.click();
    }
}
module.exports = { SearchHotel };
