const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd784bbf8bemsh937dbecae345d21p133f8ejsne9677a6edd2d',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));