let curEmpArray = [];
let modalString = '';
let modalString2 = '';
let getArrayLocation = 0;
let prevArrayLocation = -1;
let origArray = [];
const group = document.getElementById('container');
const url = 'https://randomuser.me/api/?results=12';


function getAPIdata() {

	fetch('https://randomuser.me/api/?results=12')
		.then(response => response.json())
		.then(data => {
			curEmpArray = data.results;

			createEmpGrid();
			origArray = curEmpArray;

		});
};

////////////FUNCTIONS TO CREATE CSS ELEMENTS FOR EMPLOYEE GRID

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

// XXXXXXXXXXXXXXXXX end FUNCTIONS TO CREATE CSS ELEMENTS FOR EMPLOYEE GRID XXXXX


//let scratch = fetch('https://randomuser.me/api/?results=12');


getAPIdata();


/// FUNCTION TO BUILD VISIBLE GRID ////////////////////////

function createEmpGrid() {
	let tempno = 0;
	curEmpArray.map(function (author) {

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


/// CREATE EVENTLISTENER FOR GRID ITEMS - WHEN CLICKED: OPENS MODAL ///
function eventListenItems() {
	let rows = document.querySelectorAll('.item');
	
	rows.forEach(row => row.addEventListener('click', showId));
}

function showId(e) {

	getArrayLocation = Number(this.id.split("-").pop());
	openModal();
}


/////////////// FUNCTIONS RELATING TO MODAL WINDOW WHEN GRID IS CLICKED //////////

function modaldata() {
	modalString = '<div><img src="images/emppic1.png">	<h1>Modal Example</h1>	</div><div>	<p>david.chapman@asdf.com</p>	<p>Denver</p>	<hr>	<p>314-313-3283</p>	<p>7741 Cornell Ave, St Louis MO 63105</p>	<p>Birthday: 10/22/1971</p>	</div>'
};

function modalFromArray(getArrayLocation) {
	modalString = `<div>
	<img src=${curEmpArray[getArrayLocation].picture.large}>
	<h1>${curEmpArray[getArrayLocation].name.first} ${curEmpArray[getArrayLocation].name.last}</h1></div><div>	<p>${curEmpArray[getArrayLocation].email}</p>	<p>${curEmpArray[getArrayLocation].location.city}</p>	<hr>	<p>${curEmpArray[getArrayLocation].phone}</p>	<p>${curEmpArray[getArrayLocation].location.street} ${curEmpArray[getArrayLocation].location.city}, ${curEmpArray[getArrayLocation].location.state} ${curEmpArray[getArrayLocation].location.postcode}</p>	<p>Birthday: ${curEmpArray[getArrayLocation].dob}</p>	</div>`
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
	
	if (getArrayLocation == 0) {
		if (curEmpArray.length == 1) {
			backButton.classList.toggle('closed');
			forwardButton.classList.toggle('closed');
		} else {
			backButton.classList.toggle('closed')
		}
	} else if (getArrayLocation == curEmpArray.length - 1) {
		forwardButton.classList.toggle('closed');
	}

	setTimeout(function () {
		modalOverlay.classList.toggle('fadeIn');
		modal.classList.toggle('fadeIn');
	}, 3000);

	prevArrayLocation = getArrayLocation;

}


function advanceModal() {
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

	checkFirstLastNav();
	prevArrayLocation = getArrayLocation;
};

///FORWARD AND BACKWARD BUTTONS - HIDE IF FIRST OR LAST ITEM CHOSEN

function checkFirstLastNav() {
	if (getArrayLocation == 0) {
		backButton.classList.toggle('closed');
	} else if (prevArrayLocation == 0) {
		backButton.classList.toggle('closed');
	};

	if (getArrayLocation == curEmpArray.length - 1) {
		forwardButton.classList.toggle('closed');
	} else if (prevArrayLocation == curEmpArray.length - 1) {
		forwardButton.classList.remove('closed');
	}
}


//XXXXXXXXXXXXXX END  FUNCTIONS RELATING TO MODAL WINDOW WHEN GRID IS CLICKED XXXXXXXXXXX


window.onload = function () {
	let rows = document.querySelectorAll('.item');
	rows.forEach(row => row.addEventListener('click', showId));
}


// ADDS SEARCH STRING to the DOM - IF JAVASCRIPT IS NOT ENABLED - search field shouldnt show up
let createSearchString = '<input type="text" id="studentSearch" name="studentSearch" placeholder="Search for students..."> <button onclick="clearSearch()">Clear</button>'
document.getElementsByClassName('student-search')[0].innerHTML = createSearchString;

//BUTTON - clear search field and reset to original Array
function clearSearch() {
	curEmpArray = origArray;
	document.getElementById("studentSearch").value = '';
	var myNode = document.getElementById("container");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	};

	createEmpGrid();
};

//search - activated when user enters 3 letters in search field
// key 8 is the bckspace key
document.getElementById('studentSearch').onkeyup = function (event) {
	let key = event.keyCode || event.charCode;

	if (key === 8) {
		studentSearchII('reset');;
	};
	if (document.getElementById('studentSearch').value.length > 2) {
		studentSearchII();
	} else if (curEmpArray.length !== 12) {
		curEmpArray = origArray;
		createEmpGrid();
	}
}

// function running search query; bringing back results.
function studentSearchII(blockNum) {
	if (blockNum = 'reset') {
		curEmpArray = origArray;
	};
	let getstudentSearch = document.getElementById("studentSearch").value;
		curEmpArray.forEach(function (x) {
/* 		console.log(x.name.first, ' ', x.login.username); */
	})
	const result = curEmpArray.filter(info => info.name.first.includes(getstudentSearch) || info.name.last.includes(getstudentSearch) || info.login.username.includes(getstudentSearch));
	curEmpArray = result;

	var myNode = document.getElementById("container");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	};

	createEmpGrid();
};