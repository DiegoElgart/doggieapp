const { authJwt } = require("../middleware");
const visitController = require("../controllers/visit.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/visit/add", authJwt.verifyToken, visitController.newVisit);
  app.get("/api/visit/all", authJwt.verifyToken, visitController.allVisits);
};
