console.log("User.js is Loaded");

(() => {
  var parent = document.querySelector('body');
  var display = document.createElement('span');
  var input = document.createElement('input');
  var button = document.createElement('button');

generate.addEventListener('click', () => {

display.innerText = `https://www.imarketslive.com/corp/cjoin?enroller=${input.value}`;

});

parent.appendChild(input);
// parent.appendChild(button);
parent.appendChild(display);
})();
