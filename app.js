function createTree(container, data) {
    const list = document.createElement('ul');

    for (let key in data) {
        const item = document.createElement('li');
        item.textContent = key;

        if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
            // If the value is an object with children, recursively create a nested list
            const nestedList = createTree(document.createElement('div'), data[key]);
            item.appendChild(nestedList);
        }

        list.appendChild(item);
    }

    container.appendChild(list);
    return list;
}
const container = document.getElementById('container');
const data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};
createTree(container, data);

