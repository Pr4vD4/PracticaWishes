function hideWish(event) {

    event.stopPropagation()

    const wish = event.currentTarget

    const wishMessage = wish.querySelector('.wish-message')

    anime({
        targets: wish,
        scale: {
            value: 0,
            easing: 'easeInBack'
        },
        opacity: {
            value: () => 0,
            easing: "linear"
        },
        translateY: {
            value: () => '25vh',
            easing: 'easeInExpo'
        },
        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {
            wish.remove()
        },
    });

}
function showWish(event) {

    console.log(event.touches)

    event.stopPropagation()

    const wishContainer = document.querySelector('.wish-container')

    const wish = document.createElement('div')
    wish.className = 'wish'

    wish.style.top = event.touches[0].pageY  + 'px'
    wish.style.left = event.touches[0].pageX  + 'px'

    const wishMessage = document.createElement('div')
    wishMessage.className = 'wish-message'
    wishMessage.textContent = getRandomWish()

    wish.append(wishMessage)

    wishContainer.append(wish)

    wish.addEventListener('touchstart', hideWish)


    anime({
        targets: wish,
        scale: {
            value: 5
        },
        opacity: {
            value: () => 1,
            easing: "linear"
        },

        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {
        },
    });
}