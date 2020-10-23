


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

for (let i in katalogas){

 		for (let ktg in katalogas[i]){
 			console.log("------- kategorija:" + ktg)

 				for(knyga in katalogas[i][ktg]){

 					console.log("knyga:" + knyga)
 						for (d in katalogas[i][ktg][knyga]){
 							 
 							if (d == 'leidimometai' && katalogas[i][ktg][knyga][d] == '2020'){
 							  console.log(d + ": " +katalogas[i][ktg][knyga][d] + " nauja knyga!");
 							}
 							else {
 								console.log(d + ": " +katalogas[i][ktg][knyga][d]);
 							}  

 						};
 					console.log("-------")

 				};
 		};

 };
