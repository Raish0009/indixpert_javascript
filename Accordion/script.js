var headers = document.querySelectorAll(".accordion-header");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {
    var item = this.parentElement;
    var isOpen = item.classList.contains("active");

    var allItems = document.querySelectorAll(".accordion-item");
    for (var j = 0; j < allItems.length; j++) {
      allItems[j].classList.remove("active");
      allItems[j].querySelector(".icon").textContent = "+";
    }

    if (!isOpen) {
      item.classList.add("active");
      this.querySelector(".icon").textContent = "-";
    }
  });
}
