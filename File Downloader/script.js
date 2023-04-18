const btn = document.querySelector("#btn");
const url = document.querySelector("#inputurl");

btn.addEventListener("click", () => {
  fetch(url.value)
    .then((res) => res.blob())
    .then((file) => {
      const tempurl = URL.createObjectURL(file);
      const atag = document.createElement("a");
      atag.href = tempurl;
      atag.download = "filename";
      document.body.appendChild(atag);
      atag.click();
      atag.remove();
      btn.textContent = "File Downloaded";
    })
    .catch((err) => {
      console.log(err);
    });
});
