document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.custom-dropdown');
    const header = dropdown.querySelector('.dropdown-header');
    const options = dropdown.querySelector('.dropdown-options');

    header.addEventListener('click', function() {
        options.style.display = options.style.display === 'none' ? 'block' : 'none';
    });

    options.querySelectorAll('li').forEach(option => {
        option.addEventListener('click', function() {
            header.querySelector('span').innerText = this.innerText;
            options.style.display = 'none';
        });
    });
});
