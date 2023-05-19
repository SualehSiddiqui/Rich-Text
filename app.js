var fontFamily = document.getElementById("font-family");
var fontSize = document.getElementById("font-size");
var fontSizeInc = document.getElementById("font-size-inc");
var fontSizeDec = document.getElementById("font-size-dec");
var bodyTxt = document.getElementById("body-txt");
function forFontFamily() {
    var fontFamilyValue = fontFamily.options[fontFamily.selectedIndex].value;
    console.group(fontFamilyValue)
    if (fontFamilyValue == "arial") {
        bodyTxt.style.fontFamily = "Arial, Helvetica, sans-serif";
    }
    else if (fontFamilyValue == "times-new-roman") {
        bodyTxt.style.fontFamily = "'Times New Roman', Times, serif";
    }
    else if (fontFamilyValue == "courier-new") {
        bodyTxt.style.fontFamily = "'Courier New', Courier, monospace";
    }
    else if (fontFamilyValue == "georgia") {
        bodyTxt.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }
    else if (fontFamilyValue == "cambria") {
        bodyTxt.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    }
    else if (fontFamilyValue == "segoe-ui") {
        bodyTxt.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }
    else if (fontFamilyValue == "josefin-sans") {
        bodyTxt.style.fontFamily = "'Josefin Sans', sans-serif";
    }
    else if (fontFamilyValue == "roboto") {
        bodyTxt.style.fontFamily = "'Roboto', sans-serif";
    }
    else if (fontFamilyValue == "oswald") {
        bodyTxt.style.fontFamily = "'Oswald', sans-serif";
    }
    else if (fontFamilyValue == "poppins") {
        bodyTxt.style.fontFamily = "'Poppins', sans-serif";
    }
    else if (fontFamilyValue == "dancing-script") {
        bodyTxt.style.fontFamily = "'Dancing Script', cursive";
    }
    else if (fontFamilyValue == "righteous") {
        bodyTxt.style.fontFamily = "'Righteous', cursive";
    }
    else if (fontFamilyValue == "caveat") {
        bodyTxt.style.fontFamily = "'Caveat', cursive";
    }
    else if (fontFamilyValue == "abril-fatface") {
        bodyTxt.style.fontFamily = "'Abril Fatface', cursive";
    }
    else if (fontFamilyValue == "mogra") {
        bodyTxt.style.fontFamily = "'Mogra', cursive";
    }
    else if (fontFamilyValue == "noto-nastaliq-urdu") {
        bodyTxt.style.fontFamily = "'Noto Nastaliq Urdu', serif";
    }
    else if (fontFamilyValue == "noto-sans-arabic") {
        bodyTxt.style.fontFamily = "'Noto Sans Arabic', sans-serif";
    }
    else if (fontFamilyValue == "indie-flower") {
        bodyTxt.style.fontFamily = "'Indie Flower', cursive";
    }
    else if (fontFamilyValue == "satisfy") {
        bodyTxt.style.fontFamily = "'Satisfy', cursive";
    }
    else if (fontFamilyValue == "orbitron") {
        bodyTxt.style.fontFamily = "'Orbitron', sans-serif";
    }
    else if (fontFamilyValue == "bruno-ace") {
        bodyTxt.style.fontFamily = "'Bruno Ace', cursive";
    }
    else if (fontFamilyValue == "bangers") {
        bodyTxt.style.fontFamily = "'Bangers', cursive";
    }
    else if (fontFamilyValue == "kalam") {
        bodyTxt.style.fontFamily = "kalam";
    }
    else if (fontFamilyValue == "lobster") {
        bodyTxt.style.fontFamily = "'Lobster', cursive;";
    }
    else if (fontFamilyValue == "lobster-two") {
        bodyTxt.style.fontFamily = "'Lobster Two', cursive";
    }
    else if (fontFamilyValue == "great-vibes") {
        bodyTxt.style.fontFamily = "'Great Vibes', cursive";
    }
    else if (fontFamilyValue == "rubik-moonrocks") {
        bodyTxt.style.fontFamily = "'Rubik Moonrocks', cursive";
    }
    else if (fontFamilyValue == "bad-script") {
        bodyTxt.style.fontFamily = "'Bad Script', cursive";
    }
    else if (fontFamilyValue == "share-tech-mono") {
        bodyTxt.style.fontFamily = "'Share Tech Mono', monospace";
    }
    else if (fontFamilyValue == "rock-salt") {
        bodyTxt.style.fontFamily = "'Rock Salt', cursive;";
    }
}

function forFontSize(){
    var fontSizeValue = fontSize.options[fontSize.selectedIndex].value;
    
    if(fontSizeValue == 8){
        bodyTxt.style.fontSize = "8px"
    }
    else if(fontSizeValue == 9){
        bodyTxt.style.fontSize = "9px"
    }
    else if(fontSizeValue == 10){
        bodyTxt.style.fontSize = "10px"
    }
    else if(fontSizeValue == 11){
        bodyTxt.style.fontSize = "11px"
    }
    else if(fontSizeValue == 12){
        bodyTxt.style.fontSize = "12px"
    }
    else if(fontSizeValue == 14){
        bodyTxt.style.fontSize = "14px"
    }
    else if(fontSizeValue == 16){
        bodyTxt.style.fontSize = "16px"
    }
    else if(fontSizeValue == 18){
        bodyTxt.style.fontSize = "18px"
    }
    else if(fontSizeValue == 20){
        bodyTxt.style.fontSize = "20px"
    }
    else if(fontSizeValue == 22){
        bodyTxt.style.fontSize = "22px"
    }
    else if(fontSizeValue == 24){
        bodyTxt.style.fontSize = "24px"
    }
    else if(fontSizeValue == 26){
        bodyTxt.style.fontSize = "26px"
    }
    else if(fontSizeValue == 28){
        bodyTxt.style.fontSize = "28px"
    }
    else if(fontSizeValue == 36){
        bodyTxt.style.fontSize = "36px"
    }
    else if(fontSizeValue == 48){
        bodyTxt.style.fontSize = "48px"
    }
    else if(fontSizeValue == 72){
        bodyTxt.style.fontSize = "72px"
    }

}

function forFontIncOrDec(){
    bodyTxt.style.fontSize = ++abc
    var abc = window.getComputedStyle(bodyTxt,null).getPropertyValue("font-size");    
    console.log(abc)
    
}