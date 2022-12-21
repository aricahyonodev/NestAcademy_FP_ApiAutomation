import BaseApi from "$root/pages/base.api";

const reqresApi = {
  createToken: (data) => BaseApi.post("/auth", data),
  booking: () => BaseApi.get("/booking"),
};

export default reqresApi;