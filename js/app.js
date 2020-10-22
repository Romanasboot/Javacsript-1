//alert("Privet!");

/*
let lastname="Petraitis";
let count=10;
let price=12.5;
let items=['item1', 'item2'];
let user = {name:'Roman', lastname:'Romanov'};
let online=false;

console.log(lastname);
console.log(typeof(lastname));
console.log(typeof(count));
console.log(typeof(price));
console.log(typeof(items));
console.log(typeof(user));
console.log(typeof(online));
console.log('------------------')
console.log(lastname.length);
console.log(lastname[3]);
console.log(lastname.indexOf('tis'));
console.log(lastname.slice(0,2));
console.log('------------------')
console.log(lastname.toLowerCase()); // output'as: "bilas"
console.log(lastname.toUpperCase());

var pakeistasVardas = lastname.replace("Bi","Gi"); 

pakeistasVardas;



console.log('------------------')
console.log('Pavarde:' + lastname)
console.log('------------------')
let prekes=['Preke1','Preke2', 'Preke3','Preke4'];

for (var i = 0; i <prekes.length; i++) {
	console.log(prekes[i])
};
console.log('------------------')
for (let p in prekes ){
	console.log(prekes[p])
};

//reikia patikrinti per skaidres
/*let users =[
{
	vardas:'Roman'
	email:'info@gmail.com'
	ivertinimas:[10]
},
{
	vardas:'Bob'
	email:'bob@email.com'
	ivertinimas:[8]
},
];

console.log('------------------')
 for (let p of prekes){
 	console.log(p)
 };
*/


console.log('--------katalogas----------')

let katalogas=[
{
	'grozine':[
	{
		ISBN:'GR001',
		pavadinimas: 'Miskas',
		leidimometai: '1991',
		puslapiuskaicius: '100'
	},
	{
		ISBN:'GR002',
		pavadinimas: 'Zeme',
		leidimometai: '1992',
		puslapiuskaicius: '110'

	},
	{
		ISBN:'GR002',
		pavadinimas: 'Dangus',
		leidimometai: '1993',
		puslapiuskaicius: '120'
	},
	{
		ISBN:"GR003",
		pavadinimas: "Vanduo",
		leidimometai: '1994',
		puslapiuskaicius: '130'
	}
	]

},

{
	'moksline':
	[
	{
		ISBN:"MK001",
		pavadinimas: "Fizika",
		leidimometai: '1980',
		puslapiuskaicius: '200'
	},
	{
		ISBN:"MK002",
		pavadinimas: "Chemija",
		leidimometai: '1981',
		puslapiuskaicius: '201'
	},
	{
		ISBN:"MK003",
		pavadinimas: "Matematika",
		leidimometai: '1982',
		puslapiuskaicius: ''
	},
	{
		ISBN:'MK004',
		pavadinimas: 'Istorija',
		leidimometai: '1983',
		puslapiuskaicius: '203'
	}
	]
},

{
	fantastika:
	[
	{
		ISBN:"FN001",
		pavadinimas: "Dozor1",
		leidimometai: '2001',
		puslapiuskaicius: '300'
	},
	{
		ISBN:"FN002",
		pavadinimas: 'Solaris',
		leidimometai: '1981',
		puslapiuskaicius: '301'
	},
	{
		ISBN:'FN003',
		pavadinimas: 'Avatar',
		leidimometai: '2020',
		puslapiuskaicius: '302'
	},
	{
		ISBN:'FN004',
		pavadinimas: 'Lotos',
		leidimometai: '1999',
		puslapiuskaicius: '303'
	}
	]
},

];

for (let ktg in katalogas){

 		for (let i in katalogas[ktg]){
 			console.log("kategorija:" + i)	

 				for(knyga in katalogas[ktg][i]){
 					console.log("knyga:" + knyga)

 						for (d in katalogas[ktg][i][knyga]){
 							console.log(d + " " +katalogas[ktg][i][knyga][d])

 						};

 				};
 		};

 };