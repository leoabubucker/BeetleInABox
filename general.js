function toggleMenu(){
    menu = document.getElementById('issuesMenu');
    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
    }
    else{
        menu.style.top = window.scrollY + 'px';
        menu.style.display = 'flex';
    }
}

function goToElement(elementID) {
    const element = document.getElementById(elementID);
    const yOffset = window.innerHeight * 0.05; // 5vh
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    
}

function goToElementWithHighlight(elementID){
    goToElement(elementID);
    const element = document.getElementById(elementID);
    element.style.backgroundColor = "yellow";
    element.style.fontSize = "x-large";
    setTimeout(() => {
    element.style.backgroundColor = "unset";
    element.style.fontSize = "unset";
    }, 3000);
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToElementModern(elementID) {
    const element = document.getElementById(elementID);
    const yOffset = window.innerHeight * 0.22; // 5vh
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    
}

function goToElementWithHighlightModern(elementID){
    goToElementModern(elementID);
    const element = document.getElementById(elementID);
    element.style.backgroundColor = "yellow";
    element.style.fontSize = "x-large";
    setTimeout(() => {
    element.style.backgroundColor = "unset";
    element.style.fontSize = "unset";
    }, 3000);
}

function goToElementWithBorderModern(elementID){
    goToElementModern(elementID);
    const element = document.getElementById(elementID);
    element.style.border = "2px dashed black";
    // element.style.fontSize = "x-large";
    setTimeout(() => {
    element.style.border = "unset";
    // element.style.fontSize = "unset";
    }, 3000);
}
