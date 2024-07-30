function setLightMode() {
  document.documentElement.removeAttribute("dark");
  saveThemePreference(); // save to local storage
}

function setDarkMode() {
  document.documentElement.setAttribute("dark", "");
  saveThemePreference(); // save to local storage
}

// Function to set the dark attribute based on system preference
function loadSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode();
  else
    setLightMode();
}

// Function to save the theme preference into local storage
function saveThemePreference() {
  localStorage.setItem('theme', document.documentElement.hasAttribute("dark") ? 'dark' : 'light');
}

// Function to load the theme preference from local storage
function loadThemePreference() {
  if (localStorage.getItem('theme') === 'dark')
    setDarkMode();
  else
    setLightMode();
}


// Load the saved theme or the system theme
if (localStorage.getItem('theme') === null)
  loadSystemTheme();
else
  loadThemePreference();

// Listen for changes in the system color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', loadSystemTheme);

// Listen for button clicks to toggle the dark mode
document.getElementById("btn-lightmode").addEventListener("click", setLightMode);
document.getElementById("btn-darkmode").addEventListener("click", setDarkMode);
