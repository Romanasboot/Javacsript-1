(function () {

    //const list= document.querySelector('ul');
    const btn=document.querySelector('button');
    const userEil=document.querySelector('eil input').value;
    const userStulp=document.querySelector('stulp input').value;
    //const links=document.querySelectorAll('a');
    const row= document.querySelector('tbody.tr');
    const col = document.querySelector('td');
    const tableBody = document.querySelector('tbody');
console.log('kazkokia...');
alert ('kuinia...')
    btn.addEventListener('click', sukurkLentele);

function sukurkLentele(){
  console.log('eiluciu: ' + userEil);
  console.log('stulpeliu: ' + userStulp);
    let eilute=document.createElement('tr'); //sukuria li
    let stulpelis=document.createElement('td');
    eiluciu=userEil.value;// i li ideda turini
    stulpeliu=userStulp.value;
    for (var i = 0; i < eiluciu ; i++)
     {
      tableBody.appendChild(eilute);// li prideda i vidu
      var row = document.createElement("tr");
        for (var j = 0; j < stulpeliu ; i++)
        {
          eilute.appendChild(stulpelis);// li prideda i vidu
          var cell = document.createElement("td");
          row.appendChild(cell);
        }
      }
}

}
);
