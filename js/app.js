let getA = [];
modalString = '';
modalString2 = '';
let getArrayLocation = 0;
let prevArrayLocation = -1;
let origArray = [];

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
			console.log('xxx:', data);
			getA = data.results;

			rungetA();
			origArray = getA;
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

		console.log('count: ', tempno);
		let creatediv = createDiv('div', 'item', tempno),
			img = createNode('img'),
			createdivitem = createItemDiv('div', 'itemtext', ),
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

	eventListenItems();
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
	setTimeout(function () {
		modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
		backButton.classList.remove('closed');
		forwardButton.classList.remove('closed');
		prevArrayLocation = -1;
	}, 400);

});


function openModal() {
	modalFromArray(getArrayLocation);

	modalDataInfo.innerHTML = '';
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed")
	modalOverlay.classList.toggle('fadeIn');
	modal.classList.toggle('fadeIn');

	modalDataInfo.innerHTML = modalString;
	/* 	setTimeout(function () {

			modalDataInfo.innerHTML = '';
			modal.classList.toggle("closed");
			modalOverlay.classList.toggle("closed")
			modalOverlay.classList.toggle('fadeIn');
			modal.classList.toggle('fadeIn');
		}, 300);
	 */
	/* 	setTimeout(function () {
			modalDataInfo.innerHTML = modalString;
		}, 300);
	 */
	if (getArrayLocation == 0) {
		if (getA.length == 1) {
			backButton.classList.toggle('closed');
			forwardButton.classList.toggle('closed');
		} else {
			backButton.classList.toggle('closed')
		}	
	} else if (getArrayLocation == getA.length - 1  ) {
		forwardButton.classList.toggle('closed');
	}

	console.log('start new modal');
	setTimeout(function () {
		modalOverlay.classList.toggle('fadeIn');
		modal.classList.toggle('fadeIn');
	}, 3000);

	console.log('current: ', getArrayLocation);
	console.log('prev: ', prevArrayLocation);
	//	checkFirstLastNav();;

	prevArrayLocation = getArrayLocation;

}


function advanceModal() {
	/* 	modalOverlay.classList.toggle("fade");
	 */
	modalFromArray(getArrayLocation);

	modalDataInfo.classList.toggle('fadeOut');

	setTimeout(function () {
		modalDataInfo.innerHTML = modalString;

	}, 500);

	setTimeout(function () {
		modalDataInfo.classList.toggle('fadeOut');
		modalDataInfo.classList.toggle('fadeIn');
	}, 1000);

	//remove fadein
	setTimeout(function () {
		modalDataInfo.classList.toggle('fadeIn');

	}, 2500);

	/* 	setTimeout(function () {
			/* modalDataInfo.innerHTML = modalString;
			
			modalDataInfo.innerHTML = modalString;
			/* 			modalDataInfo.classList.toggle("fade");
			 
		}, 600);
	 */
	console.log('current: ', getArrayLocation);
	console.log('prev: ', prevArrayLocation);
	checkFirstLastNav();
	prevArrayLocation = getArrayLocation;
};

function checkFirstLastNav() {
	if (getArrayLocation == 0) {
		backButton.classList.toggle('closed');
	} else if (prevArrayLocation == 0) {
		backButton.classList.toggle('closed');
	};

	if (getArrayLocation == getA.length - 1) {
		forwardButton.classList.toggle('closed');
	} else if (prevArrayLocation == getA.length - 1) {
		forwardButton.classList.remove('closed');
	}
}

/* openButtonArray.addEventListener("click", function () {
	alert(getA[3].dob);
}) */

window.onload = function () {
	let rows = document.querySelectorAll('.item');
	console.log('rows:', rows.length);
	rows.forEach(row => row.addEventListener('click', showId));
}

function eventListenItems() { 
	let rows = document.querySelectorAll('.item');
	console.log('rows:', rows.length);
	rows.forEach(row => row.addEventListener('click', showId));
}



function showId(e) {
	console.log("Using this:", this.id);
	console.log("Using e.currentTarget:", e.currentTarget.id);

	getArrayLocation = Number(this.id.split("-").pop());
	openModal();
}




/* modaldata();
console.log(modalString)
 */
let createSearchString = '<input type="text" id="studentSearch" name="studentSearch" placeholder="Search for students..."> <button onclick="clearSearch()">Clear</button>'
document.getElementsByClassName('student-search')[0].innerHTML = createSearchString;

function clearSearch() {
	getA = origArray;
	document.getElementById("studentSearch").value = '';
	var myNode = document.getElementById("container");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	};

	rungetA();
	
};


document.getElementById('studentSearch').onkeyup = function () { 
	let key = event.keyCode || event.charCode;
	console.log('key ', key);
/* 	if (key == 8 || key == 46) { return false }; */
	if (key === 8) {
		studentSearchII('reset');;
	 };
	if (document.getElementById('studentSearch').value.length > 2) {
		studentSearchII();
	} else if (getA.length !== 12) {
		getA = origArray;
		rungetA();
	 }
}

function studentSearchII(blockNum) {
	if (blockNum = 'reset') { 
		getA = origArray;
	};
	let getstudentSearch = document.getElementById("studentSearch").value;
	console.log(getstudentSearch);
	getA.forEach(function (x) {
		console.log(x.name.first, ' ', x.login.username);
	})
	const result = getA.filter(info => info.name.first.includes(getstudentSearch) || info.name.last.includes(getstudentSearch) || info.login.username.includes(getstudentSearch));
	console.log('result: ', result);
	getA = result;

	var myNode = document.getElementById("container");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	};

	rungetA();
};