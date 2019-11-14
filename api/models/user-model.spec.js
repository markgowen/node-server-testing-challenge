const Users = require("./user-model");
const db = require("../../data/dbConfig");
const server = require('../server')
const request = require('supertest')

describe("User Model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("the insert function", () => {
    it("should add a new user", async () => {
      // test setup
      const userInfo = { name: "Don" };
      await Users.insert(userInfo);

      // assertion
      const users = await db("users");
      expect(users.length).toBe(1);
      expect(users[0].name).toBe("Don");
    });

    it("should resolve to the new user", async () => {
      const userInfo = { name: "Don" };
      const user = await Users.insert(userInfo);

      expect(user).toEqual({ id: 1, name: "Don" });
    });
  });

  describe('the remove function', () => {
      it('should remove the user', async () => {
        const id = { id: [0] };
        await Users.remove(id);

        const users = await db('users');
        expect(users.length).toBe(0);
      })
  })
});
