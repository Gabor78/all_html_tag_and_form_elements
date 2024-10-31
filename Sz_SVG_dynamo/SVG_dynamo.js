/*  */
function copySvg(fromWhere) {
    const textarea = document.getElementById(fromWhere);
    textarea.select();
    document.execCommand('copy');
    alert('SVG copied!');
}
function copySvgAsCss(fromWhere) {
    const textarea = document.getElementById(fromWhere);
    const svgTxt = textarea.value;
    const encSvgTxt = encodeURIComponent(svgTxt);
    let cssRule ="background-image: url('data:image/svg+xml;utf8," + encSvgTxt + "');";
    textarea.value = cssRule;
    textarea.select();
    document.execCommand('copy');
    alert('CSS rule copied!');
}
function refreshBgColor() {
    const colorInput = document.getElementById('bg_color');
    const colorValueDisplay = document.getElementById('bg_color_value');
    colorValueDisplay.textContent = colorInput.value;
}

/* Sun and Moon */
const sunCheckbox = document.getElementById('sun');
const moonCheckbox = document.getElementById('moon');
const svg = document.getElementById('skyDrag');
let isDragging = false;
let currentElement = null;
let offsetX, offsetY;
const dragStart = (event) => {
    currentElement = event.target;
    isDragging = true;
    offsetX = event.clientX - currentElement.getAttribute('cx');
    offsetY = event.clientY - currentElement.getAttribute('cy');
};
const dragMove = (event) => {
    if (isDragging && currentElement) {
        const cx = event.clientX - offsetX;
        const cy = event.clientY - offsetY;
        currentElement.setAttribute('cx', cx);
        currentElement.setAttribute('cy', cy);
    }
};
const dragEnd = () => {
    isDragging = false;
    currentElement = null;
};
sunCheckbox.addEventListener('change', () => {
    const sunCircle = document.getElementById('sunCircle');
    sunCircle.style.display = sunCheckbox.checked ? 'block' : 'none';
});

moonCheckbox.addEventListener('change', () => {
    const moonCircle = document.getElementById('moonCircle');
    moonCircle.style.display = moonCheckbox.checked ? 'block' : 'none';
});
svg.addEventListener('mousedown', dragStart);
svg.addEventListener('mousemove', dragMove);
svg.addEventListener('mouseup', dragEnd);
svg.addEventListener('mouseleave', dragEnd);