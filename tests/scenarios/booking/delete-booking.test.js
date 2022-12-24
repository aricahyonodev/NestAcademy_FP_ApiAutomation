import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as bookingData from "$root/data/booking.data";
import * as headerData from "$root/data/headers.data";
import * as resCode from "$root/data/res-status.data";
import * as userData from "$root/data/user.data";

describe("Delete Booking - DELETE /booking/:id", () => {
  let bookingId = null;
  let headers = {};

  before(async () => {
    // Create authorized headers
    const createTokenResp = await bookerApi.createToken(
      userData.USERS_REGISTERED
    );
    headers = {
      ...headerData.VALID_AUTHORIZATION_HEADER,
      Cookie: `token=${createTokenResp.data.token}`,
    };

    // Telling Mocha that the hook is finished running and it can proceed with the tests.
    return Promise.resolve();
  });

  beforeEach(async () => {
    // Create a booking to update
    const res = await bookerApi.createBooking(bookingData.BOOKING);
    bookingId = res.data.bookingid;

    // Telling Mocha that the hook is finished running and it can proceed with the tests.
    return Promise.resolve();
  });
  describe("Successfuly Delete Booking", () => {
    it("Verify that the API returns a 201 status code when delete a booking success", async () => {
      const res = await bookerApi.deleteBooking(bookingId, headers);
      assert.equal(res.status, resCode.STATUS.CREATED);
    });

    it("Verify after delete a booking success when search with deleted id it will returns 404 status code", async () => {
      await bookerApi.deleteBooking(bookingId, headers);
      const getBookingResp = await bookerApi.getBookingById(bookingId);
      assert.equal(getBookingResp.status, resCode.STATUS.NOT_FOUND);
    });
  });

  describe("Failed Update Booking", () => {
    it("verify that the API returns a 403 status code when updating a booking with unauthorized header", async () => {
      const res = await bookerApi.deleteBooking(bookingId, {});
      assert.equal(res.status, resCode.STATUS.FORBIDDEN);
    });

    it("verify that the API returns a 405 status code when delete a booking with deleted booking id", async () => {
      await bookerApi.deleteBooking(bookingId, headers);
      const res = await bookerApi.deleteBooking(bookingId, headers);
      assert.equal(res.status, resCode.STATUS.METHOD_NOT_ALLOWED);
    });
  });
});
