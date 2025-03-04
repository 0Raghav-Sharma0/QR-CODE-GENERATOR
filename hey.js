const inputField = document.getElementById("input1");
const img = document.getElementById("img1");
const button = document.getElementById("btn");
const imgBox = document.getElementById("img-div");

button.addEventListener("click", (evt) => {
    evt.preventDefault(); // Prevent form submission
    
    const inputText = inputField.value.trim();
    
    if (inputText === "") {
        alert("Please enter a valid text or URL!");
        return;
    }
    
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;
    imgBox.style.display = "block";  
});
