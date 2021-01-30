const express = require('express');
const router = express.Router();
const broseCtrl = require('../../controllers/api/browse');

/* GET /api/puppies */
// router.get("/", broseCtrl.mainIndex);
router.put("/:id", broseCtrl.mainIndex);
router.post("/result/:id", broseCtrl.result);
// router.get("/mood", broseCtrl.);

module.exports = router;