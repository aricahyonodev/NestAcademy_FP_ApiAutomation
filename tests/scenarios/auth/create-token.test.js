import { assert } from "chai";
import reqresApi from "$root/pages/reqres.api";
import * as data from "$root/data/user.data";

describe("Auth", () => {
  it("successful create token", async () => {
    const res = await reqresApi.createToken(data.USERS_REGISTERED);
    assert.equal(res.status, 200);
  });
});
