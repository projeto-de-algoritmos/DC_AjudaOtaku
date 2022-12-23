const express = require('express'),
  Array = require('../../models/array'),
  router = express.Router();

  const array = new Array();

router.post('/', (req, res) => {
  try {
    response = array.countInversion(req.body.array, req.body.inversions);
    res.status(200).json(response);
    res.end();
  }
  catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
