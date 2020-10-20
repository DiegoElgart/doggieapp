const { authJwt } = require("../middleware");
const parkController = require("../controllers/park.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/park/list", authJwt.verifyToken, parkController.allParks);
  app.post("/api/park/add", authJwt.verifyToken, parkController.newPark);
 
};
