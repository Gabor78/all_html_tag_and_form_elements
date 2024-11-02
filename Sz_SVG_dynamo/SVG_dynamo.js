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
    textarea.value = `background-image: url('data:image/svg+xml;utf8,${encSvgTxt}');`;
    textarea.select();
    document.execCommand('copy');
    alert('CSS rule copied!');
}
function refreshBgColor() {
    const colorInput = document.getElementById('bg_color');
    const colorValueDisplay = document.getElementById('bg_color_value');
    colorValueDisplay.textContent = colorInput.value;
}

function randomStars(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) - min + 1
}
function getColor() {
    switch(randomStars(0, 7)){
        case 0:
            return "#fff";
        case 1:
            return "#fff";
        case 2:
            return "#fff";
        case 3:
            return "#88f";
        case 4:
            return "#ffc";
        case 5:
            return "url(#grad1)";
        case 6:
            return "url(#grad2)";
        case 7:
        return "url(#grad3)";
        case 8:
        return "#fff";
        }
}
function gen(out_svg="") {
    const pcs = document.getElementById('nos').value;
    const svgw = document.getElementById('wdt').value;
    const svgh = document.getElementById('hgt').value;
    const bg_color = document.getElementById('bg_color').value;
    const sun_circle = document.getElementById('sun_circle');
    const moon_circle = document.getElementById('moon_circle');
    const sbbox = sun_circle.getBBox();
    const mbbox = moon_circle.getBBox();
    const scx = sbbox.x + sbbox.width / 2;
    const scy = sbbox.y + sbbox.height / 2;
    const mcx = mbbox.x + mbbox.width / 2;
    const mcy = mbbox.y + mbbox.height / 2;
    let result = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgw}" viewBox="0 0 ${svgw} ${svgh}" style="background-color: ${bg_color};" id="sky_drag">
    <defs>
    <filter id="blr1" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" />
    </filter>
    <filter id="blr2" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.3" />
    </filter>
    <filter id="blr3" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
    </filter>
    <filter id="blr4" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
    <radialGradient id="grad1" cx="33%" cy="33%" r="95%" fx="40%" fy="40%">
    <stop offset="0%" stop-color="#ff0" />
    <stop offset="100%" stop-color="#f11" />
    </radialGradient>
    <radialGradient id="grad2" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#77f" />
    </radialGradient>
    <radialGradient id="grad3" cx="17%" cy="19%" r="75%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#922" />
    </radialGradient>
    </defs>`;
    for(let i = 0; i < pcs; i++){
        result += `<circle cx="${randomStars(0, svgw)}" cy="${randomStars(0, svgh)}" r="${randomStars(0, 0.05)}" fill="${getColor()}" filter="url(#blr${randomStars(0, 3)})" />`
    }
    result+=`<circle id="sun_circle" cx="${scx}" cy="${scy}" r="25" fill="url(#grad1)" filter="url(#blr2)" />
    <circle id="moon_circle" cx="${mcx}" cy="${mcy}" r="20" fill="url(#grad2)" filter="url(#blr2)" />
    </svg>`;
    if (!out_svg) {
        document.getElementById('sky_out').value = result;
        document.getElementById('sky_drag').outerHTML  = result;
    } else {
        document.getElementById(out_svg).outerHTML  = result;
    }
    regEvents();
    return false;
}
function genPT(out_svg="") {
    result = '';
    const pcs = document.getElementById('pine_num').value;
    console.log(pcs,out_svg);
    switch (pcs) {
        case "3":
            result = `<svg xmlns="http://www.w3.org/2000/svg" width="125" height="250" id="pine_tree_preview">
  <polygon points="62,80 32,120 92,120" fill="green"/>
  <polygon points="62,100 22,150 102,150" fill="green"/>
  <polygon points="62,120 12,190 112,190" fill="green"/>
  <rect x="52" y="190" width="20" height="60" fill="saddlebrown"/>
