let email__form = document.querySelector("#email__form");

email__form.addEventListener("submit", e => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const address = document.querySelector("#address").value;
  const subject = document.querySelector("#subject").value;
  const content = document.querySelector("#content").value;

  window.open(
    `mailto:nunopereirasousa00@gmail.com;?subject=${subject}&body=Dear Aministrators, ${content}`
  );

  e.preventDefault();
});
