const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");
const dogController = require("../controllers/dog.controller");
const dogUserController = require("../controllers/dogUser.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/user/dog/add",
    authJwt.verifyToken,
    dogController.addDogIfNotExists
  );
  app.post(
    "/api/user/dog/owner",

    authJwt.verifyToken,
    dogUserController.addDogtoUser
  );

  app.get("/api/my-dog", authJwt.verifyToken, dogController.getDog);

  app.delete(
    "/api/my-dog/delete/:id",
    authJwt.verifyToken,
    dogController.deleteDog
  );

  app.put("/api/my-dog/edit/:id", authJwt.verifyToken, dogController.editDog);

  app.get("/api/my-dog/:id", authJwt.verifyToken, dogController.getDogById);

  app.get("/api/user/:id", authJwt.verifyToken, userController.getUserName);

  app.get("/api/dog/all", dogController.getAllDogs);
};
