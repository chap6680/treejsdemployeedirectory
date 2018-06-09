let getA = [];
modalString = '';
modalString2 = '';
getArrayLocation = 0;


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

function createDiv(element, classN, tempno) {
	tempID = 'item-' + tempno;
	let tempx = document.createElement(element); // Create the type of element you pass in the parameters
	tempx.id = tempID;
	tempx.className = classN;
	return tempx;
}

function createItemDiv(element, classN, tempno) {
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
	let tempno = 0;
	getA.map(function (author) {

		console.log('count: ',tempno);
		let creatediv = createDiv('div', 'item', tempno),
			img = createNode('img'),
			createdivitem = createItemDiv('div', 'itemtext',),
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
		tempno += 1;
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

function modaldata() { 
	modalString = '<div><img src="images/emppic1.png">	<h1>Modal Example</h1>	</div><div>	<p>david.chapman@asdf.com</p>	<p>Denver</p>	<hr>	<p>314-313-3283</p>	<p>7741 Cornell Ave, St Louis MO 63105</p>	<p>Birthday: 10/22/1971</p>	</div>'
};

function modalFromArray(getArrayLocation) {
	modalString = `<div>
	<img src=${getA[getArrayLocation].picture.large}>
	<h1>${getA[getArrayLocation].name.first} ${getA[getArrayLocation].name.last}</h1>
</div><div>	<p>${getA[getArrayLocation].email}</p>	<p>${getA[getArrayLocation].location.city}</p>	<hr>	<p>${getA[getArrayLocation].phone}</p>	<p>${getA[getArrayLocation].location.street} ${getA[getArrayLocation].location.city}, ${getA[getArrayLocation].location.state} ${getA[getArrayLocation].location.postcode}</p>	<p>Birthday: ${getA[getArrayLocation].dob}</p>	</div>`
};

modalString2 = '<div><img src="images/emppic1.png">	<h1>Modal Example</h1>	</div><div>	<p>dc@asdf.com</p>	<p>Denver</p>	<hr>	<p>999-999-2332</p>	<p>7741 Cornell Ave, Denver CO 99999</p>	<p>Birthday: 10/22/2000</p>	</div>'

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.getElementById("close-button");
var forwardButton = document.getElementById("forward-button");
var backButton = document.getElementById("back-button");
var openButton = document.querySelector("#open-button");
var openButtonArray = document.querySelector("#open-button-array");
let modalDataInfo = document.getElementById('modal-data');
var updateDataButton = document.querySelector('#data-button');
var gridSelector = document.getElementById("container");


forwardButton.addEventListener("click", function () {
	getArrayLocation += 1;
	advanceModal();
});

backButton.addEventListener("click", function () {
	getArrayLocation -= 1;
	advanceModal();
});

closeButton.addEventListener("click", function () {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
	modalFromArray(getArrayLocation);
	modalDataInfo.innerHTML=modalString;
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

function openModal() { 
	modalFromArray(getArrayLocation);
	modalDataInfo.innerHTML=modalString;
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
}
function advanceModal() { 
/* 	modalOverlay.classList.toggle("fade");
 */	modal.classList.toggle("fade");
	modalFromArray(getArrayLocation);
	
	setTimeout(function(){
		modalDataInfo.innerHTML = modalString;
	}, 500);
        setTimeout(function(){
/* 			modalOverlay.classList.toggle("fade");
 */			modal.classList.toggle("fade");
		
        }, 1000);
};


/* openButtonArray.addEventListener("click", function () {
	alert(getA[3].dob);
}) */;
gridSelector.addEventListener("click", function (e) {
//	alert('clicked');
/* 	let clickedItem = e.target;
	console.log('clicked item: ', clickedItem);
 */
	getArrayLocation = Number(e.target.id.split("-").pop());
	openModal();
	/* console.log('clicked item id: ', e.target.id, " net to: ", getArrayLocation);
	console.log(getA[getArrayLocation]) */;


	//	alert("Hello " + clickedItem);
});


modaldata();
console.log(modalString)