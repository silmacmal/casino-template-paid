const User = require("../models/User");
const {validationResult} = require("express-validator");
const {readContractBalanceByWallet} = require("../web3/usdc_adapter");

// @route   GET /api/contract/balance/:address
// @param   address - the address to get the balance for
// @desc    Get balance of an address from the USDC contract
// @access  Public
exports.getAddressBalance = async (req, res) => {
    const errors = validationResult(req);

    //Check for validation errors
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    console.log("Reading contract balance for address: ", req.params.address);

    const contractResult = await readContractBalanceByWallet(req.params.address);

    res.status(200).json(contractResult);
};