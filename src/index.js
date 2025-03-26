import { v4 as uuidv4 } from "uuid";

const $ = (s) => document.querySelector(s);
const [form, input, generateBtn, uuidList, uuidDisplay, downloadBtn] = 
  [".uuid-form", ".uuid-count", ".uuid-generate", ".uuid-list", ".uuid-display", ".uuid-download"].map($);

uuidDisplay.innerText = uuidv4();

generateBtn.onclick = (e) => {
  e.preventDefault();
  uuidList.innerHTML = "";
  [uuidList, downloadBtn].forEach(el => el.classList.replace("hidden", "visible"));
  Array.from({ length: +input.value || 1 }, () => uuidList.innerHTML += `<li>${uuidv4()}</li>`);
};

downloadBtn.onclick = () => {
  const blob = new Blob([Array.from(uuidList.children).map(li => li.innerText).join("\n")], { type: "text/plain" });
  Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: "uuids.txt" })
    .click();
};
