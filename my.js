function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbwhkS-jawL7rjVPgrdBFt4o05jF1krFGIPhVorqwKsRY9-qJp0E/exec";


fetch(url)
    .then(d => d.json())
    .then(d => {

       document.getElementById("app").textContent = d[0].status;
});

}

document.getElementById("btn").addEventListener("click",testGS);
