fetch('https://api.jikan.moe/v4/random/anime')
  .then(response => response.json())
  .then(overallData => {
    overallData = overallData.data;

    
    if (overallData.images.jpg.image_url === null || overallData.trailer.embed_url === null || overallData.genres.some(genre => genre.name === "Hentai")) {
        location.reload();
    } else {
        /*Titulo del anime*/
        document.getElementById('text-title').innerHTML = overallData.title;

        /*Titulo en otros idiomas*/
        const titleInEnglish = overallData.title_english;
        if (titleInEnglish == null) {
            document.getElementById('type-default').innerHTML = 'El título en inglés no está disponible.';
        } else {
            document.getElementById('type-default').innerHTML += titleInEnglish;
        }
        document.getElementById('type-japanese').innerHTML = overallData.title_japanese;

        /*Tipo de anime*/
        document.getElementById('manga-type').innerHTML += overallData.type;

        /*Fuente del anime*/
        const source = overallData.source;
        if (source == 'unkown') {
            document.getElementById('manga-font').innerHTML = 'Fuente desconocida';
        } else {
            document.getElementById('manga-font').innerHTML += source;
        }
        /*Numero de episodios*/
        document.getElementById('episodes').innerHTML += overallData.episodes;

        /*Fecha comienzo de emision*/
        const startDate = overallData.aired.prop.from;
        const dateFormatStart = (startDate.day) + ' / ' + (startDate.month) + ' / ' + (startDate.year);
        document.getElementById('emision-start-date').innerHTML += dateFormatStart;

        /*Fecha fin de emision*/
        const endDate = overallData.aired.prop.to;
        const dateFormatEnd = (endDate.day) + ' / ' + (endDate.month) + ' / ' + (endDate.year);
        if (endDate.day == null && endDate.month == null && endDate.year == null) {
            document.getElementById('emision-end-date').innerHTML += 'En emisión...';
        } else {
            document.getElementById('emision-end-date').innerHTML += dateFormatEnd;
        }

        /*Duracion del anime*/
        document.getElementById('duration').innerHTML += overallData.duration;

        /*Clasificacion del anime*/
        document.getElementById('clasification').innerHTML += overallData.rating;

        /*Score del anime*/
        const score = overallData.score;
        if (score == null) {
            document.getElementById('score').innerHTML += 'Este anime no está puntuado.'
        } else {
            document.getElementById('score').innerHTML += score;
        }

        /*Genero del anime*/
        const arrayGenres = overallData.genres;
        if (arrayGenres.length === 0) {
            document.getElementById('genres').textContent = "Género no especificado";
        } else {
            for (let i = 0; i < arrayGenres.length; i++) {
                if (i != arrayGenres.length - 1) {
                    document.getElementById('genres').innerHTML += arrayGenres[i].name + ", ";
                } else {
                    document.getElementById('genres').innerHTML += arrayGenres[i].name + ".";
                }
            }    
        }

        /*Sinopsis del anime*/
        if (overallData.synopsis == null) {
            document.getElementById('synopsis').innerHTML += 'La descripción del anime no está disponible.'    
        } else {
            document.getElementById('synopsis').innerHTML += overallData.synopsis;
        }

        /*Imagen del anime*/
        document.getElementById('image').src += overallData.images.jpg.image_url;

        /*Trailer del anime*/
        document.getElementById('video-url').src = overallData.trailer.embed_url;
    }
})
  .catch(error => {
    console.log('Ha ocurrido un error:', error);
  });