import { v1 as uuidv1 } from 'uuid';

(() => {
  "use strict";

  // Selectors
  const [
    countInput,
    generateBtn,
    listContainer,
    displayField,
    downloadBtn,
    copyBtn,
    navToggleBtn,
    navDropdown,
  ] = [
    ".uuid-count",
    ".uuid-generate",
    ".uuid-list",
    ".uuid-display",
    ".uuid-download",
    ".uuid-copy",
    ".nav-toggle-btn",
    ".nav-dropdown",
  ].map((selector) => document.querySelector(selector));

  // Display a single UUID on load
  displayField && (displayField.innerText = uuidv1());

  // Generate UUIDs
  generateBtn &&
    generateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!listContainer) return;

      listContainer.innerHTML = "";
      [listContainer, downloadBtn].forEach((el) =>
        el?.classList.replace("hidden", "visible")
      );

      const count = +countInput?.value || 1;
      for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.textContent = uuidv1();
        listContainer.appendChild(li);
      }
    });

  // Copy UUID to clipboard
  copyBtn &&
    copyBtn.addEventListener("click", () => {
      if (!displayField) return;
      navigator.clipboard
        .writeText(displayField.innerText)
        .then(() => {
          copyBtn.innerText = "Copied!";
          setTimeout(() => {
            copyBtn.innerText = "Copy";
          }, 2500);
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    });

  // Download UUIDs as .txt
  downloadBtn &&
    downloadBtn.addEventListener("click", () => {
      if (!listContainer?.children.length) return;
      const blob = new Blob(
        [
          Array.from(listContainer.children)
            .map((li) => li.innerText)
            .join("\n"),
        ],
        { type: "text/plain" }
      );
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "uuids.txt";
      a.click();
    });

  // Mobile menu toggle
  navToggleBtn &&
    navToggleBtn.addEventListener("click", () => {
      if (!navDropdown) return;
      navDropdown?.classList.toggle("h-9");
    });
})();
