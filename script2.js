const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

// Check if user has a preference stored in local storage
const userPreference = localStorage.getItem('theme');
if (userPreference) {
    body.classList.add(userPreference);
    themeSwitch.checked = userPreference === 'dark-mode';
}

// Update local storage on theme change
themeSwitch.addEventListener('change', () => {
    const theme = themeSwitch.checked ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
});
