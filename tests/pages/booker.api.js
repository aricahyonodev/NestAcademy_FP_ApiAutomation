import BaseApi from "$root/pages/base.api";

const bookerApi = {
  createToken: (data) => BaseApi.post("/auth", data),
  getBooking: () => BaseApi.get("/booking"),
  getBookingWithParams: (params) => BaseApi.get(`/booking?${params}`),
  getBookingById: (id) => BaseApi.get(`/booking/${id}`),
  createBooking: (data) => BaseApi.post("/booking", data),
};

export default bookerApi;