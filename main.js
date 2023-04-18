document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("div.container");

  fetch("/api").then((response) =>
    response.json().then((obj) => {
      /**
       * This has serious scaling issues for larger apps with a lot going on. So I quickly wrote this to demo how you would do it in barebones/plain/raw JavaScript, but recommend fiddling with a JS frontend framework just so you can get something more production-ready up and running faster
       */
      for (const btn of obj.buttons) {
        const button = document.createElement("button");
        button.setAttribute("class", btn.state === 0 ? "off" : "on");
        button.innerText = btn.text;
        container.appendChild(button);
      }
    })
  );
});
