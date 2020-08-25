pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Auction.sol";

// For all tests to pass, you must delete all files in the build contracts folder, then run
// truffle test. This is because the tests are based on the initial values assigned to the variables of contract

contract TestAuction {

// The address of the Auction contract to be tested
Auction auction = Auction(DeployedAddresses.Auction());


// Testing count of items
function testItemCount() public {
    uint returnedItemCount = auction.getItemCount();

    Assert.equal(returnedItemCount, expectedItemCount, "Expected item count matches actual item count.");
}


// Testing whether the first item name in the auction is correct
function testGetItemName() public {
    string memory returnedItemName = auction.getItemName(expectedArtId); 
    
    Assert.equal(returnedItemName, expectedItemName, "Name of first item is correct.");
}


// Testing whether the price of the first item in the auction is correct
function testGetItemPrice() public {
    uint returnedAuctionPrice = auction.getItemPrice(expectedArtId); 
    
    Assert.equal(returnedAuctionPrice, 20, "Auction price of first item is correct.");
}


// Testing whether the minimum increment of the first item in the auction is correct
function testGetItemIncrement() public {
    uint returnedItemIncrement = auction.getItemIncrement(expectedArtId); 
    
    Assert.equal(returnedItemIncrement , expectedItemIncrement, "Item increment of first item is correct.");
}


// Testing whether the percentage increase of the first item in the auction is correct
function testGetPercentIncrease() public {
    uint returnedPercentIncrease = auction.getPercentIncrease(expectedArtId); 

    Assert.equal(returnedPercentIncrease, expectedPercentIncrease, "Expected and returned percent increases match.");
}


// Testing the getArrayOfNumericalInformation() function for all types of information: price, percent and increment
function testArrayOfNumericalInformation() public {
    uint[expectedItemCount] memory returnedPriceArray = auction.getArrayOfNumericalInformation(1);
    uint[expectedItemCount] memory returnedPercentArray = auction.getArrayOfNumericalInformation(2);
    uint[expectedItemCount] memory returnedIncrementArray = auction.getArrayOfNumericalInformation(3);

    for (uint i=0;i<expectedItemCount;i++) {
        Assert.equal(returnedPriceArray[i], expectedPriceArray[i], "Expected and returned price arrays match.");
        Assert.equal(returnedPercentArray[i], expectedPercentArray[i], "Expected and returned percent arrays match.");
        Assert.equal(returnedIncrementArray[i], expectedIncrementArray[i], "Expected and returned increment arrays match.");
    }
}


// Testing the placeBid() function
function testUserCanBid() public {
  uint returnedId = auction.placeBid(expectedArtId, expectedBidAmount);

  Assert.equal(returnedId, expectedArtId, "Bid is possible with value higher than increment.");
}


// The variables that we will test
uint constant expectedItemCount = 4; // expected item count
uint expectedArtId = 0; // expected id of art piece
uint expectedAuctionPrice = 20; // expected auction price of first item
uint expectedItemIncrement = 2; // expected minimum increment of first item
uint expectedBidAmount = 25; // expected bid amount when placing a bid for first item (must be greater than expected price plus expected increment)
string expectedItemName = "Vase"; // expected item name of first item
uint expectedPercentIncrease = 0; // expected percent increase in value compared to the current bid ((1-1)*100/1 = 0)
uint[expectedItemCount] expectedPriceArray = [20,200,150,1000]; // expected price array at initialization (contracts in build are deleted)
uint[expectedItemCount] expectedPercentArray = [0,0,0,0]; // expected percent array at initialization
uint[expectedItemCount] expectedIncrementArray = [2,20,35,100]; // expected increment array at initialization


//The expected owner of bidder in this contract
address expectedBidder = address(this);

}