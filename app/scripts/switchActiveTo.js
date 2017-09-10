module.exports.switchActiveTo = function(e){
	let currentActive = document.querySelector('.fa-sort-desc');
		currentActive.parentNode.removeChild(currentActive);
		let element = e.target;
		element.innerHTML = element.innerText + " <i class='fa fa-sort-desc' aria-hidden='true'></i>"
}