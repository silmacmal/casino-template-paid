//Load the USDC contract ABI from:
//https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48#code
const usdcAbi = require('./abi/usdc.json');

const {ethers, Contract, formatUnits, formatEther} = require("ethers");

//Read the balance of a wallet from the USDC contract
//@param wallet - the wallet address to read the balance from
const readContractBalanceByWallet = async (wallet) => {

    //Connect to the Ethereum network using Infura
    const provider = new ethers.JsonRpcProvider(process.env.INFURA_API_ENDPOINT)

    //Create a new contract instance with the USDC contract ABI and the contract address
    const contract = new Contract(process.env.USDC_CONTRACT_ADDRESS, usdcAbi, provider)

    //Call the balanceOf function of the USDC contract
    const result = await contract.balanceOf(wallet)

    const balance = result.toString();

    console.log('Contract result: ', balance);

    return {
        "wallet": wallet,
        "balance:": balance,
    };
};

module.exports = {readContractBalanceByWallet};

