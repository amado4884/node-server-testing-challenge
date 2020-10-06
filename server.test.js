const request = require("supertest");

const server = require("./server");

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object in the index route", async () => {
      const expectedBody = { message: "Good" };

      const response = await request(server).get("/");
      expect(response.type).toEqual("application/json");
      expect(response.body).toEqual(expectedBody);
    });
  });

  describe("/images route", () => {
    it("/ - OK status with JSON object and one specific item in list", async () => {
      const expectedStatusCode = 200;
      const expectedItemInBody = {
        name: "Beach",
        url:
          "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      };

      const response = await request(server).get("/images");
      expect(response.status).toEqual(expectedStatusCode);
      expect(response.type).toEqual("application/json");
      expect(response.body.images).toContainEqual(expectedItemInBody);
    });

    it("/ - create a new image", async () => {
      const expectedStatusCode = 200;
      const image = {
        name: "Blonde Woman",
        url:
          "https://images.unsplash.com/photo-1600716896354-fea9ad802453?ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80",
        categories: ["woman", "black", "leather", "jacket"],
      };
      const expectedBody = {
        message: "Okay",
        data: {
          id: 11,
          name: "Blonde Woman",
          url:
            "https://images.unsplash.com/photo-1600716896354-fea9ad802453?ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80",
          categories: ["woman", "black", "leather", "jacket"],
        },
      };

      const response = await request(server).post("/images").send(image);
      expect(response.status).toEqual(expectedStatusCode);
      expect(response.type).toEqual("application/json");
      expect(response.body).toEqual(expectedBody);
    });

    it("/11 - delete image with id of 11", async () => {
      const expectedStatusCode = 200;
      const expectedBody = {
        message: "Deleted",
      };

      const response = await request(server).delete("/images/11");
      expect(response.status).toEqual(expectedStatusCode);
      expect(response.type).toEqual("application/json");
      expect(response.body).toEqual(expectedBody);
    });
  });
});
