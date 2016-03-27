//import {computedFrom} from 'aurelia-framework';
import Web3 from 'ethereum/web3.js';

export class ApplicationState {  
  constructor () {
    this.loggedInUser = null;
	if(typeof web3 !== 'undefined')
		this.web3 = new Web3(web3.currentProvider);
	else
		// set the provider you want from Web3.providers
		this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	// Other configurable options
    this.configuration  = {
      	optionOne : false,
      	optionTwo : false
  	};		
  }
}