</svg>`;
            break;
        case "4":
            result = `<svg xmlns="http://www.w3.org/2000/svg" width="125" height="250" id="pine_tree_preview">
  <polygon points="62,75 32,104 92,104" fill="green"/>
  <polygon points="62,90 22,130 102,130" fill="green"/>
  <polygon points="62,105 12,165 112,165" fill="green"/>
  <polygon points="62,120 2,197 122,197" fill="green"/>
  <rect x="52" y="197" width="20" height="53" fill="saddlebrown"/>
</svg>`;
            break;
        case "5":
            result = `<svg xmlns="http://www.w3.org/2000/svg" width="125" height="250" id="pine_tree_preview">
  <polygon points="62,50 32,90 92,90" fill="green"/>
  <polygon points="62,68 26,114 98,114" fill="green"/>
  <polygon points="62,88 18,142 106,142" fill="green"/>
  <polygon points="62,105 8,173 116,173" fill="green"/>
  <polygon points="62,116 0,204 124,204" fill="green"/>
  <rect x="50" y="204" width="20" height="44" fill="saddlebrown"/>
</svg>`;
            break;
    }
    document.getElementById('pine_tree_preview').outerHTML = result;
    document.getElementById(out_svg).value = result;
}
document.querySelector('button[onclick="gen()"]').addEventListener('click', function(event) {
    event.preventDefault();
    gen();
});
document.querySelector('button[onclick="genPT(\'pine_tree_out\')"]').addEventListener('click', function(event) {
    event.preventDefault();
    genPT('pine_tree_out');
});

function regEvents() {
    /* Sun and Moon */
    const sunCheckbox = document.getElementById('sun');
    const moonCheckbox = document.getElementById('moon');
    const svg = document.getElementById('sky_drag');
    let isDragging = false;
    let currentElement = null;
    let offsetX, offsetY;

    sunCheckbox.addEventListener('change', () => {
        const sun_circle = document.getElementById('sun_circle');
        sun_circle.style.display = sunCheckbox.checked ? 'block' : 'none';
    });

    moonCheckbox.addEventListener('change', () => {
        const moon_circle = document.getElementById('moon_circle');
        moon_circle.style.display = moonCheckbox.checked ? 'block' : 'none';
    });

    const dragStart = (event) => {
        currentElement = event.target;
        isDragging = true;
        offsetX = event.clientX - currentElement.getAttribute('cx');
        offsetY = event.clientY - currentElement.getAttribute('cy');
    };

    const dragMove = (event) => {
        if (isDragging && currentElement) {
            currentElement.setAttribute('cx', event.clientX - offsetX);
            currentElement.setAttribute('cy', event.clientY - offsetY);
        }
    };

    const dragEnd = () => {
        isDragging = false;
        currentElement = null;
        const sun_circle = document.getElementById('sun_circle');
        const moon_circle = document.getElementById('moon_circle');
        const sbbox = sun_circle.getBBox();
        const mbbox = moon_circle.getBBox();
        const scx = sbbox.x + sbbox.width / 2;
        const scy = sbbox.y + sbbox.height / 2;
        const mcx = mbbox.x + mbbox.width / 2;
        const mcy = mbbox.y + mbbox.height / 2;
        const sunx = document.getElementById('sunx');
        const suny = document.getElementById('suny');
        const moonx = document.getElementById('moonx');
        const moony = document.getElementById('moony');
        
        document.getElementById('sunx').textContent = `Sun pos. X: ${scx}px`;
        document.getElementById('suny').textContent = `Sun pos. Y: ${scy}px`;
        document.getElementById('moonx').textContent = `Moon pos. X: ${mcx}px`;
        document.getElementById('moony').textContent = `Moon pos. Y: ${mcy}px`;
    };

    svg.addEventListener('mousedown', dragStart);
    svg.addEventListener('mousemove', dragMove);
    svg.addEventListener('mouseup', dragEnd);
    svg.addEventListener('mouseleave', dragEnd);
}

window.onload = regEvents;