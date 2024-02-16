

$('#searchButton').click(function() {
  var searchText = $('#searchInput').val();
  var apiKey = 'AIzaSyC6VA4nw1xf4UvB_nLsC6S5zJTMiW-PPvQ'; // API key
  // Adjust the limit to 10
  var apiUrl = `https://tenor.googleapis.com/v2/search?q=${searchText}&key=${apiKey}&limit=10`;

  $.ajax({
    url: apiUrl,
    method: 'GET',
    success: function(response) {
      var output = '';
      response.results.forEach(function(gif) {
        var gifUrl = gif.media_formats.gif.url;
        output += `<img src="${gifUrl}" class="img-fluid" alt="gif">`;
      });
      $('#gifArea').html(output);
    },
    error: function(xhr, status, error) {
      console.error('Error fetching GIFs:', status);
    }
  });
});
