pragma solidity >=0.4.21 <0.7.0;

contract Auction {
// Model an Item
	struct Item{				// Can define a variable for storing image
		uint item_id;
		string item_name;
		string item_desc;
		uint base_price;
		uint min_increment;
		uint auction_price;    //Can add other tags for filtering purpose in future
	}
// Store Items

// Fetch Items
	mapping(uint => Item) public items;
	
// declare variables
	uint public itemCount;	
	uint diff;
	uint a;
	
// Bid event
	event bidEvent(uint _itemId, uint indexed _bidAmt);
	

// Constructor
	constructor() public {	
		addItem("Vase", "18th Century lost masterpiece with blue-and-white floral design", 100, 10, 100);
		//addItem("Painting");
	}
  
// Function for more than 1 itemCount
	function addItem (string memory _name, string memory _desc, uint _baseValue, uint _increment, uint _startPrice) private {
		itemCount ++;
		items[itemCount] = Item(itemCount, _name, _desc, _baseValue, _increment,_startPrice);
	}
	
// Function to place a bid
	function bid (uint _itemId, uint _bidAmt) public {
	
		require(_itemId > 0 && _itemId <= itemCount, "Bidding on an invalid item");
		
		require(check_bid (_itemId, _bidAmt),"Bid is lower or equal to the highest bid value");
		
		require(check_increment (_itemId, _bidAmt),"Minimum increment value is $10");
		
		items[_itemId].auction_price = _bidAmt;	
		
		//trigger bid event
		emit bidEvent(_itemId, _bidAmt);
		
	}
	
// Function to check if the bid is greater than highest bid
	function check_bid (uint _itemId, uint _bidAmt) public returns (bool) {
		a = items[_itemId].auction_price;
		if (_bidAmt > a) return true;
		else return false;
	}
	
// Function to check if the difference is greater to minimum increment value
	function check_increment (uint _itemId, uint _bidAmt) public returns (bool) {
		a = items[_itemId].auction_price;
		diff = _bidAmt - a;
		if (diff >= items[_itemId].min_increment) return true;
		else return false;
	}
	
  
}
