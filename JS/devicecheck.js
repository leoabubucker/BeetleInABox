/* 
COPYRIGHT NOTICE:

Code
----
Website Code © Leo Abubucker (Lyka) 2025-Present. All Rights Reserved.
This code may not be copied, modified, or distributed without explicit permission from Leo Abubucker.

Content
-------
Newspaper articles, images, and editorial content are © Beetle in a Box 2025-Present. All Rights Reserved.
This content may not be copied, modified, or distributed without explicit permission from Beetle in a Box.
 */

const userAgent = navigator.userAgent.toLowerCase();
var isMobile = /iPhone|Android/i.test(navigator.userAgent);
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

console.log(isMobile);
console.log(isTablet);
console.log(navigator.userAgent);
if (isMobile || isTablet) {
    document.getElementById("cNavTitle").style.fontSize = "2.2vh";
    document.getElementById("cNavTitle").style.fontWeight = "500";
    document.getElementById("cNavTitle").style.letterSpacing = "1px";
    for (let index = 0; index < document.getElementsByClassName("previewContainer").length; index++) {
        document.getElementsByClassName("previewContainer")[0].style.width = "95vw";  
    }  
    document.getElementById("lNav").style.paddingLeft = "5vw";
    document.getElementById("rNav").style.paddingRight = "5vw";
    document.getElementById("nav").style.columnGap = "2vw";
    for (let index = 0; index < document.getElementsByClassName("previewAuthor").length; index++) {
        document.getElementsByClassName("previewAuthor")[index].style.setProperty("text-decoration", "underline");
        document.getElementsByClassName("previewAuthor")[index].style.textUnderlineOffset = "2px"
    }  
    for (let index = 0; index < document.getElementsByClassName("article-container").length; index++) {
        document.getElementsByClassName("article-container")[0].style.width = "80vw";
    }  
    for (let index = 0; index < document.getElementsByClassName("authorAttrName").length; index++) {
        document.getElementsByClassName("authorAttrName")[0].style.textDecoration = "underline";
        document.getElementsByClassName("authorAttrName")[0].style.textUnderlineOffset = "2px";
    } 
    for (let index = 0; index < document.querySelectorAll(".article-container .text").length; index++) {
        document.querySelectorAll(".article-container .text")[index].style.fontSize = "clamp(1.2rem, 1.5vw, 2rem)";
    } 
}
else {
}

if(isTablet){
    for (let index = 0; index < document.getElementsByClassName("previewContentP").length; index++) {
        document.getElementsByClassName("previewContentP")[index].style.fontSize = "clamp(1.1rem, 1.2vw, 1.25rem)";
    }
        for (let index = 0; index < document.getElementsByClassName("previewTitleA").length; index++) {
        document.getElementsByClassName("previewTitleA")[index].style.fontSize = "clamp(1.3rem, 1.5vw, 2rem)";
    }   
    
    for (let index = 0; index < document.getElementsByClassName("previewAuthor").length; index++) {
        document.getElementsByClassName("previewAuthor")[index].style.setProperty("font-size", "clamp(1.1rem, 1.2vw, 1.25rem)", "important");
    }   
    for (let index = 0; index < document.getElementsByClassName("floatingBar").length; index++) {
        document.getElementsByClassName("floatingBar")[index].style.right = "30px";
    }   
}
else if (isMobile){
    for (let index = 0; index < document.getElementsByClassName("previewContentP").length; index++) {
        document.getElementsByClassName("previewContentP")[index].style.fontSize = "clamp(0.8rem, 1.2vw, 1.25rem)";
    }
    for (let index = 0; index < document.getElementsByClassName("previewTitleA").length; index++) {
        document.getElementsByClassName("previewTitleA")[index].style.fontSize = "clamp(1rem, 1.5vw, 2rem)";
    }   

    for (let index = 0; index < document.getElementsByClassName("previewAuthor").length; index++) {
        document.getElementsByClassName("previewAuthor")[index].style.setProperty("font-size", "clamp(0.8rem, 1.2vw, 1.25rem)", "important");
    }   
    for (let index = 0; index < document.getElementsByClassName("floatingBar").length; index++) {
        document.getElementsByClassName("floatingBar")[index].style.right = "20px";
    }   
    for (let index = 0; index < document.getElementsByTagName("footer").length; index++) {
        document.getElementsByTagName("footer")[index].style.paddingLeft = "4vw";
        document.getElementsByTagName("footer")[index].style.fontSize = "clamp(0.8rem, 1.5vw, 2.5rem)";
    }   
}