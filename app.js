let elem = document.getElementById("elem");
function clear(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}
// clear(elem);
