import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as bookingData from "$root/data/booking.data";
import * as headerData from "$root/data/headers.data";
import * as resCode from "$root/data/res-status.data";
import * as userData from "$root/data/user.data";

describe("Partial Update Booking - PATCH /booking/:id", () => {
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

  describe("Successfuly Partial Update Booking", () => {
    it("verify that the API returns a 200 status code when updating a booking successfully", async () => {
      const res = await bookerApi.partialUpdateBooking(
        bookingId,
        bookingData.PARTIAL_UPDATE_BOOKING,
        headers
      );
      assert.equal(res.status, resCode.STATUS.OK);
    });

    it("verify that the API only update firstname and lastname of the original booking data", async () => {
      const res = await bookerApi.partialUpdateBooking(
        bookingId,
        bookingData.PARTIAL_UPDATE_BOOKING,
        headers
      );

      const propertiesToVerify = Object.keys(bookingData.UPDATE_BOOKING); // ['firstname', 'lastname', etc]
      const expectedBookingData = {
        ...bookingData.BOOKING,
        ...bookingData.PARTIAL_UPDATE_BOOKING,
      };
      propertiesToVerify.forEach((property) => {
        if (property === "bookingdates") {
          assert.deepEqual(
            res.data.bookingdates,
            expectedBookingData.bookingdates
          );
        } else {
          assert.equal(res.data[property], expectedBookingData[property]);
        }
      });
    });

    describe("Testing partial update for each property", () => {
      const updateBookingData = Object.freeze(bookingData.UPDATE_BOOKING);
      const bookingProperties = Object.keys(updateBookingData); // ['firstname', 'lastname', etc]

      for (let index = 0; index < bookingProperties.length; index++) {
        const property = bookingProperties[index];
        it(`verify that the API returns the updated booking in the response body when updating booking ${property} successfully`, async () => {
          const res = await bookerApi.partialUpdateBooking(
            bookingId,
            { [property]: updateBookingData[property] },
            headers
          );

          if (property === "bookingdates") {
            assert.deepEqual(
              res.data.bookingdates,
              updateBookingData.bookingdates
            );
          } else {
            assert.equal(res.data[property], updateBookingData[property]);
          }
        });
      }
    });
  });

  describe("Failed Partial Update Booking", () => {
    it("verify that the API returns a 403 status code when updating a booking with unauthorized header", async () => {
      const res = await bookerApi.partialUpdateBooking(
        bookingId,
        bookingData.PARTIAL_UPDATE_BOOKING,
        {}
      );
      assert.equal(res.status, resCode.STATUS.FORBIDDEN);
    });

    it("verify that the API returns a 405 status code when updating a booking with deleted booking id", async () => {
      await bookerApi.deleteBooking(bookingId, headers);

      const res = await bookerApi.partialUpdateBooking(
        bookingId,
        bookingData.PARTIAL_UPDATE_BOOKING,
        headers
      );
      assert.equal(res.status, resCode.STATUS.METHOD_NOT_ALLOWED);
    });
  });
});
