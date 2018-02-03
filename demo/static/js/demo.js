window.onclick = function( event ) {
  let pulse = document.querySelector(".pulsator")
  pulse.style.display = "block";
	pulse.style.marginLeft = event.pageX + "px";
	pulse.style.marginTop = event.pageY + "px";
}