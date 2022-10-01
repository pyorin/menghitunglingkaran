const jarijari = document.querySelector("#jari-jari");
const inputLingkaran = document.querySelector("input");
const hitungKeliling = document.querySelector("#hitungKeliling");
const hitungLuas = document.querySelector("#hitungLuas");
const hasil = document.querySelector(".hasil");
const buttonOk = document.querySelector("#ok");

function hitungK(r) {
  return 3.14 * 2 * r;
}

function hitungL(r) {
  return 3.14 * r * r;
}

buttonOk.addEventListener("click", function (e) {
  jarijari.innerHTML = `${inputLingkaran.value} CM`;
});

hitungKeliling.addEventListener("click", function (e) {
  let valueK = hitungK(inputLingkaran.value);
  const createElement = document.createElement("p");
  const createText = document.createTextNode(
    `Keliling dari jari-jari ${inputLingkaran.value} CM adalah ${valueK}`
  );
  createElement.appendChild(createText);
  hasil.style.display = "block";
  hasil.appendChild(createElement);
});

hitungLuas.addEventListener("click", function (e) {
  let valueL = hitungL(inputLingkaran.value);
  const createElement = document.createElement("p");
  const createText = document.createTextNode(
    `Luas keliling dari jari-jari ${inputLingkaran.value} CM adalah ${valueL}`
  );
  createElement.appendChild(createText);
  hasil.style.display = "block";
  hasil.appendChild(createElement);
});
