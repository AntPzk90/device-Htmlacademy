(function(){
	var slideArr = document.querySelectorAll(".slide-item");
	var radioSlid = document.querySelectorAll(".radio-slider");
	var servArr = document.querySelectorAll(".list-dscr-item")
	var radioServ = document.querySelectorAll(".radio-serv");
	var slidDscrArr = document.querySelectorAll(".slider-dscr");
	console.log(slidDscrArr)
	
	var checkedRadio = function(){
		for(var i = 0; i < 3; i++){
			var checked = document.querySelector(".radio-slider:checked").getAttribute("data-num");
		}
		return checked
	};
	var checkedRadio2 = function(){
		for(var i = 0; i < 3; i++){
			var checked = document.querySelector(".radio-serv:checked").getAttribute("data-num");
		}
		return checked
	};
	var showSlide = function(num,arr){
		for(var i = 0; i < arr.length; i++){
			arr[i].classList.remove("show");
		}
		arr[num].classList.add("show");
	};
	var onClick = function(clikArr,arr,checkFunc){
		for(var i = 0; i < slideArr.length; i++){
		clikArr[i].addEventListener("click", function(){
			showSlide(checkFunc(),arr);
		});
		}
	};
	//onClick(radioSlid,slidDscrArr,checkedRadio);
	onClick(radioSlid,slideArr,checkedRadio);
	onClick(radioServ,servArr,checkedRadio2);
	})();
	(function(){
		var close = document.querySelector(".close"),
			popupForm = document.querySelector(".popup"),
			contaclLink = document.querySelector(".contact-link"),
			popupMap = document.querySelector(".map-popup"),
			closeMap = popupMap.querySelector(".close"),
			mapLink = document.querySelector(".map")

		var popupFunc = function(link,popup,closeBtn){
			link.addEventListener("click", function(e){
				e.preventDefault();
				popup.style.display = "block";
			});
 			closeBtn.addEventListener("click", function(){
				popup.style.display = "none";
			});
		};
		popupFunc(contaclLink,popupForm,close);
		popupFunc(mapLink,popupMap,closeMap);
	})();