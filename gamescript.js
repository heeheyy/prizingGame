window.onload = function(){

	// Get the modal
	var myModal = document.getElementById('myModal');
	var prefix ='modal';
	var modals=[];
	for(var i=1;i<50;i++){
		modals[i]=document.getElementById(prefix+i);
	}
	console.log(modals);
	var gifts=[];
	var prefix2 ='gift';
	for(var x=1;x<50;x++){
		gifts[x]=document.getElementById(prefix2+x);
	}
	console.log(gifts);
	
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks the button, open the modal 
	for(var j=0;j<8;j++){
		
	 	modals.onclick = function() {
	    	modal[j].style.display = "block";
	    	
		}
		window.onclick = function(event) {
			modal[j].style.display = "none";	
		}
		span.onclick = function() {
	    	modal[j].style.display = "none";
		}
	}

	// When the user clicks on <span> (x), close the modal
}

function createTable(){
	var word="gift";
	for(var p=0;p<50;p++){
		if(p<10){
		document.write("<table><tr><td>"+(word+p)+"</td>");
		else if(p>=10 && p<20){
			document.write("</tr><tr><td>"+(word+p)+"</td>");
		}
		else document.write("</tr><tr><td>"+(word+p)+"</td></tr></table>");

		}
	}
}


