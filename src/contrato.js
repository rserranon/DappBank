//import {computedFrom} from 'aurelia-framework';
import Web3 from 'ethereum/web3.js';
import {inject} from 'aurelia-framework';  
import {ApplicationState} from './applicationState';

// let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

@inject(ApplicationState)
export class Contrato {

  constructor(appState){
    // Class variables
    this.web3 = appState.web3;
    this.selectedAccount        = this.web3.eth.coinbase;
    this.web3Listening          = this.web3.net.listening;
    this.web3IsConnected        = this.web3.isConnected()
    this.peerCount              = this.web3.net.peerCount;
    this.coinbaseAddr           = this.web3.eth.coinbase;
    this.coinbaseBalance        = this.web3.fromWei(this.web3.eth.getBalance(this.web3.eth.coinbase), 'ether');
    this.accounts               = this.web3.eth.accounts;
    this.selectedAccountBalance = this.web3.fromWei(this.web3.eth.getBalance(this.selectedAccount), 'ether');
  }
  
  accountChanged(cuenta) {  
    this.selectedAccountBalance = this.web3.fromWei(this.web3.eth.getBalance(cuenta), 'ether');
  }
}

