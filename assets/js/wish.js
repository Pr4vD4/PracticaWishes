function hideWish(event) {

    event.stopPropagation()

    const wish = event.currentTarget

    const wishMessage = wish.querySelector('.wish-message')

    anime({
        targets: wish,
        // width: {
        //     value: () => 0,
        //     easing: 'easeInBack'
        // },
        // height: {
        //     value: () => 0,
        //     easing: 'easeInBack'
        // },
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

    // anime({
    //     targets: wish,
    //     backdropFilter: {
    //         value: () => `blur(${0}px)`,
    //         easing: "linear"
    //     },
    //     duration: () => 1000, // Random duration between 500 and 1000 ms
    //     complete: function() {
    //         wish.addEventListener('touchstart', hideWish)
    //         wish.addEventListener('click', hideWish)
    //     },
    // });

}
function showWish(event) {

    console.log(event.touches)

    event.stopPropagation()

    const wishContainer = document.querySelector('.wish-container')

    const wish = document.createElement('div')
    wish.className = 'wish'

    wish.style.width = '50px'
    wish.style.height = '50px'

    wish.style.top = event.touches[0].pageY  + 'px'
    wish.style.left = event.touches[0].pageX  + 'px'

    const wishMessage = document.createElement('div')
    wishMessage.className = 'wish-message'
    wishMessage.textContent = getRandomWish()

    wish.append(wishMessage)

    wishContainer.append(wish)

    // wish.addEventListener('click', hideWish)
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