export const BOOKING_ID_NOT_REGISTERED = 900000;
export const BOOKING_ID_STRING = "ABC";

export const BOOKING = {
  firstname: "user_test",
  lastname: "kelompok 2",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

export const UPDATE_BOOKING = {
  firstname: "user_test_updated",
  lastname: "kelompok 2 updated",
  totalprice: 112,
  depositpaid: false,
  bookingdates: {
    checkin: "2023-01-01",
    checkout: "2023-02-02",
  },
  additionalneeds: "DoubleBed",
};

export const BOOKING_NOT_REGISTERED = {
  firstname: "user_test REGISTERED",
  lastname: "kelompok 2 REGISTERED",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "3019-01-01",
  },
  additionalneeds: "Breakfast",
};
