import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/booking.data";
import { getObjKey, removeKeyObjBooking } from "$root/helpers/add-fun-object";
import * as res_code from "$root/data/res-status.data";

describe("Create Booking Positif Case", () => {
  it("successful create new booking", async () => {
    const res = await bookerApi.createBooking(data.BOOKING);
    assert.equal(res.status, res_code.STATUS.OK);

    const { booking: resBooking } = res.data;

    const valFirstname = data.BOOKING.firstname;
    const keyFirstname = getObjKey(data.BOOKING, valFirstname);
    assert.propertyVal(resBooking, keyFirstname, valFirstname);

    const valLastname = data.BOOKING.lastname;
    const keyLastname = getObjKey(data.BOOKING, valLastname);
    assert.propertyVal(resBooking, keyLastname, valLastname);

    const valTotalprice = data.BOOKING.totalprice;
    const keyTotalprice = getObjKey(data.BOOKING, valTotalprice);
    assert.propertyVal(resBooking, keyTotalprice, valTotalprice);

    const valDepositpaid = data.BOOKING.depositpaid;
    const keyDepositpaid = getObjKey(data.BOOKING, valDepositpaid);
    assert.propertyVal(resBooking, keyDepositpaid, valDepositpaid);

    const valCheckin = data.BOOKING.bookingdates.checkin;
    const keyCheckin = getObjKey(data.BOOKING.bookingdates, valCheckin);
    assert.propertyVal(resBooking.bookingdates, keyCheckin, valCheckin);

    const valCheckout = data.BOOKING.bookingdates.checkout;
    const keyCheckout = getObjKey(data.BOOKING.bookingdates, valCheckout);
    assert.propertyVal(resBooking.bookingdates, keyCheckout, valCheckout);

    const valAdditionalneeds = data.BOOKING.additionalneeds;
    const keyAdditionalneeds = getObjKey(data.BOOKING, valAdditionalneeds);
    assert.propertyVal(resBooking, keyAdditionalneeds, valAdditionalneeds);
  });
});

