let getA = [];

function getN() {
	fetch('https://randomuser.me/api/?results=12')
		.then(function (response) {
			return response.json().results;
		})
	/* 		.then(function (myJson) {
				return response.json();
				//console.log(myJson);
			});
			 */
};

function getP() {
	console.log('insideP');
	fetch('https://randomuser.me/api/?results=12')
		.then(response => response.json())
		.then(data => {
			// Here's a list of repos!  console.log(data)
			console.log('xxx:',data);
			getA = data.results;

			rungetA();
			//return data;
		});
};

function calcme(num) {
	num = num * num;
	return num;
};

function createItemDiv(element, classN) {
	let tempx = document.createElement(element); // Create the type of element you pass in the parameters
	tempx.className = classN;
	return tempx;
}

function createNode(element) {
	return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
	//console.log('parent: ', parent);
	return parent.appendChild(el); // Append the second parameter(element) to the first one
};

let scratch = fetch('https://randomuser.me/api/?results=12');

const group = document.getElementById('container');
const url = 'https://randomuser.me/api/?results=12';

getP();
//getA = getP();

console.log('getA:  ', getA);

function rungetA() {
	console.log('start rungetA');
	getA.map(function (author) {
		let creatediv = createItemDiv('div', 'item'),
			img = createNode('img'),
			createdivitem = createItemDiv('div', 'itemtext'),
			spanName = createNode('p');
		spanEmail = createNode('p');
		spanState = createNode('p');
		//	div.classList.add('item');
		img.src = author.picture.medium;
		spanName.innerHTML = `${author.name.first} ${author.name.last}`;
		spanEmail.innerHTML = `${author.email}`;

		spanState.innerHTML = `${author.location.state}`;
		append(createdivitem, spanName);
		append(createdivitem, spanEmail);
		append(createdivitem, spanState);
		append(creatediv, img);

		append(creatediv, createdivitem);
		append(group, creatediv);
	});
}

console.log('getX:  ', getA);


//console.log(getN());
/* let listP = getP();
console.log("listP: ", listP);
 */
/* let listP = getP();
console.log("listP: ", listP);
 */
/* let tempX = calcme(5);
console.log(calcme(4));
console.log(tempX); */
//console.log('slowly:',listN);

/* .then(function (data) {
	let authors = data.results;
	return authors.map(function (author) {
		let li = createNode('li'),
			img = createNode('img'),
			span = createNode('span');
		img.src = author.picture.medium;
		span.innerHTML = `${author.name.first} ${author.name.last}`;
		append(li, img);
		append(li, span);
		append(ul, li);
	})
}) */

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");
var openButtonArray = document.querySelector("#open-button-array");


closeButton.addEventListener("click", function () {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

openButtonArray.addEventListener("click", function () {
	alert(getA[3].dob);
});


console.log('last: ', );
