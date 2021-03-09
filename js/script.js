let loaderOverlay = document.querySelector('.overlay')

window.addEventListener('load', () => {
    setTimeout(() => {
        loaderOverlay.remove()
    }, 500)
    
})