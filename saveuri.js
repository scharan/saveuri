var uri = document.location.href;

var div = document.createElement('div');
div.style = "text-align: center; background-color: white;";

var anchor = document.createElement('a');
anchor.id = "saveuri.anchor.id";
anchor.href = uri;
anchor.text = uri;
// anchor.style = "color: white; visited-color: white;";

div.appendChild(anchor);
document.body.appendChild(div);
