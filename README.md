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
3. Clone the repo
```
$ git clone https://github.com/AkshataPuranik123/APS1050.git
```
4. Migrate to root folder of the repo
5. If you would like to reinitialize the app (if for example, you used this application in the past), you will need to delete any `.json` files in `build/contracts`
6. Test the contract functions using unit tests specified in `test/TestAuction.sol` (not essential)
```
$ truffle test
```
7. Compile the contracts `Auction.sol` and `Migrations.sol` located in `contracts/`
```
$ truffle compile
```
8. Migrate the contract to your local server through Ganache. The contract needs to be compiled (Step 7) before it can be migrated
```
$ truffle migrate
```
9. Run the local server
```
$ npm run dev
```

**Note:** Steps 6/7 will create a new folder directory `build/contracts` with `.json` files for the smart contract `Auction.sol` and `Migrations.sol`. These `.json` files contain the "contract" information used to run the app locally

## Authors
- [Akshata Puranik](https://github.com/AkshataPuranik123)
- [Dylan Mendonca](https://github.com/mdylan2)

## Questions/Contributions/Future Work
- The app does not have payment processing for bids and doesn't track money. As it stands, it's a CRUD application where the web3 wallet only requests the wallet holder to pay gas fees for computation
- The app doesn't allow users to create their own auctions
- Improvements can be made to the UI. Some examples of improvements include:
  1. There is no front end interactivity for the requirements in the smart contract backend. For example, when a bid amount entered into the input box is lower than (highest bid + minimum increment), the contract will prevent execution of the bid action through the MetaMask client. It would be better to communicate this on the front end
  2. More attractive HTML/CSS layout
- Please reach out to either of us for any other feedback
