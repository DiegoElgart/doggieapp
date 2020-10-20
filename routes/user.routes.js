const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");
const dogController = require("../controllers/dog.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", userController.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken]);

  app.post(
    "/api/user/dog/add",
    authJwt.verifyToken,
    dogController.checkIfDogExists,
    dogController.addDog
  );
};
