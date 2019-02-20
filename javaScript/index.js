$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
});

// dropdown menu
$(".dropdown").click(function(){
	console.log('toggle')
	$(this).find("div.dropdown-content").toggleClass('openCont');

});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	$('.search_btn').click(function(){
		var input_value = document.getElementById("search").value;
		if(input_value.length > 0){
			$("body").append( $(
				`<div class="alert alert-success alert-dismissible fade in">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				You are Search Somthing....
				</div>`
			));
		}else{
			$("body").append( $(
				`<div class="alert alert-danger alert-dismissible fade in">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				Enter Something To Search....
				</div>`
			));
		}
	});
});
$(document).ready(function(){
	$('.tab-pane').mouseenter(function () {
		var image = $(this).find('.img_box').height();
		var image_tab = $(this).find('.img_tab > img').height() - image;
		if (image_tab > 0) {
			$(this).find('.img_tab').css('top', -(image_tab));
		} else {
			$(this).find('.img_tab').css('top', 0);
		}
	});
	$('.tab-pane').mouseleave(function () {
		$('.img_tab').css('top', 0);
	});  
});
