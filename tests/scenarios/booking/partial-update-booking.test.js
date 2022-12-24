import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as bookingData from "$root/data/booking.data";
import * as headerData from "$root/data/headers.data";
import * as resCode from "$root/data/res-status.data";
import * as userData from "$root/data/user.data";

describe("Partial Update Booking - PATCH /booking/:id", () => {
  describe("Successfuly Partial Update Booking", () => {
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

    it("Verify that the API returns a 200 status code when partial update a booking success", async () => {
      const res = await bookerApi.partialUpdateBooking(
        bookingId,
        bookingData.PARTIAL_UPDATE_BOOKING,
        headers
      );
      assert.equal(res.status, resCode.STATUS.OK);
    });
  });
});
