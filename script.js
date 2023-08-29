const teamData = document.querySelector('.teamData');
const table = document.querySelector('#dataTable'); 
const slider = document.querySelector('#tableWidthSlider');
const dataTable = document.querySelector('.custom-table'); 
const colorPicker = document.querySelector('#colorPicker');
const changeColorButton = document.querySelector('#changeColorButton');

teamData.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(teamData);

    const row = document.createElement('tr');
    for (let [key, value] of data) {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    }

    table.appendChild(row);
});

slider.addEventListener('input', function() {
    dataTable.style.width = `${slider.value}%`;
});

changeColorButton.addEventListener('click', function() {
    const selectedColor = colorPicker.value;
    dataTable.style.backgroundColor = selectedColor;
});
