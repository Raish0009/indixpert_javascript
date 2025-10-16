document.addEventListener("DOMContentLoaded", function () {

  let allButtons = document.querySelectorAll(".dropdown-btn");

  allButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {

      if (window.innerWidth <= 768) {
        event.stopPropagation(); 

        let currentItem = button.parentElement;

        let otherItems = currentItem.parentElement.children;

        for (let item of otherItems) {
          if (item !== currentItem) {
            item.classList.remove("open");
          }
        }

        currentItem.classList.toggle("open");
      }

    });
  });

});
