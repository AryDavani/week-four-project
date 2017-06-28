
(function() {
  'use strict';

  let headers = {};
  var url = 'https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f'

  let results = document.getElementById('results');
  let searchButton = document.getElementById('search-btn');
  let searchWords = document.getElementById('search-words');
  let audio = document.getElementById('audio');

  function playSong(source) {
    fetch(source).then(function(result) {
      audio.src = '';
      audio.src = result.url;
      audio.play();
    });
  }

  searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    let searchURL = url + '&q=' + searchWords.value + '&limit=40';
    console.log(searchURL);
    fetch(searchURL).then(function(response) {
      response.json().then(function(data) {

        let ulTag = document.getElementById('results');

        while (results.firstChild) {
          results.removeChild(results.firstChild);
        }

        for (var i = 0; i < data.length; i++) {

          let liTag = document.createElement('li');
          liTag.className = 'list-results';
          let imgTag = document.createElement('img');
          imgTag.setAttribute('id', data[i].stream_url + '?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f');
          imgTag.addEventListener('click', function(event) {
            event.preventDefault();
            console.log(event.target.id);
            playSong(event.target.id);
          });
          imgTag.className = 'image-results';
          let pTag1 = document.createElement('p');
          let pTag2 = document.createElement('p');

          imgTag.src = data[i].user.avatar_url;
          liTag.appendChild(imgTag);
          pTag1.textContent = data[i].title;
          liTag.appendChild(pTag1);
          pTag2.textContent = data[i].user.username;
          liTag.appendChild(pTag2);
          ulTag.appendChild(liTag);
        };
        searchWords.value = '';
      });
    });
  });

}());
