function saveToLocalStorage(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;

    let user = {
        name,
        email
    };

    localStorage.setItem(user.name , JSON.stringify(user));
    showUserOnScreen(user);
}

function showUserOnScreen(user){
    let parentElem = document.getElementById('user-details');
    let childElem = document.createElement('li');
    childElem.textContent = user.name + ' : ' + user.email;

    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(user.name);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteBtn);
    parentElem.appendChild(childElem);
}