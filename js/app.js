var $$ = Dom7;
var app = new Framework7({
  root: '#app',
  name: 'InstaHub', 
  theme: 'ios',
  routes: routes,
});
function toggleWhiteTheme() {
      var element = document.body;
			var element2 = document.getElementById("allapps")
	  element.classList.toggle("theme-dark");
    element.classList.toggle("light");
		element2.classList.toggle("allappstop");
		element2.classList.toggle("allappstopl")
		
}
document.getElementById("date").innerHTML = moment().format('D MMMM YYYY');
document.body.style.backgroundImage = "";
document.body.style.visibility = "visible";
$("#tabs").fadeIn(2000);

//Follow us on twitter
app.dialog.confirm("Follow us on Twitter to get our notification in time.","InstaHub",function(){
  window.location.href="https://twitter.com/instahubapp";
});

//block inspect element
document.onkeydown = function (e) { 
            if (event.keyCode == 123) { 
                return false; 
            } 
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
                return false; 
            } 
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { 
                return false; 
            } 
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
                return false; 
            } 
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
                return false; 
            } 
					} 
//Disable right click
document.onmousedown=disableclick;status="Right Click Disabled";function disableclick(event){  if(event.button==2)   {     alert(status);     return false;       }} 

// init pull to refresh manually
var ptr = app.ptr.create('.ptr-content');

// or using get to retrieve already created instance
var ptr = app.ptr.get('.ptr-content');
