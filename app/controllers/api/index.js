const router = require('express').Router(),
  anime = require('./anime'),
  inversions = require('./inversions');

router.use('/anime', anime);
router.use('/inversions', inversions);

module.exports = router;