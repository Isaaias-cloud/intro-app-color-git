// Elementos del DOM para los controles de color
const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');

const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const colorPicker = document.getElementById('colorPicker');

/**
 * Actualiza el color mostrado en la caja y en el input de selección de color
 * basado en los valores de los sliders RGB.
 */
function updateColor() {
    let r = parseInt(redRange.value);
    let g = parseInt(greenRange.value);
    let b = parseInt(blueRange.value);

    // Convertir los valores RGB a formato hexadecimal
    let hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    // Aplicar el color seleccionado a la caja y al input de color
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
    colorPicker.value = hex;

    // Sincronizar los valores numéricos con los sliders
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
}

/**
 * Actualiza los sliders RGB cuando el usuario ingresa valores numéricos manualmente.
 */
function updateFromInput() {
    redRange.value = redInput.value;
    greenRange.value = greenInput.value;
    blueRange.value = blueInput.value;
    updateColor();
}

/**
 * Actualiza los sliders y la caja de color cuando el usuario elige un color desde el selector de color.
 */
function updateFromPicker() {
    let hex = colorPicker.value; // Obtener el valor en hexadecimal
    let r = parseInt(hex.substring(1, 3), 16); // Extraer componente rojo
    let g = parseInt(hex.substring(3, 5), 16); // Extraer componente verde
    let b = parseInt(hex.substring(5, 7), 16); // Extraer componente azul

    // Asignar los valores a los sliders y los inputs numéricos
    redRange.value = r;
    greenRange.value = g;
    blueRange.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Actualizar el color de la caja y el código hexadecimal mostrado
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
}

// Agregar eventos para actualizar el color cuando el usuario interactúa con los controles
[redRange, greenRange, blueRange].forEach(input => input.addEventListener('input', updateColor));
[redInput, greenInput, blueInput].forEach(input => input.addEventListener('input', updateFromInput));
colorPicker.addEventListener('input', updateFromPicker);

updateColor(); // Inicializar el color al cargar la página
