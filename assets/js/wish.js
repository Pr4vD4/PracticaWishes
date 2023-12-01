function hideWish() {
    const message = document.querySelector('.message')
    const wish = document.querySelector('.wish')

    const text = document.querySelector('.message-text')


    wish.removeEventListener('touchstart', hideWish)
    wish.removeEventListener('click', hideWish)

    anime({
        targets: message,
        width: {
            value: () => 0,
            easing: 'easeInBack'
        },
        height: {
            value: () => 0,
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
        update: () => {
            text.style.fontSize = `${message.offsetWidth / 14}px`
        },
        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {

        },
    });

    anime({
        targets: wish,
        backdropFilter: {
            value: () => `blur(${0}px)`,
            easing: "linear"
        },
        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {
            wish.style.width = 0
            wish.style.height = 0

            wish.addEventListener('touchstart', hideWish)
            wish.addEventListener('click', hideWish)
        },
    });

}
function showWish() {
    const message = document.querySelector('.message')
    const wish = document.querySelector('.wish')
    const text = document.querySelector('.message-text')

    text.textContent = getRandomWish()


    wish.style.width = '100%'
    wish.style.height = '100%'

    message.style.transform = "translateY(0)"

    anime({
        targets: message,
        width: {
            value: () => `${50}%`,
            easing: 'easeInOutBack'
        },
        height: {
            value: () => `${90}%`,
            easing: 'easeInOutBack'
        },
        opacity: {
            value: () => 1,
            easing: "linear"
        },
        update: () => {
            text.style.fontSize = `${message.offsetWidth / 16}px`
        },

        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {
        },
    });

    anime({
        targets: wish,
        backdropFilter: {
            value: () => `blur(${10}px)`,
            easing: "linear"
        },
        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {

            wish.addEventListener('touchstart', hideWish)
            wish.addEventListener('click', hideWish)

        },
    });


}