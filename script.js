

document.addEventListener("DOMContentLoaded", () => {
	// let lists = document.getElementsByClassName('list');
	let lists = document.getElementsByClassName('list_product');
	let rightBox = document.getElementById('right');
	let leftBox = document.getElementById('left');
	let newBox = document.getElementById('new-box');
	let selected;


	for (list of lists) {
		list.addEventListener('dragstart',function(e){
			selected = e.target;
		});
		rightBox.addEventListener('dragover', function(e){
			e.preventDefault();
		});
		rightBox.addEventListener('drop', function(e){
			rightBox.appendChild(selected);
			selected = null;

		});
		newBox.addEventListener('dragover', function(e){
			e.preventDefault();
		});
		newBox.addEventListener('drop', function(e){
			newBox.appendChild(selected);
			selected = null;

		});
		// leftBox.addEventListener('dragover', function(e){
		// 	e.preventDefault();
		// });
		// leftBox.addEventListener('drop', function(e){
		// 	leftBox.appendChild(selected);
		// 	selected = null;

		// });
	}
});
			function search(){
		let search_Value = document.getElementById("search_box").value.toUpperCase();
		let product_list = document.getElementsByClassName("search_product");
		let single_product = document.querySelectorAll(".list_product");
		let p_name = document.getElementsByTagName("h2");

		for (var i = 0; i < p_name.length; i++) {
			console.log(single_product[i]);
			let match = single_product[i].getElementsByTagName("h2")[0]; // store the text in h2 from each .list_product clas

			if (match) { // if h2 has text then it will go inside this conditon
				let text_value = match.textContent || match.innerHTML
				if (text_value.toUpperCase().indexOf(search_Value) > -1) { // check the input value of user with each h2 text 
					single_product[i].style.display = ""; // if value there then it will return index of that value and that is greater the -1
				}
				else{
					single_product[i].style.display = "none"; // matching value not there then it will give -1 and that div will hide
				}

			}
		}
	}

	