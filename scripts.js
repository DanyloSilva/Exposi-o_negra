function virarCarta(carta) {
    carta.classList.toggle('virada');

    if (carta.classList.contains('virada')) {
      const verso = carta.querySelector('.verso');
      const link = verso.getAttribute('data-link');
      verso.addEventListener('click', function(event) {
        event.stopPropagation();
        window.open(link, '_blank');
      });
    }
  }
