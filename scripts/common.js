// Create Elements
function cElement(what,where,contents,attach,how) {
  var _a = document.createElement(what);
  var _b = document.getElementById(where);
  _a.innerText = contents;
  for (let i = 0; i < attach.length; i++) {
    _a.setAttribute(attach[i][0],attach[i][1]);
  }
  if(how == true) {
    _b.appendChild(_a);
  } else {
    _b.prepend(_a);
  }
}
