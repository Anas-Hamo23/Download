const urlInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");
downloadBtn.addEventListener('click', async () => {
    if(urlInput.value != ""){
        const response = await fetch(urlInput.value);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
        console.log("g")
    }else{
        alert("Failed to download the file");
    }
});