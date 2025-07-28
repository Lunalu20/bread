function choose(option) {
    const panel = document.getElementById("result-panel");
    const result = document.getElementById("result-text");
  
    if (option === "csharp") {
      result.innerText = "Леонид: C# — это мой фетиш. Но с твоим pull request, Ксюша, даже компилятор покраснел...";
    } else {
      result.innerText = "Леонид: Секс — под вопросом, а вот мой код уже готов к деплою. И да, у меня не только код красивый — посмотри на мой ASSignment operator!";
    }
  
    panel.hidden = false;
  }
  