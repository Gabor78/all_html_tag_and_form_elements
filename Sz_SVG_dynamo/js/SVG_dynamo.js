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
    switch(randomStars(0, 14)){
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
        case 9:
        return "#fff";
        case 10:
        return "#fff";
        case 11:
        return "#fff";
        case 12:
        return "#fff";
        case 13:
        return "#fff";
        case 14:
        return "#fff";
        case 15:
        return "#fff";
        }
}
function gen(out_svg="") {
    const pcs = document.getElementById('nos').value;
    const svgw = document.getElementById('wdt').value;
    const svgh = document.getElementById('hgt').value;
    const bg_color = document.getElementById('bg_color').value;
    const sun_circle = document.getElementById('sun_circle');
    const sun_circle2 = document.getElementById('sun_circle2');
    const sun_diam = document.getElementById('sun_diam').value;
    const sun_diam2 = document.getElementById('sun_diam').value * 0.75;
    const moon_circle = document.getElementById('moon_circle');
    const moon_diam = document.getElementById('moon_diam').value;
    const sbbox = sun_circle.getBBox();
    const mbbox = moon_circle.getBBox();
    const scx = sbbox.x + sbbox.width / 2;
    const scy = sbbox.y + sbbox.height / 2;
    const mcx = mbbox.x + mbbox.width / 2;
    const mcy = mbbox.y + mbbox.height / 2;
    let result = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgw}" viewBox="0 0 ${svgw} ${svgh}" style="background-color: ${bg_color};" id="sky_drag">
    <defs>
<filter id="blr" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
</filter>
<filter id="blr2" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
</filter>
<filter id="blr3" x="0" y="0">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.3" />
</filter>
<filter id="blr4" x="-100%" y="-100%" width="400%" height="400%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="${sun_diam2}" />
</filter>
<radialGradient id="grad1" cx="34%" cy="34%" r="95%" fx="40%" fy="40%">
    <stop offset="0%" stop-color="#ff0" />
    <stop offset="100%" stop-color="#f11" />
</radialGradient>
<radialGradient id="grad2" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#77f" />
</radialGradient>
<radialGradient id="grad3" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#A9A9A9" />
</radialGradient>
<radialGradient id="grad4" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#FFCC00" />
</radialGradient>
<radialGradient id="grad5" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#4682B4" />
</radialGradient>
<radialGradient id="grad6" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#FF0000" />
</radialGradient>
<radialGradient id="grad7" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#FFA07A" />
</radialGradient>
<radialGradient id="grad8" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#FFDF81" />
</radialGradient>
<radialGradient id="grad9" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#00FFFF" />
</radialGradient>
<radialGradient id="grad10" cx="17%" cy="19%" r="95%" fx="50%" fy="50%">
    <stop offset="0%" stop-color="#fff" />
    <stop offset="100%" stop-color="#0000FF" />
</radialGradient>
    </defs>`;
    for(let i = 0; i < pcs; i++){
        result += `<circle cx="${randomStars(0, svgw)}" cy="${randomStars(0, svgh)}" r="${randomStars(0, 0.05)}" fill="${getColor()}" filter="url(#blr${randomStars(0, 3)})" />`
    }
    result+=`<circle id="sun_circle" cx="${scx}" cy="${scy}" r="${sun_diam}" fill="url(#grad1)" filter="url(#blr3) url(#blr4)" />
    <circle id="sun_circle2" cx="${scx}" cy="${scy}" r="${sun_diam}" fill="url(#grad1)" filter="url(#blr3)" />
    <circle id="moon_circle" cx="${mcx}" cy="${mcy}" r="${moon_diam}" fill="url(#grad2)" filter="url(#blr3)" />

    </svg>`;
    // <circle id="mercury_circle" cx="50" cy="140" r="2" fill="url(#grad3)" filter="url(#blr3)" />
    // <circle id="venus_circle" cx="65" cy="140" r="6" fill="url(#grad4)" filter="url(#blr3)" />
    // <circle id="earth_circle" cx="81" cy="140" r="6" fill="url(#grad5)" filter="url(#blr3)" />
    // <circle id="mars_circle" cx="98" cy="140" r="3" fill="url(#grad6)" filter="url(#blr3)" />
    // <circle id="jupiter_circle" cx="178" cy="140" r="71" fill="url(#grad7)" filter="url(#blr3)" />
    // <circle id="saturn_circle" cx="318" cy="140" r="60" fill="url(#grad8)" filter="url(#blr3)" />
    // <circle id="uranus_circle" cx="357" cy="140" r="25" fill="url(#grad9)" filter="url(#blr3)" />
    // <circle id="neptune_circle" cx="416" cy="140" r="24" fill="url(#grad10)" filter="url(#blr3)" />
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
    const pcs = document.getElementById('pine_num').value;
    const fullWidth = 60 + (pcs-1) * 20;
    const trunkH = 25 + pcs * 5;
    const fullHeight = trunkH + 10 + pcs * 30;
    const trunkW = 12 + pcs * 2;
    const trunkX = fullWidth / 2 - trunkW / 2;
    const trunkY = fullHeight - trunkH;
    let result = `<svg xmlns="http://www.w3.org/2000/svg" width="${fullWidth}" viewBox="0 0 ${fullWidth} ${fullHeight}" style="background-color: white;" id="pine_tree_preview">`;
    for(let i = 0; i < pcs; i++){
        const triX1 = fullWidth / 2;
        const triY1 = (i - 1) * 20 + 20;//i * 30;
        const triX2 = fullWidth / 2 - 20 - i * 10;
        const triY2 = 30 + (i - 1) * 30 + 40; //triY1 + 20;
        const triX3 = fullWidth / 2 + 20 + i * 10;
        const triY3 = 30 + (i - 1) * 30 + 40; //triY1 + 20;
        result += `<polygon points="${triX1},${triY1} ${triX2},${triY2} ${triX3},${triY3}" fill="green"/>`;
    }
    result += `  <rect x="${trunkX}" y="${trunkY}" width="${trunkW}" height="${trunkH}" fill="saddlebrown"/>`;
    result += `</svg>`;
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

function genSM(){

}

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
        const sun_circle2 = document.getElementById('sun_circle2');
        sun_circle.style.display = sunCheckbox.checked ? 'block' : 'none';
        sun_circle2.style.display = sunCheckbox.checked ? 'block' : 'none';
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
            if(currentElement==sun_circle){
                sun_circle2.setAttribute('cx', event.clientX - offsetX);
                sun_circle2.setAttribute('cy', event.clientY - offsetY);
            }
            if(currentElement==sun_circle2){
                sun_circle.setAttribute('cx', event.clientX - offsetX);
                sun_circle.setAttribute('cy', event.clientY - offsetY);
            }
        }
    };

    const dragEnd = () => {
        isDragging = false;
        currentElement = null;
        const sun_circle = document.getElementById('sun_circle');
        const sun_circle2 = document.getElementById('sun_circle2');
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