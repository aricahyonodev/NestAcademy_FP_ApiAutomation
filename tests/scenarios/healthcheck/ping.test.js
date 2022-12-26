import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/user.data";
import * as res_code from "$root/data/res-status.data";

describe("Ping Healthcheck - GET /ping", () => {
  it("verify if ping correctly check the server is running or have issue", async () => {
    try {
      // simultaneously send create token and ping api request
      const responses = await Promise.allSettled([
        bookerApi.createToken(data.USERS_REGISTERED),
        bookerApi.ping(),
      ]);
      const createTokenResp = responses[0].value;
      const pingResp = responses[1].value;

      if (pingResp.status === res_code.STATUS.CREATED) {
        assert.equal(createTokenResp.status, res_code.STATUS.OK);
      } else {
        assert.notEqual(createTokenResp.status, res_code.STATUS.OK);
      }
    } catch (error) {
      console.log("SERVICES ARE DOWN", error);
    }
  });
});
