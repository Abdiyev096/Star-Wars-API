// const getData = async (url) => {
// 	const res = await fetch(url);
// 	const body = await res.json();

// 	return body;
// }

// getData('https://swapi.dev/api/people/1/')
// 	.then((body) => {
// 		console.log(body);
// 	})


fetch('https://swapi.dev/api/people/1/')
	.then(response => console.log(response))