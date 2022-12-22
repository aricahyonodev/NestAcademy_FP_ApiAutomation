import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/booking.data";
import { getObjKey } from "$root/helpers/add-fun-object";

describe("Create Booking Positif Case", () => {
  it("successful create new booking", async () => {
    const res = await bookerApi.createBooking(data.BOOKING);
    assert.equal(res.status, 200);

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
