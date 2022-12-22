import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as bookingData from "$root/data/booking.data";
import * as headerData from "$root/data/headers.data";
import * as resCode from "$root/data/res-status.data";
import * as userData from "$root/data/user.data";

describe("Update Booking - PUT /booking/:id", () => {
  describe("Successfuly Update Booking", () => {
    let bookingId = null;
    let headers = {};

    before(async () => {
      // Create authorized token
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
    }, 5000);

    it("Verify that the API returns a 200 status code when updating a booking successfully", async () => {
      const res = await bookerApi.updateBooking(
        bookingId,
        bookingData.UPDATE_BOOKING,
        headers
      );
      assert.equal(res.status, resCode.STATUS.OK);
    });
  });
});
