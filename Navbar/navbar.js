let mobaileMenu = document.querySelector('.mobaile-Menu');
console.log(mobaileMenu);

let menubar = document.querySelector('#menu-bar');
console.log(menubar);

mobaileMenu.addEventListener('click',function(){
	menubar.classList.toggle('active')
}) 