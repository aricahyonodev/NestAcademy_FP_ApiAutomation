import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/booking.data";

describe("Get Booking By Id Positif Case", () => {
  let bookingid = null;

  before(async () => {
    // runs before all tests in this file regardless where this line is defined.
    const res = await bookerApi.createBooking(data.BOOKING);
    bookingid = res.data.bookingid;
  });

    it("successful get booking by id registered", async () => {
      const res = await bookerApi.getBookingById(bookingid);
      assert.equal(res.status, 200);
      assert.hasAllDeepKeys(res.data, Object.keys(data.BOOKING));
      assert.hasAllDeepKeys(
        res.data.bookingdates,
        Object.keys(data.BOOKING.bookingdates)
      );
    });
});
