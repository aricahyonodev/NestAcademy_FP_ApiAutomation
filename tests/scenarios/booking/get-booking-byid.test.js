import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/booking.data";
import * as res_code from "$root/data/res-status.data";

describe("Get Booking By Id Positif Case", () => {
  let bookingid = null;

  before(async () => {
    // runs before all tests in this file regardless where this line is defined.
    const res = await bookerApi.createBooking(data.BOOKING);
    bookingid = res.data.bookingid;
  });

    it("successful get booking by id registered", async () => {
      const res = await bookerApi.getBookingById(bookingid);
      assert.equal(res.status, res_code.STATUS.OK);
      assert.hasAllDeepKeys(res.data, Object.keys(data.BOOKING));
      assert.hasAllDeepKeys(
        res.data.bookingdates,
        Object.keys(data.BOOKING.bookingdates)
      );
    });
});

describe("Get Booking By Id Negative Case", () => {
  it("get booking by id not registered", async () => {
    const res = await bookerApi.getBookingById(data.BOOKING_ID_NOT_REGISTERED);
    assert.equal(res.status, 404);
    assert.equal(res.data, "Not Found");
  });

  it("get booking by id string", async () => {
    const res = await bookerApi.getBookingById(data.BOOKING_ID_STRING);
    assert.equal(res.status, res_code.STATUS.NOT_FOUND);
    assert.equal(res.data, "Not Found");
  });
});
