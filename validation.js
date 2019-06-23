var input = document.getElementsByTagName('input')[0];
var div = document.getElementById('hellomsg');
input.onkeyup = function() {
    div.innerHTML = "Hello "+this.value+"!";
};
console.log("rajhb");
