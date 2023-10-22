const rojo = document.getElementById('red');  
const verde = document.getElementById('green');  
const azul = document.getElementById('blue');  

document.addEventListener('input', function() {
    document.getElementById('valor-barra-rojo').textContent = rojo.value;
    document.getElementById('valor-barra-verde').textContent = verde.value;
    document.getElementById('valor-barra-azul').textContent = azul.value;       
    const rgb = `rgb(${rojo.value},${verde.value},${azul.value})`    
    document.body.style.backgroundColor = rgb;
  });