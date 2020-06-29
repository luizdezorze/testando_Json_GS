function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbwhkS-jawL7rjVPgrdBFt4o05jF1krFGIPhVorqwKsRY9-qJp0E/exec";


fetch(url)
    .then(d => d.json())
    .then(d => {

       document.getElementById("app").textContent = d[0].status;
});

}

document.getElementById("btn").addEventListener("click",testGS);





function addGS() {

    const url = "https://script.google.com/macros/s/AKfycbwhkS-jawL7rjVPgrdBFt4o05jF1krFGIPhVorqwKsRY9-qJp0E/exec";


fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    body: JSON.stringify(nome do Pac:"MANOEL SOUZA", rh:"2145442", cidade:"MANAUS",	idade:"56", estado civil:"CASADO") // body data type 
  });
    
}

document.getElementById("btn2").addEventListener("click",addGS)
;
document.getElementById("btn").addEventListener("click",testGS);

