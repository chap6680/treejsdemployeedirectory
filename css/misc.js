
<!-- <div class="item"><img src="https://randomuser.me/api/portraits/med/women/31.jpg"><span>aleksi juntunen</span></div>
		<div class="item">2</div>
		<div class="item">3</div>
		<div class="item">4</div>
		<div class="item">5</div>
		<div class="item">6</div>
		<div class="item">7</div>
		<div class="item">8</div>
		<div class="item">9</div>
		<div class="item">10</div>
		<div class="item">11</div>
		<div class="item">12</div> -->

const group = document.getElementById('container');
const url = 'https://randomuser.me/api/?results=12';
fetch(url)
	.then((resp) => resp.json())
	.then(function (data) {
		let authors = data.results;
		return authors.map(function (author) {
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
		})
	})
	.catch(function (error) {
		console.log(error);
	});
