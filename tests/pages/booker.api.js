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
};

export default bookerApi;
