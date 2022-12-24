import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as bookingData from "$root/data/booking.data";
import * as headerData from "$root/data/headers.data";
import * as resCode from "$root/data/res-status.data";
import * as userData from "$root/data/user.data";

describe("Update Booking - PUT /booking/:id", () => {
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

    // Create a booking to update
    const res = await bookerApi.createBooking(bookingData.BOOKING);
    bookingId = res.data.bookingid;

    // Telling Mocha that the hook is finished running and it can proceed with the tests.
    return Promise.resolve();
  });

  describe("Successfuly Update Booking", () => {
    it("verify that the API returns a 200 status code when updating a booking successfully", async () => {
      const res = await bookerApi.updateBooking(
        bookingId,
        bookingData.UPDATE_BOOKING,
        headers
      );
      assert.equal(res.status, resCode.STATUS.OK);
    });

    it("verify that the API returns the updated booking in the response body when updating a booking successfully", async () => {
      const updateBookingData = Object.freeze(bookingData.UPDATE_BOOKING);
      const res = await bookerApi.updateBooking(
        bookingId,
        updateBookingData,
        headers
      );
      const propertiesToVerify = Object.keys(updateBookingData); // ['firstname', 'lastname', etc]

      propertiesToVerify.forEach((property) => {
        if (property === "bookingdates") {
          assert.deepEqual(
            res.data.bookingdates,
            updateBookingData.bookingdates
          );
        } else {
          assert.equal(res.data[property], updateBookingData[property]);
        }
      });
    });
  });

  describe("Failed Update Booking", () => {
    it("verify that the API returns a 403 status code when updating a booking with unauthorized header", async () => {
      const res = await bookerApi.updateBooking(
        bookingId,
        bookingData.UPDATE_BOOKING,
        {}
      );
      assert.equal(res.status, resCode.STATUS.FORBIDDEN);
    });

    it("verify that the API returns a 500 status code when encountering an internal server error", async () => {
      const res = await bookerApi.updateBooking(
        bookingId,
        bookingData.INVALID_UPDATE_BOOKING,
        headers
      );
      assert.equal(res.status, resCode.STATUS.INTERNAL_SERVER_ERROR);
    });

    it("verify that the API returns a 405 status code when updating a booking with deleted booking id", async () => {
      await bookerApi.deleteBooking(bookingId, headers);

      const res = await bookerApi.updateBooking(
        bookingId,
        bookingData.UPDATE_BOOKING,
        headers
      );
      assert.equal(res.status, resCode.STATUS.METHOD_NOT_ALLOWED);
    });
  });
});
