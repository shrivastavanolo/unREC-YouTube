// content.js
var child2 = document.querySelector('#related');
console.log("REC SYSTEM IS HERE");
if (!child2) {
  console.log("Tag not found");
}
else{
  console.log("TAG FOUND");
  while(document.querySelector('#related').firstChild){
    document.querySelector('#related').removeChild(document.querySelector('#related').firstChild);
  }

  // Fetch a random quote from an API endpoint
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      // Create a new div element to hold the quote;
      child2.innerHTML = `
        <p style="font-size: 20px; font-weight: bold; color: white; text-align: center;">${data.content}</p>
        <p style="font-size: 14px; color: white; text-align: center;">- ${data.author} -</p>
      `;
      // Insert the quote container after the video player
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
    });
  
  }
