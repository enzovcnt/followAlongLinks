const triggers = document.querySelectorAll('a');
const highlights = document.createElement('span');
highlights.classList.add('highlight');
document.body.append(highlights);

function highlightLink(){
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));