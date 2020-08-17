 //require contract 
 var Auction = artifacts.require("./Auction.sol");


 //declare contract
 contract("Auction", function(){
	 var auctionInstance;
	
	it("initializes with one item", function() {
        return Auction.deployed().then(function(instance) {
            return instance.itemCount();
        }).then(function(count) {
            assert.equal(count, 1);
        });
	});	
	
	it("it initializes the items with the correct values", function() {
        return Auction.deployed().then(function(instance) {
            auctionInstance = instance;
            return auctionInstance.items(1);
        }).then(function(item) {
            assert.equal(item[0], 1, "contains the correct id");
            assert.equal(item[1], "Vase", "contains the correct name");
            assert.equal(item[2], "18th Century lost masterpiece with blue-and-white floral design", "contains the correct item description"); 
			assert.equal(item[3], 100, "contains the correct base price");
			assert.equal(item[4], 10, "contains the correct increment value");
			assert.equal(item[5], 100, "contains the correct final price");
        });
    });
	
	it("allows a bidder to bid", function() {
    return Auction.deployed().then(function(instance) {
      auctionInstance = instance;
      itemId = 1;
	  bidAmt = 120;
      return auctionInstance.bid(itemId, bidAmt);
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "bidEvent", "the event type is correct");
      assert.equal(receipt.logs[0].args._itemId.toNumber(), itemId, "the item id is correct");
	  assert.equal(receipt.logs[0].args._bidAmt.toNumber(), bidAmt, "the amount is correct");
	  
	}).then(function(item) {
        assert(bidAmt, "New highest Bid");
    })
  });
// throwing exception error for 
// a) invalid entry of bid value
// b) other exceptions
});