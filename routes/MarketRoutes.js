const express = require("express");
const {
  getAllMarket,
  createMarket,
  getMarketById,
  updateMarket,
  deleteMarket,
  deleteAll,
} = require("../controllers/MarketControllers");

const router = express.Router();

router.route("/").get(getAllMarket).post(createMarket).get(deleteAll);
router.route("/:id").get(getMarketById).put(updateMarket).delete(deleteMarket);

module.exports = router;
