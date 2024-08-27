function encryptText() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let text = document.getElementById("inputText").value.toLowerCase();
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    let text = document.getElementById("outputText");
    text.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
