function faqInit() {
  const openers = document.querySelectorAll(".faq__open");
  const contents = document.querySelectorAll(".faq__content");

  openers.forEach((opener, i) =>
    opener.addEventListener("click", () => {
      const currentContent = contents[i];
      const icon = opener.querySelector(".faq__open--icon");

      if (currentContent.classList.contains("faq__content--open")) {
        currentContent.classList.remove("faq__content--open");
        icon.classList.add("faq__open--plus");
        icon.classList.remove("faq__open--minus");
      } else {
        contents.forEach((content, i) => {
          content.classList.remove("faq__content--open");
          openers[i]
            .querySelector(".faq__open--icon")
            .classList.remove("faq__open--minus");
          openers[i]
            .querySelector(".faq__open--icon")
            .classList.add("faq__open--plus");
        });
        currentContent.classList.add("faq__content--open");
        icon.classList.remove("faq__open--plus");
        icon.classList.add("faq__open--minus");
      }
    })
  );
}

faqInit();
