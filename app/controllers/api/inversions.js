const express = require('express'),
  router = express.Router();

router.post('/', (req, res) => {
    res.status(200).json(req.body);
    res.end();
});

module.exports = router;
