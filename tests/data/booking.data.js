import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

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

const checkinTime = dayjs(faker.datatype.datetime());
const checkinDate = checkinTime.format("YYYY-MM-DD");
const checkoutDate = checkinTime
  .add(faker.datatype.number({ min: 1, max: 31 }), "day")
  .format("YYYY-MM-DD");

export const UPDATE_BOOKING = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  totalprice: faker.datatype.number({ min: 50000, max: 2000000 }),
  depositpaid: faker.datatype.boolean(),
  bookingdates: {
    checkin: checkinDate,
    checkout: checkoutDate,
  },
  additionalneeds: faker.word.adverb(),
};

export const INVALID_UPDATE_BOOKING = {
  firstname: true,
  lastname: false,
  totalprice: "string",
  depositpaid: [],
  bookingdates: {
    checkin: "XXXX",
    checkout: "XXX",
  },
  additionalneeds: 1,
};

export const PARTIAL_UPDATE_BOOKING = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
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
