# HUMAN CODE

### Traccia

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

### Svolgimento

- Creo un array carouselImg con all'interno tutte le immagini da mostrare
- Creo un ciclo for per generare i tag img nell'HTML
- Al primo accesso alla pagina, la prima immagine verrà mostrata
- Creo due eventi per il clic dell'utente:
  - Se è sulla freccetta next
    - Mostro l'immagine successiva nell'array
  - Se è sulla freccetta previous
    - Mostro l'immagine precedente nell'array
