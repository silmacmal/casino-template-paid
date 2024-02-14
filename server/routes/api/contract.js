const express = require('express');
const router = express.Router();
const {param} = require("express-validator");
const {getAddressBalance} = require("../../controllers/contract");

router.get(
    '/balance/:address',
    [
        param('address').isHexadecimal().notEmpty()
    ],
    getAddressBalance,
);

module.exports = router;
