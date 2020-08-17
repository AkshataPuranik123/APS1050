App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../art.json', function(data) {
      var artRow = $('#artRow');
      var artTemplate = $('#artTemplate');

      for (i = 0; i < data.length; i ++) {
        artTemplate.find('.panel-title').text(`Auction ${i}`);
        artTemplate.find('img').attr('src', data[i].picture);
        artTemplate.find('.art-name').text(data[i].name);
        artTemplate.find('.art-description').text(data[i].description);
        // artTemplate.find('.btn-submit').attr('data-id', data[i].id);

        artRow.append(artTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
