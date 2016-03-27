//import {computedFrom} from 'aurelia-framework';
import Web3 from 'ethereum/web3.js';
import {inject} from 'aurelia-framework';  
import {ApplicationState} from './applicationState';

@inject(ApplicationState)
export class Admin {

  constructor(appState){
    // Class variables
    this.web3 = appState.web3;
    this.abi = [{ "constant": false, "inputs": [ { "name": "newSellPrice", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "new Sell Price", "template": "elements_input_uint", "value": "" }, { "name": "newBuyPrice", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "new Buy Price", "template": "elements_input_uint", "value": "" } ], "name": "setPrices", "outputs": [], "type": "function", "displayName": "set Prices" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Airline Shares", "displayName": "" } ], "type": "function", "displayName": "name" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address", "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;spender", "template": "elements_input_address", "value": "" }, { "name": "_value", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;value", "template": "elements_input_uint", "value": "" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "type": "function", "displayName": "approve" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address", "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;from", "template": "elements_input_address" }, { "name": "_to", "type": "address", "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;to", "template": "elements_input_address" }, { "name": "_value", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;value", "template": "elements_input_uint" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "type": "function", "displayName": "transfer From" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "0", "displayName": "" } ], "type": "function", "displayName": "decimals" }, { "constant": true, "inputs": [], "name": "sellPrice", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "sell Price" }, { "constant": true, "inputs": [ { "name": "", "type": "address", "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address", "value": "" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "balance Of" }, { "constant": false, "inputs": [ { "name": "target", "type": "address", "typeShort": "address", "bits": "", "displayName": "target", "template": "elements_input_address", "value": "" }, { "name": "mintedAmount", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "minted Amount", "template": "elements_input_uint", "value": "" } ], "name": "mintToken", "outputs": [], "type": "function", "displayName": "mint Token" }, { "constant": true, "inputs": [], "name": "buyPrice", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "buy Price" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x5ac2bd6885aef2f217dfd9a364d53e2d804d9589", "displayName": "" } ], "type": "function", "displayName": "owner" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "✈", "displayName": "" } ], "type": "function", "displayName": "symbol" }, { "constant": false, "inputs": [], "name": "buy", "outputs": [], "type": "function", "displayName": "buy" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address", "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;to", "template": "elements_input_address" }, { "name": "_value", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;value", "template": "elements_input_uint" } ], "name": "transfer", "outputs": [], "type": "function", "displayName": "transfer" }, { "constant": true, "inputs": [ { "name": "", "type": "address", "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address", "value": "" } ], "name": "frozenAccount", "outputs": [ { "name": "", "type": "bool", "value": false, "displayName": "" } ], "type": "function", "displayName": "frozen Account" }, { "constant": true, "inputs": [ { "name": "", "type": "address", "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address", "value": "" }, { "name": "", "type": "address", "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address", "value": "" } ], "name": "spentAllowance", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "spent Allowance" }, { "constant": true, "inputs": [ { "name": "", "type": "address", "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address", "value": "" }, { "name": "", "type": "address", "typeShort": "address", "bits": "", "displayName": "", "template": "elements_input_address", "value": "" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "allowance" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "amount", "template": "elements_input_uint" } ], "name": "sell", "outputs": [], "type": "function", "displayName": "sell" }, { "constant": false, "inputs": [ { "name": "target", "type": "address", "typeShort": "address", "bits": "", "displayName": "target", "template": "elements_input_address" }, { "name": "freeze", "type": "bool", "typeShort": "bool", "bits": "", "displayName": "freeze", "template": "elements_input_bool" } ], "name": "freezeAccount", "outputs": [], "type": "function", "displayName": "freeze Account" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address", "typeShort": "address", "bits": "", "displayName": "new Owner", "template": "elements_input_address" } ], "name": "transferOwnership", "outputs": [], "type": "function", "displayName": "transfer Ownership" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "1000000" }, { "name": "tokenName", "type": "string", "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "Airline Shares" }, { "name": "decimalUnits", "type": "uint8", "typeShort": "uint", "bits": "8", "displayName": "decimal Units", "template": "elements_input_uint", "value": "0" }, { "name": "tokenSymbol", "type": "string", "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "✈" }, { "name": "centralMinter", "type": "address", "typeShort": "address", "bits": "", "displayName": "central Minter", "template": "elements_input_address", "value": "0x5aC2bD6885aEf2F217dFD9a364D53E2D804d9589" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "target", "type": "address" }, { "indexed": false, "name": "frozen", "type": "bool" } ], "name": "FrozenFunds", "type": "event" } ];
    this.MyContract         = this.web3.eth.contract(this.abi);
    this.myContractInstance = this.MyContract.at('0xf0CB18262E7851c4F28CB88D8b6375ceFE4D5Dc9');
    this.tokenSymbol        = this.myContractInstance.symbol();
    this.tokenBalance       = this.myContractInstance.balanceOf('0xDe5B00D8954AA47531b2af7ca3C3Fc2095245365');
    this.buyPrice           = toString(this.web3.fromWei(this.myContractInstance.buyPrice(), 'ether'));
    this.sellPrice          = toString(this.web3.fromWei(this.myContractInstance.sellPrice(), 'ether'));
    this.latestBlock        = this.web3.eth.getBlock('latest');
    var filter = this.web3.eth.filter('latest');
    this.latestBlockJSON  = JSON.stringify(this.latestBlock);

    // TODO Move it to setLastBlockFiler() function
    filter.watch(function(err, hash) {
        if (err) {
          // manage error
        }
        this.latestBlock      = this.web3.eth.getBlock(hash);
        this.latestBlockJSON  = JSON.stringify(this.latestBlock);
    }.bind(this));
  }

  // Pending integration TODO
  setFilter() {
    // get the latest block
    var filter = this.web3.eth.filter('latest');
    // Pendig see if it will work with Fat Arrow for ES6
    filter.watch((err, hash) => {
    if (err) {
          // manage error
    }  
    this.latestBlock = this.web3.eth.getBlock(hash)
    })
  }

  submit() {
    // set the default accout
    web3.eth.defaultAccount = '0x5aC2bD6885aEf2F217dFD9a364D53E2D804d9589';  // The account has to be unlocked 
    this.myContractInstance.setPrices(this.sellPrice, this.buyPrice);
    alert(`Pices updated!`);
    this.buyPrice     = "";
    this.sellPrice    = "";
  }
  
}