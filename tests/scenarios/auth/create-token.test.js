import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/user.data";

describe("Create Token Positif Case", () => {
  it("successful create token", async () => {
    const res = await bookerApi.createToken(data.USERS_REGISTERED);
    assert.equal(res.status, 200);
  });
});
