function createList() {
    const list = document.createElement('ul');

    while (true) {
        const item = prompt('Enter list item (or press "Esc" to cancel):');

        if (item === null || item === '') {
            // If the user cancels or enters an empty string, exit the loop
            break;
        }

        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    }

    return list;
}
const myList = createList();
document.body.appendChild(myList);
