const express = require('express');
const { createToken } = require('../../api/authentication/controllers');
const router = express.Router();

router.post("/jwt", createToken)

module.exports = router;