const qrcode = document.querySelector("#qrcode");
const inputvalue = document.querySelector("#inputvalue");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (!inputvalue.value) {
    alert("Please enter the link");
  } else {
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue.value}`;
    qrcode.addEventListener("load", () => {
      qrcode.classList.remove("hidden");
      btn.innerHTML = " QR is Ready ";
    });
  }
});
