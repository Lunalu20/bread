document.getElementById("imageInput").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("uploadedImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  function updateText() {
    const text = document.getElementById("textInput").value;
    document.getElementById("captionText").innerText = text;
  }
  