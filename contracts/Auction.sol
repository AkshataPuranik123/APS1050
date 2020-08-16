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
	
// Store Item Count
	uint public itemCount;

// Constructor
	constructor() public {	
		addItem("Vase", "18th Century lost masterpiece with blue-and-white floral design", 100, 10);
		//addItem("Painting");
	}
  
// Function for more than 1 itemCount
	function addItem (string memory _name, string memory _desc, uint _baseValue, uint _increment) private {
		itemCount ++;
		
		items[itemCount] = Item(itemCount, _name, _desc, _baseValue, _increment, 0);
	
	}
  
}
