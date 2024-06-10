
const textarea = document.getElementById("myTextarea");
function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}
if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
}
textarea.addEventListener("input", saveToLocalStorage);
// Theme toggle logic
const checkbox = document.getElementById("checkbox");
const body = document.body;
const currTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currTheme);
checkbox.checked = currTheme === 'dark';

checkbox.addEventListener("change", () => {
    const newTheme = checkbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    body.setAttribute('data-theme', newTheme);
});