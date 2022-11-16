const body = document.body;
const btnUpdate = document.querySelector('.btn-main');
const headline = document.getElementById('headline');
const items = document.querySelectorAll('li');
const highlights = document.querySelectorAll('.highlight');
const btnRemove = document.querySelector('.btn-remove');
const btnToggle = document.querySelector('.btn-toggle');
const btnCreate = document.querySelector('.btn-main');


body.addEventListener('click', () => {
  body.innerHTML = '<h1>Hello, world!</h1>';														 
});

for ( const highlight of highlights ) {
  highlight.style.backgroundColor = 'red';
}

for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'blue';
}

btnUpdate.addEventListener('click', () => {
  headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';													 
});

btnRemove.addEventListener('click', () => {
	const lastItem = document.querySelector('li:last-child');												lastItem.remove(); 
});

btnCreate.addEventListener('click', () => {												 
  const input = document.querySelector('.input-main');
	const list = document.querySelector('ul');

	list.insertAdjacentHTML(
		'afterbegin',
		`<li>${input.value}</li>`
	);
  input.value = '';
});

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');

	if (listContainer.style.display === 'none') {
		btnToggle.textContent = 'Hide List';
		listContainer.removeAttribute('style');
	} else {
		btnToggle.textContent = 'Show List';
		listContainer.style.display = 'none'; 	
	}		
})
