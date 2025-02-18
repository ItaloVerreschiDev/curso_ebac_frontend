function mudarCorSecao(secao) {
    const secao1 = document.getElementById('secao1');
    const secao2 = document.getElementById('secao2');
    const secao3 = document.getElementById('secao3');
    
    secao1.style.backgroundColor = '#ffcc00';
    secao2.style.backgroundColor = '#ff6600';
    secao3.style.backgroundColor = '#0099cc';

    if (secao === 1) {
        secao1.style.backgroundColor = '#66ff66';
    } else if (secao === 2) {
        secao2.style.backgroundColor = '#66ccff';
    } else if (secao === 3) {
        secao3.style.backgroundColor = '#ff66cc';
    }
}