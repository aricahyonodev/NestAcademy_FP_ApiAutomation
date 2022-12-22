import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/booking.data";
import { getObjKey } from "$root/helpers/add-fun-object";
import { genParamsByObject } from "$root/helpers/lib-url";

describe("Get Booking Positif Case", () => {
  let bookingid = null;

  before(async () => {
    // runs before all tests in this file regardless where this line is defined.
    const res = await bookerApi.createBooking(data.BOOKING);
    bookingid = res.data.bookingid;
  });

    it("successful get all list booking", async () => {
      const res = await bookerApi.getBooking();
      assert.equal(res.status, 200);
      assert.typeOf(res.data, "array");
      assert.isNotEmpty(res.data);
    });

    describe("With Params", () => {
      const valFirstname = data.BOOKING.firstname;
      const keyFirstname = getObjKey(data.BOOKING, valFirstname);
      const valLastname = data.BOOKING.lastname;
      const keyLastname = getObjKey(data.BOOKING, valLastname);
      const valCheckout = data.BOOKING.bookingdates.checkout;
      const keyCheckout = getObjKey(data.BOOKING.bookingdates, valCheckout);

      it("successful get list booking by firstname", async () => {
        const objParam = {};
        objParam[keyFirstname] = valFirstname;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);

        assert.equal(res.status, 200);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);
        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });

      it("successful get list booking by lastname", async () => {
        const objParam = {};
        objParam[keyLastname] = valLastname;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);

        assert.equal(res.status, 200);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);
        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });

      it("successful get list booking by checkout", async () => {
        const objParam = {};
        objParam[keyCheckout] = valCheckout;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);

        assert.equal(res.status, 200);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);
        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });

      it("successful get list booking by firstname & lastname", async () => {
        const objParam = {};
        objParam[keyFirstname] = valFirstname;
        objParam[keyLastname] = valLastname;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);

        assert.equal(res.status, 200);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);
        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });

      it("successful get list booking by firstname & checkout", async () => {
        const objParam = {};
        objParam[keyFirstname] = valFirstname;
        objParam[keyCheckout] = valCheckout;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);

        assert.equal(res.status, 200);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);
        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });

      it("successful get list booking by lastname & checkout", async () => {
        const objParam = {};
        objParam[keyLastname] = valLastname;
        objParam[keyCheckout] = valCheckout;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);

        assert.equal(res.status, 200);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);
        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });

      it("successful get list booking by firstname, lastname, & checkout", async () => {
        const objParam = {};
        objParam[keyFirstname] = valFirstname;
        objParam[keyLastname] = valLastname;
        objParam[keyCheckout] = valCheckout;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);

        assert.equal(res.status, 200);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);

        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });
    });

});
