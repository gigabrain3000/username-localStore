import {names} from './users';

console.log(names);

let userList = document.querySelector('.user-list');

function appendUserData (userName) {
  let user = document.createElement(h3);
  user.className = ('name');
  user.innerText = userName;
  userList.appendChild(user);
}

appendUserData ('userName');