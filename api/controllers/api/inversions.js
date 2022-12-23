const express = require('express'),
  Array = require('../../models/array'),
  router = express.Router();

const array = new Array();

router.post('/', (req, res) => {
  try {
    const response = array.createResponse(req.body.data);
    console.log(response);
    res.status(200).json(response);
    res.end();
  }
  catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
