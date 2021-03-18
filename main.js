const lineThruOL = document.querySelectorAll('ol');

for (const li of lineThruOL) {
    li.addEventListener('click', function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.textDecoration = "line-through";
    });
}

const opacList = document.querySelectorAll('ul')

for (const ul of opacList){
    ul.addEventListener('click', function(event){
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.opacity = '0.25'
    })
}