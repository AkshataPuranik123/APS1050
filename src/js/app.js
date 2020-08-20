App = {
  web3Provider: null,
  contracts: {},

  // Initialization function with loads all the art and information from the art.json file
  // You need to make sure art.json matches the smart contract initial variables
  // Technically, you could have the smart contract store all the information and use the functionality
  // below to extract that information and populate your front end
  init: async function() {
    // Load art.
    $.getJSON('../art.json', function(data) {
      var artRow = $('#artRow');
      var artTemplate = $('#artTemplate');

      for (i = 0; i < data.length; i ++) {
        // Adding data from json
        artTemplate.find('.panel-title').text(`Auction ${i+1}`); // auction number as title
        artTemplate.find('img').attr('src', data[i].picture); // image 
        artTemplate.find('.art-name').text(data[i].name); // name of item 
        artTemplate.find('.art-description').text(data[i].description); // decription of the item
        artTemplate.find('.min-incr').text(`$${data[i].minimum_increment}`); // minimum increment
        artTemplate.find('.base-price').text(`$${data[i].original_price}`); // base price

        // Creating identifier attributes for HTML elements
        artTemplate.find('.highest-bid').attr('data-id', data[i].id); // adding attribute to the highest bid so we can dynamically change it
        artTemplate.find('.btn-submit').attr('data-id', data[i].id); // adding attribute for submit so we can associate itemids to submit buttons
        artTemplate.find('.input-amount').attr('id',`input-amt-${data[i].id}`); // same as above for input amount
        artRow.append(artTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  // Function to intialize web3
  // Refer to PetShop tutorial documentation (https://www.trufflesuite.com/tutorials/pet-shop)
  initWeb3: async function() {
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);
    
    return App.initContract();
  },

  // Function to initialize contract
  // Refer to PetShop tutorial documentation (https://www.trufflesuite.com/tutorials/pet-shop)
  initContract: function() {
    $.getJSON('Auction.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var AuctionArtifact = data;
      App.contracts.Auction = TruffleContract(AuctionArtifact);
    
      // Set the provider for our contract
      App.contracts.Auction.setProvider(App.web3Provider);

      return App.updateAuctionPrices();
    });

    return App.bindEvents();
  },

  // Function to bind events
  // In this case, we are binding clicks of our submit buttons to the HandleBid function
  // i.e. when a person clicks, the app will process the bid input  
  bindEvents: function() { 
    $(document).on('click', '.btn-submit', App.handleBid);
  },

  // Function to update auction prices 
  // Data obtained from deployed smart contract
  updateAuctionPrices: function() {
    var auctionInstance;
    
    App.contracts.Auction.deployed().then(function(instance) {
      auctionInstance = instance; 

      return auctionInstance.getArrayOfPrices.call();
    }).then(function(result) {
        for (j=0; j < result.length; j++) {
          $(document).find('.highest-bid').eq(j).text(`$${result[j]}`);
        }
      }).then(function(result) {
        return App.updateAuctionIncreases();
      }).catch(function(err) {
        console.log(err.message);
      });

  },

  // Function to update auction value increases from base price
  // Data obtained from deployed smart contract
  updateAuctionIncreases: function () {
    var auctionInstance;

    App.contracts.Auction.deployed().then(function(instance) {
      auctionInstance=instance;

      return auctionInstance.getArrayOfIncreases.call(); 
    }).then(function(increases) {
      for (j=0;j<increases.length;j++) {
        $(document).find('.incr-in-value').eq(j).text(`${increases[j]}%`);
      }
    }).catch(function(err) {
      console.log(err.message);
    })
      
  },


  // Function to handle a bid 
  // This function is bound to a user click
  // Calls the placeBid function from the deployed smart contract
  handleBid: function(event) {
    event.preventDefault();

    var artId = parseInt($(event.target).data('id'));
    var bid_amount = parseInt($(`#input-amt-${artId}`).val());
    
    var auctionInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
    
      var account = accounts[0];
    
      App.contracts.Auction.deployed().then(function(instance) {
        auctionInstance = instance;
    
        // Execute place bid as a transaction by sending account
        return auctionInstance.placeBid(artId, bid_amount, {from: account});
      }).then(function(result) {
        return App.updateAuctionPrices();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
