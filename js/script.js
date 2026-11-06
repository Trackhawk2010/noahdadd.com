/* INFO1005 Assessment 3 — Noah Dadd | shared JavaScript (based on the Module 3.1 Maggie Simpson script) */

/* DARK MODE — remembers the visitor's choice across pages */
const themeSwitch = document.querySelector('#themeSwitch');
const savedTheme = localStorage.getItem('noah-theme') || 'light';

document.documentElement.setAttribute('data-bs-theme', savedTheme);

if (themeSwitch) {
  themeSwitch.checked = savedTheme === 'dark';

  themeSwitch.addEventListener('change', function () {
    const selectedTheme = this.checked ? 'dark' : 'light';

    document.documentElement.setAttribute('data-bs-theme', selectedTheme);
    localStorage.setItem('noah-theme', selectedTheme);
  });
}

/* LIGHTBOX — one reusable modal; each button's data attributes fill in the image, title and description */
const projectButtons = document.querySelectorAll('.open-lightbox');
const projectImage = document.querySelector('#modalProjectImage');
const projectTitle = document.querySelector('#projectLightboxLabel');
const projectDescription = document.querySelector('#modalProjectDescription');

projectButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    projectImage.src = this.dataset.projectSrc;
    projectImage.alt = this.dataset.projectTitle + ' full image';
    projectTitle.textContent = this.dataset.projectTitle;
    projectDescription.textContent = this.dataset.projectDescription;
  });
});
