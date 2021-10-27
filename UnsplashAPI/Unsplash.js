const APIKey = 'OwNqej_SAEGFrSrzGKkm4swuOhS1qw-gPV0rWPK-8cI';

fetch(`https://api.unsplash.com/search/photos?query=mobile&per_page=20&client_id=${APIKey}`)
    .then(request => request.json())
    .then(data => {
        for (let image of data.results) {

            let { alt_description } = image
            let imageURL = image.urls.small

            document.querySelector('.grid').innerHTML += `<div class="img"><img src="${imageURL} alt=${alt_description}"/><p style=" line-height:1">${alt_description}</p></div>`
        }
    })