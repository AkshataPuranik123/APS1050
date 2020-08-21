# A Decentralized Auction House for Fine Art 
## Description
This repository contains the Soldity, JavaScript, and HTML/CSS code for a Auction Decentralized Application for deployment on the Ethereum blockchain. Some of the deployment code was referenced from the [Ethereum Pet Shop tutorial](https://www.trufflesuite.com/tutorials/pet-shop). The concepts covered in the tutorial (adoption of pets from a shop) were extended to a different application space (auctions) with different functions.

This DApp was presented as a final project for the graduate course, APS1050 (Blockchain Technologies and Cryptocurrencies), taken at the University of Toronto. The executive summary for the app and the detailed instructions for launching and running the DApp on your local computer have been attached below.

## Folder Structure
The important folders in the directory include:
- `contracts`: Contains the code for the Auction smart contract
- `migrations`: Contains the JavaScript scripts to deploy and run migrations (adapted from the tutorial)
- `src`: Contains the JavaScript and HTML/CSS for the front end, as well as the code that enables interaction with the smart contract
- `test`: Contains the unit tests for the smart contract

## Instructions for Local Deployment
1. Download the necessary packages (Node Package Manager, Truffle, Ganache, an IDE, Lite Server, ) - detailed instructions in tutorial file attached --> this is the same as Ethereum Pet Shop, we can borrow their insturctions
2. Open Ganache, intialize some wallets, connect MetaMask to Ganache --> these are also in the tutorials they gave us
4. Migrate to root folder
3. Test the contract (not essential)
```
$ truffle test
```
4. Compile the contract
```
$ truffle compile
```
5. Migrate the contract to your local server through Ganache
```
$ truffle migrate
```
6. Run the local server
```
$ npm run dev
```

## Authors
- [Akshata Puranik](https://github.com/AkshataPuranik123)
- [Dylan Mendonca](https://github.com/mdylan2)

## Questions/Contributions/Future Work
- The app does not have payment processing for bids and doesn't track money. As it stands, it's a CRUD application where the web3 wallet only requests the wallet holder to pay gas fees for computation
- The app doesn't allow users to create their own bids
- Improvements can be made to the UI
- Please reach out to either of us for any other feedback
