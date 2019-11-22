document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', (e) => {
        lightbox(e.target);
    })
})


function lightbox(img){
    // get info
    let imgUrl = img.attributes.src.value;
    let title = img.attributes.alt.value;

    // Set content elements
    document.querySelector('#overlay img').setAttribute('src', imgUrl);
    document.querySelector('#overlay h1').innerHTML = title;
    document.querySelector('#overlay a').setAttribute('href', imgUrl);

    // Toggle lightbox
    document.querySelector('#overlay').classList.toggle('show');
}

// Close overlay
document.querySelector('#overlay').addEventListener('click', () => {
    document.querySelector('#overlay').classList.toggle('show')
})