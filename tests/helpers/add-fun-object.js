import * as dataBooking from "$root/data/booking.data";

export const getObjKey = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};
export const removeKeyObjBooking = (removeKey) => {
  const newDataBooking = { ...dataBooking.BOOKING };
  const bookingdates = ["checkin", "checkout"];
  removeKey.forEach((e) => {
    if (bookingdates.includes(e)) {
      return delete newDataBooking.bookingdates[e]
    }
    return delete newDataBooking[e]
  });
  return newDataBooking;
};
