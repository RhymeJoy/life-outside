/* Footer */
const p = document.createElement("p");
p.className = "copyright";
p.innerHTML = "&copy; 2024-2025 馬生之外工作室團隊. All rights reserved.<br>Base Design: <a href='https://html5up.net'>HTML5 UP</a>.";

document.querySelector("#footer").appendChild(p);

/* Header */
document.addEventListener('DOMContentLoaded', function() {

  var header = document.getElementById('header');
  if (header) {
    header.innerHTML = `
      <a href="" class="logo"><strong>試閱</strong> by 馬生之外</a>
      <ul class="icons">
        <li>
          <a href="https://www.patreon.com/profile/creators?u=116435742" class="icon brands fa-patreon">
            <span class="label"></span>Patreon
          </a>
        </li>
      </ul>
    `;
  }
});