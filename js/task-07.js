const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
const initialFontSize = fontSizeControl.value;
textSpan.style.fontSize = initialFontSize + "px";
fontSizeControl.addEventListener("input", function () {
  textSpan.style.fontSize = this.value + "px";
});
