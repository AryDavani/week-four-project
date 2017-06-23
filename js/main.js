/*
  Here is a guide for the steps you could take:
*/


// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play

(function() {
  'use strict';

  let headers = {};
  var url = 'https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f'

  let results = document.getElementById('results');
  let searchButton = document.getElementById('search-btn');
  let searchWords = document.getElementById('search-words');


  searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    let searchURL = url + '&q=' + searchWords.value;
    console.log(searchURL);
    console.log(searchWords.value);

    fetch(searchURL, {headers: headers}).then(function(response) {
      response.json().then(function(data) {

        let ulTag = document.getElementById('results');

        for (var i = 0; i < data.length; i++) {

          let liTag = document.createElement('li');
          liTag.className = 'list-results';
          let imgTag = document.createElement('img');
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
      });
    });
  });




}());
