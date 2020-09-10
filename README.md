# A Decentralized Auction House for Fine Art 
## Description
This repository contains the Soldity, JavaScript, and HTML/CSS code for a Auction Decentralized Application for deployment on the Ethereum blockchain. Some of the deployment code was referenced from the [Ethereum Pet Shop tutorial](https://www.trufflesuite.com/tutorials/pet-shop). The concepts covered in the tutorial (adoption of pets from a shop) were extended to a different application space (auctions) with different functions.

This DApp was presented as a final project for the graduate course, APS1050 (Blockchain Technologies and Cryptocurrencies), taken at the University of Toronto in the Summer of 2020. The executive summary for the app, detailed instructions for launching and running the dApp, and a [link to a video](https://www.youtube.com/watch?v=UfpU2Jhn3IU) outlining how the app works have been included in the repository.

## Folder Structure
The important folders in the directory include:
- `contracts`: Contains the code for the Auction smart contract
- `documents`: Contains the executive summary and detailed set up instructions
- `migrations`: Contains the JavaScript scripts to deploy and run migrations (adapted from the tutorial)
- `src`: Contains the JavaScript and HTML/CSS for the front end, as well as the code that enables interaction with the smart contract
- `test`: Contains the unit tests for the smart contract

## Instructions for Local Deployment
1. Download the prerequisites to run the application. Detailed instructions for this step can be found in Sections 1 and 2 in `documents/setup_instructions.pdf`
2. Run Ganache, and connect MetaMask to Ganache. Detailed instructions for this step can be found in Sections 3.1 and 3.2 in `documents/setup_instructions.pdf`
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
- There's no start and end time for auctions so bids can be placed indefinitely
- There's no ability to associate the final item to a wallet. More work needs to be done with tokenizing items and associating wallets to tokens
- Improvements can be made to the UI. Some examples of improvements include:
  1. Better front end interactivity for the requirements in the smart contract backend. Currently, the submit button is not active if the requirements of the bid are not met. Someone could easily design JS functionality to improve the UI.
  2. More attractive HTML/CSS layout
- Refer to the executive summary located at `documents/executive_summary` for a more detailed description of future projects and work that can be done to improve this app
- Please reach out to either of us for any other feedback
