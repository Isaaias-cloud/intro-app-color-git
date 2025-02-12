const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');

const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const colorPicker = document.getElementById('colorPicker');

function updateColor() {
    let r = parseInt(redRange.value);
    let g = parseInt(greenRange.value);
    let b = parseInt(blueRange.value);

    let hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
    colorPicker.value = hex;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
}

function updateFromInput() {
    redRange.value = redInput.value;
    greenRange.value = greenInput.value;
    blueRange.value = blueInput.value;
    updateColor();
}

function updateFromPicker() {
    let hex = colorPicker.value;
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    redRange.value = r;
    greenRange.value = g;
    blueRange.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
}

// Eventos para sincronizar sliders, inputs numéricos y color picker
[redRange, greenRange, blueRange].forEach(input => input.addEventListener('input', updateColor));
[redInput, greenInput, blueInput].forEach(input => input.addEventListener('input', updateFromInput));
colorPicker.addEventListener('input', updateFromPicker);

updateColor(); // Inicializar color
