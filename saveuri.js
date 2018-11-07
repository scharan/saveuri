var uri = document.location.href;

var div = document.createElement('div');
div.style = "text-align: center; background-color: white;";

var anchor = document.createElement('a');
anchor.id = "saveuri.anchor.id";
anchor.href = uri;
anchor.text = uri;

div.appendChild(anchor);
document.body.appendChild(div);
