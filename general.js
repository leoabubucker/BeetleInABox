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