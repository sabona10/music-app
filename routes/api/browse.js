const express = require('express');
const router = express.Router();
const broseCtrl = require('../../controllers/api/browse');

/* GET /api/puppies */
router.get("/", broseCtrl.mainIndex);
// router.get("/mood", broseCtrl.);

module.exports = router;