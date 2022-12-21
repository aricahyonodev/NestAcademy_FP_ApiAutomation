import { assert } from "chai";
import reqresApi from "$root/pages/reqres.api";

describe("Get Booking", () => {
  it("successful get all list booking", async () => {
    const res = await reqresApi.booking();
    assert.equal(res.status, 200);
  });
});
