import { assert } from "chai";
import bookerApi from "$root/pages/booker.api";
import * as data from "$root/data/user.data";
import * as auth from "$root/data/auth.data";
import * as res_code from "$root/data/res-status.data";
import { getObjKey } from "../../helpers/add-fun-object";

describe("Create Token Positif Case", () => {
  it("successful create token with data username & password registered", async () => {
    const res = await bookerApi.createToken(data.USERS_REGISTERED);
    assert.equal(res.status, res_code.STATUS.OK);
  });
});

describe("Create Token Negative Case", () => {
  it("create token with username & password not registered", async () => {
    const res = await bookerApi.createToken(data.USERS_NOT_REGISTERED);
    
    assert.equal(res.status, res_code.STATUS.OK);

     const valBadCredential = auth.BAD_CREDENTIALS.reason;
     const keyBadCredential = getObjKey(auth.BAD_CREDENTIALS, valBadCredential);
     assert.propertyVal(res.data, keyBadCredential , valBadCredential);
  });

  it("create token with username registered & password not registered", async () => {

    const valUsername = data.USERS_REGISTERED.username;
    const keyUsername = getObjKey(data.USERS_REGISTERED, valUsername);
    const valPassword = data.USERS_NOT_REGISTERED.password;
    const keyPassword = getObjKey(data.USERS_NOT_REGISTERED, valPassword);

    const newData = {}
    newData[keyUsername] = valUsername;
    newData[keyPassword] = valPassword;

    const res = await bookerApi.createToken(newData);

    assert.equal(res.status, res_code.STATUS.OK);

    const valBadCredential = auth.BAD_CREDENTIALS.reason;
    const keyBadCredential = getObjKey(auth.BAD_CREDENTIALS, valBadCredential);
    assert.propertyVal(res.data, keyBadCredential, valBadCredential);
  });

  it("create token with username not registered & password registered", async () => {
    const valUsername = data.USERS_NOT_REGISTERED.username;
    const keyUsername = getObjKey(data.USERS_NOT_REGISTERED, valUsername);
    const valPassword = data.USERS_REGISTERED.password;
    const keyPassword = getObjKey(data.USERS_REGISTERED, valPassword);

     const newData = {};
     newData[keyUsername] = valUsername;
     newData[keyPassword] = valPassword;

     const res = await bookerApi.createToken(newData);

    assert.equal(res.status, res_code.STATUS.OK);

    const valBadCredential = auth.BAD_CREDENTIALS.reason;
    const keyBadCredential = getObjKey(auth.BAD_CREDENTIALS, valBadCredential);
    assert.propertyVal(res.data, keyBadCredential, valBadCredential);
  });

  it("create token with username & password empty", async () => {
     const res = await bookerApi.createToken(data.USERS_EMPTY);

    assert.equal(res.status, res_code.STATUS.OK);

    const valBadCredential = auth.BAD_CREDENTIALS.reason;
    const keyBadCredential = getObjKey(auth.BAD_CREDENTIALS, valBadCredential);
    assert.propertyVal(res.data, keyBadCredential, valBadCredential);
  });

   it("create token with username empty & password registered", async () => {
     const valUsername = data.USERS_EMPTY.username;
     const keyUsername = getObjKey(data.USERS_EMPTY, valUsername);
     const valPassword = data.USERS_REGISTERED.password;
     const keyPassword = getObjKey(data.USERS_REGISTERED, valPassword);

     const newData = {};
     newData[keyUsername] = valUsername;
     newData[keyPassword] = valPassword;

     const res = await bookerApi.createToken(newData);

     assert.equal(res.status, res_code.STATUS.OK);

     const valBadCredential = auth.BAD_CREDENTIALS.reason;
     const keyBadCredential = getObjKey(auth.BAD_CREDENTIALS, valBadCredential);
     assert.propertyVal(res.data, keyBadCredential, valBadCredential);
   });

    it("create token with username empty & password not registered", async () => {
      const valUsername = data.USERS_EMPTY.username;
      const keyUsername = getObjKey(data.USERS_EMPTY, valUsername);
      const valPassword = data.USERS_NOT_REGISTERED.password;
      const keyPassword = getObjKey(data.USERS_NOT_REGISTERED, valPassword);

      const newData = {};
      newData[keyUsername] = valUsername;
      newData[keyPassword] = valPassword;

      const res = await bookerApi.createToken(newData);

      assert.equal(res.status, res_code.STATUS.OK);

      const valBadCredential = auth.BAD_CREDENTIALS.reason;
      const keyBadCredential = getObjKey(
        auth.BAD_CREDENTIALS,
        valBadCredential
      );
      assert.propertyVal(res.data, keyBadCredential, valBadCredential);
    });

     it("create token with username registered & password empty", async () => {
       const valUsername = data.USERS_EMPTY.username;
       const keyUsername = getObjKey(data.USERS_EMPTY, valUsername);
       const valPassword = data.USERS_REGISTERED.password;
       const keyPassword = getObjKey(data.USERS_REGISTERED, valPassword);

       const newData = {};
       newData[keyUsername] = valUsername;
       newData[keyPassword] = valPassword;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     it("create token with username registered & password empty", async () => {
       const valUsername = data.USERS_EMPTY.username;
       const keyUsername = getObjKey(data.USERS_EMPTY, valUsername);
       const valPassword = data.USERS_NOT_REGISTERED.password;
       const keyPassword = getObjKey(data.USERS_NOT_REGISTERED, valPassword);

       const newData = {};
       newData[keyUsername] = valUsername;
       newData[keyPassword] = valPassword;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     it("create token with only username registered", async () => {
       const valUsername = data.USERS_REGISTERED.username;
       const keyUsername = getObjKey(data.USERS_REGISTERED, valUsername);

       const newData = {};
       newData[keyUsername] = valUsername;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     it("create token with only username not registered", async () => {
       const valUsername = data.USERS_NOT_REGISTERED.username;
       const keyUsername = getObjKey(data.USERS_NOT_REGISTERED, valUsername);

       const newData = {};
       newData[keyUsername] = valUsername;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     it("create token with only username empty", async () => {
       const valUsername = data.USERS_EMPTY.username;
       const keyUsername = getObjKey(data.USERS_EMPTY, valUsername);

       const newData = {};
       newData[keyUsername] = valUsername;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     it("create token with only registered", async () => {
       const valPassword = data.USERS_REGISTERED.password;
       const keyPassword = getObjKey(data.USERS_REGISTERED, valPassword);

       const newData = {};
       newData[keyPassword] = valPassword;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     it("create token with only password not registered", async () => {
       const valPassword = data.USERS_NOT_REGISTERED.password;
       const keyPassword = getObjKey(data.USERS_NOT_REGISTERED, valPassword);

       const newData = {};
       newData[keyPassword] = valPassword;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     it("create token with only password empty", async () => {
       const valPassword = data.USERS_NOT_REGISTERED.password;
       const keyPassword = getObjKey(data.USERS_NOT_REGISTERED, valPassword);

       const newData = {};
       newData[keyPassword] = valPassword;

       const res = await bookerApi.createToken(newData);

       assert.equal(res.status, res_code.STATUS.OK);

       const valBadCredential = auth.BAD_CREDENTIALS.reason;
       const keyBadCredential = getObjKey(
         auth.BAD_CREDENTIALS,
         valBadCredential
       );
       assert.propertyVal(res.data, keyBadCredential, valBadCredential);
     });

     
  
});
