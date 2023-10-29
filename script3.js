const box = document.getElementById('box');
const output = document.getElementById('output');

box.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'Box');
});

output.addEventListener('dragover', (e) => {
    e.preventDefault();
});

output.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    output.innerText = data;
});
