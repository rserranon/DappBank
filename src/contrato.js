//import {computedFrom} from 'aurelia-framework';
import Web3 from 'ethereum/web3.js';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

export class Contrato {

  constructor(){
    // Class variables
    // this.abi = [{ "indexed": false, "name": "accountAddress", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "DepositMade", "type": "event" }];
    this.MyContract = web3.eth.contract(abi);
    this.myContractInstance = MyContract.at('0x8cf1252065af03760bb6e09f412870de69f79ae6');

    this.selectedAccount = "0x4a2dc9ab23fe7acb19d1c77411b6906ba0526673";
    this.web3Listening = web3.net.listening;
    this.web3IsConnected = web3.isConnected()
    this.peerCount = web3.net.peerCount;
    this.coinbaseAddr = web3.eth.coinbase;
    this.coinbaseBalance = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), 'ether');
    this.accounts = web3.eth.accounts;
    this.selectedAccountBalance = web3.fromWei(web3.eth.getBalance(this.selectedAccount), 'ether');
  }
  
  accountChanged(cuenta) {  
    this.selectedAccountBalance = web3.fromWei(web3.eth.getBalance(cuenta), 'ether');
  }
}