describe("Create Booking Negative Case", () => {
  describe('Remove 1 Data', () => { 
    it("create new booking without firstname", async () => {
      const newDataBooking = { ...data.BOOKING };
      delete newDataBooking.firstname;
      const res = await bookerApi.createBooking(newDataBooking);
      assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
      assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
    });
    it("create new booking without lastname", async () => {
      const newDataBooking = { ...data.BOOKING };
      delete newDataBooking.lastname;
      const res = await bookerApi.createBooking(newDataBooking);
      assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
      assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
    });
    it("create new booking without total price", async () => {
      const newDataBooking = { ...data.BOOKING };
      delete newDataBooking.totalprice;
      const res = await bookerApi.createBooking(newDataBooking);
      assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
      assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
    });

    it("create new booking without deposit paid", async () => {
      const newDataBooking = { ...data.BOOKING };
      delete newDataBooking.depositpaid;
      const res = await bookerApi.createBooking(newDataBooking);
      assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
      assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
    });

    it("create new booking without checkin", async () => {
      const newDataBooking = { ...data.BOOKING };
      delete newDataBooking.bookingdates.checkin;
      const res = await bookerApi.createBooking(newDataBooking);
      assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
      assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
    });

    it("create new booking without checkout", async () => {
      const newDataBooking = { ...data.BOOKING };
      delete newDataBooking.bookingdates.checkout;
      const res = await bookerApi.createBooking(newDataBooking);
      assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
      assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
    });

    it("create new booking without additional needs", async () => {
      const newDataBooking = { ...data.BOOKING };
      delete newDataBooking.additionalneeds;
      const res = await bookerApi.createBooking(newDataBooking);
      assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
      assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
    });
   })

     const valFirstnameRegist = data.BOOKING.firstname;
     const keyFirstnameRegist = getObjKey(data.BOOKING, valFirstnameRegist);
     const valLastnameRegist = data.BOOKING.lastname;
     const keyLastnameRegist = getObjKey(data.BOOKING, valLastnameRegist);
     const valTotalPriceRegist = data.BOOKING.totalprice;
     const keyTotalPriceRegist = getObjKey(data.BOOKING, valTotalPriceRegist);
     const valDepositPaidRegist = data.BOOKING.depositpaid;
     const keyDepositPaidRegist = getObjKey(data.BOOKING, valDepositPaidRegist);
     const valCheckinRegist = data.BOOKING.bookingdates.checkin;
     const keyCheckinRegist = getObjKey(
       data.BOOKING.bookingdates,
       valCheckinRegist
     );
     const valCheckoutRegist = data.BOOKING.bookingdates.checkout;
     const keyCheckoutRegist = getObjKey(
       data.BOOKING.bookingdates,
       valCheckoutRegist
     );
     const valAdditionalNeedsRegist = data.BOOKING.additionalneeds;
     const keyAdditionalNeedsRegist = getObjKey(
       data.BOOKING,
       valAdditionalNeedsRegist
     );

   describe("Remove 2 Data", () => {
      it("create new booking without firstname & lastname", async () => {
        const removeKey = [keyFirstnameRegist, keyLastnameRegist]
        const newDataBooking = removeKeyObjBooking(removeKey);
        
        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

       it("create new booking without lastname & total price", async () => {
         const removeKey = [keyLastnameRegist, keyTotalPriceRegist];
         const newDataBooking = removeKeyObjBooking(removeKey);

         const res = await bookerApi.createBooking(newDataBooking);
         assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
         assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
       });

       it("create new booking without total price & deposit paid", async () => {
         const removeKey = [keyTotalPriceRegist, keyDepositPaidRegist];
         const newDataBooking = removeKeyObjBooking(removeKey);

         const res = await bookerApi.createBooking(newDataBooking);
         assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
         assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
       });

       it("create new booking without deposit paid & checkin", async () => {
         const removeKey = [keyDepositPaidRegist, keyCheckinRegist];
         const newDataBooking = removeKeyObjBooking(removeKey);

         const res = await bookerApi.createBooking(newDataBooking);
         assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
         assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
       });

      it("create new booking without checkin & checkout", async () => {
        const removeKey = [keyCheckinRegist, keyCheckoutRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);
        
        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without checkout & additional needs", async () => {
        const removeKey = [keyCheckoutRegist, keyAdditionalNeedsRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);
        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });
   });

    describe("Remove 3 Data", () => {
      it("create new booking without firstname, lastname, totalprice", async () => {
        const removeKey = [keyFirstnameRegist, keyLastnameRegist, keyTotalPriceRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without lastname, total price, deposit paid", async () => {
        const removeKey = [keyLastnameRegist, keyTotalPriceRegist, keyDepositPaidRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without total price, deposit paid, checkin ", async () => {
        const removeKey = [keyTotalPriceRegist, keyDepositPaidRegist, keyCheckinRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without deposit paid, checkin, checkout", async () => {
        const removeKey = [keyDepositPaidRegist, keyCheckinRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without checkin, checkout, additional needs", async () => {
        const removeKey = [keyCheckinRegist, keyCheckoutRegist, keyAdditionalNeedsRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });
    });

    describe("Remove 4 Data", () => {
      it("create new booking without firstname, lastname, totalprice, deposit paid", async () => {
        const removeKey = [keyFirstnameRegist, keyLastnameRegist, keyTotalPriceRegist, keyDepositPaidRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without lastname, total price, deposit paid, checkin", async () => {
        const removeKey = [keyLastnameRegist, keyTotalPriceRegist, keyDepositPaidRegist, keyCheckinRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without total price, deposit paid, checkin, checkout", async () => {
        const removeKey = [keyTotalPriceRegist, keyDepositPaidRegist, keyCheckinRegist, keyCheckoutRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without deposit paid, checkin, checkout, additional needs", async () => {
        const removeKey = [keyDepositPaidRegist, keyCheckinRegist, keyAdditionalNeedsRegist];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });
    });

    describe("Remove 5 Data", () => {
      it("create new booking without firstname, lastname, totalprice, deposit paid, checkin", async () => {
        const removeKey = [
          keyFirstnameRegist,
          keyLastnameRegist,
          keyTotalPriceRegist,
          keyDepositPaidRegist,
          keyCheckinRegist
        ];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without lastname, total price, deposit paid, checkin, checkout", async () => {
        const removeKey = [
          keyLastnameRegist,
          keyTotalPriceRegist,
          keyDepositPaidRegist,
          keyCheckinRegist,
          keyCheckoutRegist,
        ];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });

      it("create new booking without total price, deposit paid, checkin, checkout, additional needs", async () => {
        const removeKey = [
          keyTotalPriceRegist,
          keyDepositPaidRegist,
          keyCheckinRegist,
          keyCheckoutRegist,
          keyAdditionalNeedsRegist
        ];
        const newDataBooking = removeKeyObjBooking(removeKey);

        const res = await bookerApi.createBooking(newDataBooking);
        assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
        assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
      });
    });

     describe("Remove 6 Data", () => {
       it("create new booking without firstname, lastname, totalprice, deposit paid, checkin, checkout", async () => {
         const removeKey = [
           keyFirstnameRegist,
           keyLastnameRegist,
           keyTotalPriceRegist,
           keyDepositPaidRegist,
           keyCheckinRegist,
           keyCheckoutRegist
         ];
         const newDataBooking = removeKeyObjBooking(removeKey);

         const res = await bookerApi.createBooking(newDataBooking);
         assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
         assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
       });

       it("create new booking without lastname, total price, deposit paid, checkin, checkout, additional needs", async () => {
         const removeKey = [
           keyLastnameRegist,
           keyTotalPriceRegist,
           keyDepositPaidRegist,
           keyCheckinRegist,
           keyCheckoutRegist,
           keyAdditionalNeedsRegist
         ];
         const newDataBooking = removeKeyObjBooking(removeKey);

         const res = await bookerApi.createBooking(newDataBooking);
         assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
         assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
       });
     });

     describe("Remove 7 Data Or All data", () => {
       it("create new booking without firstname, lastname, totalprice, deposit paid, checkin, checkout, additional needs", async () => {
         const removeKey = [
           keyFirstnameRegist,
           keyLastnameRegist,
           keyTotalPriceRegist,
           keyDepositPaidRegist,
           keyCheckinRegist,
           keyCheckoutRegist,
           keyAdditionalNeedsRegist
         ];
         const newDataBooking = removeKeyObjBooking(removeKey);

         const res = await bookerApi.createBooking(newDataBooking);
         assert.equal(res.status, res_code.STATUS.SERVER_ERROR);
         assert.strictEqual(res.data, res_code.MESSAGE_STATUS.SERVER_ERROR);
       });
     });

});
