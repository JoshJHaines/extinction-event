const lineThruOL = document.querySelectorAll('.ol');

for (const li of lineThruOL) {
    li.addEventListener('click', function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.textDecoration = "line-through";
    });
}