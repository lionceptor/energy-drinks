//scripts
//javascript folder
//Lyon lee
//changes color of a paragraph under header and reveals it too
var i = 0;

function textReveal()
{
	document.getElementById("change").style.fontSize = "50px";
	document.getElementById("change").style.color = "white";
}

function textColor()
{
	document.getElementById("change").style.color = "red";
}

function typeWriter()
{
	var text = 'Energy Drink Round-Up';
	document.getElementById("text").style.color = "red";
	if (i < text.length)
	{
		document.getElementById("text").innerHTML += text.charAt(i);
		i++;
		setTimeout(typeWriter,75);
	}
}