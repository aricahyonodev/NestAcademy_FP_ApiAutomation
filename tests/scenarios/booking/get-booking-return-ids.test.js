import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/booking.data";
import { getObjKey } from "$root/helpers/add-fun-object";
import { genParamsByObject } from "$root/helpers/lib-url";
import * as res_code from "$root/data/res-status.data";

describe("Get Booking Positif Case", () => {
  let bookingid = null;

  before(async () => {
    // runs before all tests in this file regardless where this line is defined.
    const res = await bookerApi.createBooking(data.BOOKING);
    bookingid = res.data.bookingid;
  });

    it("successful get all list booking", async () => {
      const res = await bookerApi.getBooking();
      assert.equal(res.status, res_code.STATUS.OK);
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

        assert.equal(res.status, res_code.STATUS.OK);
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

        assert.equal(res.status, res_code.STATUS.OK);
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

        assert.equal(res.status, res_code.STATUS.OK);
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

        assert.equal(res.status, res_code.STATUS.OK);
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

        assert.equal(res.status, res_code.STATUS.OK);
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

        assert.equal(res.status, res_code.STATUS.OK);
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

        assert.equal(res.status, res_code.STATUS.OK);
        assert.typeOf(res.data, "array");
        assert.isNotEmpty(res.data);

        const resBookingId = res.data.filter(
          (dt) => dt.bookingid === bookingid
        );
        assert.strictEqual(resBookingId[0].bookingid, bookingid);
      });
    });

});

