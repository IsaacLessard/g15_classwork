aasdffdsaasdf

function printData(URL, callback){
  var request = new XMLHttpRequest();
  request.onreadystatechange = callback;

  request.open('GET',URL);
  request.send();
}


function handleRequest(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
    }
    if(this.readyState == 4 && this.status !== 200){
      alert('HTTP error ' + req.status);
    }
}

printData('http://www.reddit.com/r/aww.json',handleRequest);
