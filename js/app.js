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