describe("Get Booking Negative Case", () => {

       before(async () => {
         // runs before all tests in this file regardless where this line is defined.
          await bookerApi.createBooking(data.BOOKING);
       });

      const valFirstnameRegist = data.BOOKING.firstname;
      const keyFirstnameRegist = getObjKey(data.BOOKING, valFirstnameRegist);
      const valLastnameRegist = data.BOOKING.lastname;
      const keyLastnameRegist = getObjKey(data.BOOKING, valLastnameRegist);
      const valCheckoutRegist = data.BOOKING.bookingdates.checkout;
      const keyCheckoutRegist = getObjKey(data.BOOKING.bookingdates, valCheckoutRegist);
      
      const valFirstnameNotRegist = data.BOOKING_NOT_REGISTERED.firstname;
      const keyFirstnameNotRegist = getObjKey(data.BOOKING_NOT_REGISTERED, valFirstnameNotRegist);
      const valLastnameNotRegist = data.BOOKING_NOT_REGISTERED.lastname;
      const keyLastnameNotRegist = getObjKey(data.BOOKING_NOT_REGISTERED, valLastnameNotRegist);
      const valCheckoutNotRegist = data.BOOKING_NOT_REGISTERED.bookingdates.checkout;
      const keyCheckoutNotRegist = getObjKey(data.BOOKING_NOT_REGISTERED.bookingdates, valCheckoutNotRegist);
 
     describe('With 1 params', () => { 
       it("get list booking by firstname not registered ", async () => {
         const objParam = {};
         objParam[keyFirstnameNotRegist] = valFirstnameNotRegist;

         const params = genParamsByObject(objParam);
         const res = await bookerApi.getBookingWithParams(params);
         assert.equal(res.status, res_code.STATUS.OK);
         assert.typeOf(res.data, "array");
         assert.isEmpty(res.data);
       });

       it("get list booking by lastname not registered ", async () => {
         const objParam = {};
         objParam[keyLastnameNotRegist] = valLastnameNotRegist;

         const params = genParamsByObject(objParam);
         const res = await bookerApi.getBookingWithParams(params);
         assert.equal(res.status, res_code.STATUS.OK);
         assert.typeOf(res.data, "array");
         assert.isEmpty(res.data);
       });
      })
     
  it.skip("get list booking by checkout not registered ", async () => {
        const objParam = {};
        objParam[keyCheckout] = valCheckout;

        const params = genParamsByObject(objParam);
        const res = await bookerApi.getBookingWithParams(params);
        assert.equal(res.status, res_code.STATUS.OK);
        assert.typeOf(res.data, "array");
        assert.isEmpty(res.data);
  });

  describe('With 2 Params', () => { 
    it("get list booking by firstname registered & lastname not registered", async () => {
      const objParam = {};
      objParam[keyFirstnameRegist] = valFirstnameRegist;
      objParam[keyLastnameNotRegist]  = valLastnameNotRegist;

      const params = genParamsByObject(objParam);
      const res = await bookerApi.getBookingWithParams(params);
      assert.equal(res.status, res_code.STATUS.OK);
      assert.typeOf(res.data, "array");
      assert.isEmpty(res.data);
    });

    it("get list booking by firstname not registered & lastname registered", async () => {
      const objParam = {};
      objParam[keyFirstnameNotRegist] = valFirstnameNotRegist;
      objParam[keyLastnameRegist] = valLastnameRegist;

      const params = genParamsByObject(objParam);
      const res = await bookerApi.getBookingWithParams(params);
      assert.equal(res.status, res_code.STATUS.OK);
      assert.typeOf(res.data, "array");
      assert.isEmpty(res.data);
    });

    it.skip("get list booking by firstname registered & lastname not registered", async () => {
      const objParam = {};
      objParam[keyFirstnameRegist]    = valFirstnameRegist;
      objParam[keyCheckoutNotRegist]  = valCheckoutNotRegist;

      const params = genParamsByObject(objParam);
      console.log(params);
      const res = await bookerApi.getBookingWithParams(params);
      assert.equal(res.status, res_code.STATUS.OK);
      assert.typeOf(res.data, "array");
      assert.isEmpty(res.data);
    });

    it("get list booking by firstname not registered & checkout registered", async () => {
      const objParam = {};
      objParam[keyFirstnameNotRegist] = valFirstnameNotRegist;
      objParam[keyCheckoutRegist]     = valCheckoutRegist;

      const params = genParamsByObject(objParam);
      const res = await bookerApi.getBookingWithParams(params);
      assert.equal(res.status, res_code.STATUS.OK);
      assert.typeOf(res.data, "array");
      assert.isEmpty(res.data);
    });

    it.skip("get list booking by lastname registered & checkout not registered", async () => {
      const objParam = {};
      objParam[keyLastnameRegist]  = valLastnameRegist;
      objParam[keyCheckoutNotRegist]  = valCheckoutNotRegist;

      const params = genParamsByObject(objParam);
      const res = await bookerApi.getBookingWithParams(params);
      assert.equal(res.status, res_code.STATUS.OK);
      assert.typeOf(res.data, "array");
      assert.isEmpty(res.data);
    });

    it("get list booking by lastname not registered & lastname registered", async () => {
      const objParam = {};
      objParam[keyLastnameNotRegist]  = valLastnameNotRegist;
      objParam[keyCheckoutRegist] = valCheckoutRegist;

      const params = genParamsByObject(objParam);
      const res = await bookerApi.getBookingWithParams(params);
      assert.equal(res.status, res_code.STATUS.OK);
      assert.typeOf(res.data, "array");
      assert.isEmpty(res.data);
    });
   })

   describe('with 3 params', () => { 
     it("get list booking by firstname register, lastname, & checout not registered", async () => {
       const objParam = {};
       objParam[keyFirstnameRegist] = valFirstnameRegist;
       objParam[keyLastnameNotRegist] = valLastnameNotRegist;
       objParam[keyCheckoutNotRegist] = valCheckoutNotRegist;

       const params = genParamsByObject(objParam);
       const res = await bookerApi.getBookingWithParams(params);
       assert.equal(res.status, res_code.STATUS.OK);
       assert.typeOf(res.data, "array");
       assert.isEmpty(res.data);
     });

     it.skip("get list booking by firstname register, lastname register, & checout not registered", async () => {
       const objParam = {};
       objParam[keyFirstnameRegist]   = valFirstnameRegist;
       objParam[keyLastnameRegist]    = valLastnameRegist;
       objParam[keyCheckoutNotRegist] = valCheckoutNotRegist;

       const params = genParamsByObject(objParam);
       const res = await bookerApi.getBookingWithParams(params);
       assert.equal(res.status, res_code.STATUS.OK);
       assert.typeOf(res.data, "array");
       assert.isEmpty(res.data);
     });

     it("get list booking by firstname not register, lastname register, & checout not registered", async () => {
       const objParam = {};
       objParam[keyFirstnameNotRegist] = valFirstnameNotRegist;
       objParam[keyLastnameRegist] = valLastnameRegist;
       objParam[keyCheckoutNotRegist] = valCheckoutNotRegist;

       const params = genParamsByObject(objParam);
       const res = await bookerApi.getBookingWithParams(params);
       assert.equal(res.status, res_code.STATUS.OK);
       assert.typeOf(res.data, "array");
       assert.isEmpty(res.data);
     });

     it("get list booking by firstname not register, lastname not register, & checout registered", async () => {
       const objParam = {};
       objParam[keyFirstnameNotRegist] = valFirstnameNotRegist;
       objParam[keyLastnameNotRegist] = valLastnameNotRegist;
       objParam[keyCheckoutRegist] = valCheckoutRegist;

       const params = genParamsByObject(objParam);
       const res = await bookerApi.getBookingWithParams(params);
       assert.equal(res.status, res_code.STATUS.OK);
       assert.typeOf(res.data, "array");
       assert.isEmpty(res.data);
     });

     it("get list booking by firstname register, lastname, & checout not registered", async () => {
       const objParam = {};
       objParam[keyFirstnameNotRegist] = valFirstnameNotRegist;
       objParam[keyLastnameNotRegist] = valLastnameNotRegist;
       objParam[keyCheckoutNotRegist] = valCheckoutNotRegist;

       const params = genParamsByObject(objParam);
       const res = await bookerApi.getBookingWithParams(params);
       assert.equal(res.status, res_code.STATUS.OK);
       assert.typeOf(res.data, "array");
       assert.isEmpty(res.data);
     });
    })
 
 
});
