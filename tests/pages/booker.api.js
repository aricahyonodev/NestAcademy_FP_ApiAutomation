import BaseApiSeed from "$root/pages/base.api";

const BaseApi = BaseApiSeed();

const bookerApi = {
  createToken: (data) => BaseApi.post("/auth", data),
  getBooking: () => BaseApi.get("/booking"),
  getBookingWithParams: (params) => BaseApi.get(`/booking?${params}`),
  getBookingById: (id) => BaseApi.get(`/booking/${id}`),
  createBooking: (data) => BaseApi.post("/booking", data),
  updateBooking: (bookingId, bookingData, headers) =>
    BaseApiSeed(headers).put(`/booking/${bookingId}`, bookingData),
  partialUpdateBooking: (bookingId, bookingData, headers) =>
    BaseApiSeed(headers).patch(`/booking/${bookingId}`, bookingData),
  deleteBooking: (bookingId, headers) =>
    BaseApiSeed(headers).delete(`/booking/${bookingId}`),
  ping: () => BaseApi.get("/ping"),
};

export default bookerApi;
