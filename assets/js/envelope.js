function randrange(min, max) {
    return Math.random() * (max - min) + min;
}

function getTranslateX(element) {
    let style = window.getComputedStyle(element);
    let matrix = new WebKitCSSMatrix(style.transform);
    return  matrix.m41;
}

function createEnvelopes() {
    const container = document.querySelector('.bag');
    const wishContainer = document.querySelector('.wish-container')

    container.removeEventListener('click', createEnvelopes)
    container.removeEventListener('touchstart', createEnvelopes)

    const bag = container.getBoundingClientRect()

    console.log(bag)


    function createEnvelope() {
        const envelope = document.createElement("div");
        envelope.className = "envelope";
        envelope.innerHTML = '<img src="./assets/img/envelope.jpg" alt="">';

        const startX = bag.width / 2 - 40; // половина ширины конверта
        const startY = bag.height / 4; // половина высоты конверта

        envelope.style.transform = `translate(${startX + randrange(-10, 10)}px, ${startY + randrange(-10, 10)}px)`;
        container.appendChild(envelope);

        const endX = randrange(-35, 35)
        const endY =  randrange(-50, -30)

        anime({
            targets: envelope,
            translateY: {
                value: `${endY}vh`, // Random translation upwards
                easing: "easeInOutQuad",
            },
            translateX: {
                value: `${endX}vw`, // Random translation sideways
                easing: "easeInOutQuad",
            },
            rotate: {
                value: Math.random() * 180 - 90, // Random rotation between -90 and 90 degrees
                easing: "linear",
            },
            opacity: {
                value: .1,
                easing: "easeInBack"
            },
            update(anim) {

                // Проверяем, достиг ли конверт конца оси Y
                if (Number(anim.animations[0].currentValue.replace(/[a-z]/gi, '')) === endY || Number(anim.animations[1].currentValue.replace(/[a-z]/gi, '')) === endX) {
                    anim.pause()
                    anime({
                        targets: envelope,
                        translateY: {
                            value: () => `${50}vh`, // Random translation upwards
                            easing: "easeInOutQuad",
                        },
                        translateX: {
                            value: () => `${endX * 1.5}vw`, // Random translation sideways
                            easing: "easeInOutQuad",
                        },
                        rotate: {
                            value: () => Math.random() * 180 - 90, // Random rotation between -90 and 90 degrees
                            easing: "linear",
                        },
                        // opacity: {
                        //     value: () => .1,
                        //     easing: "easeInBack"
                        // },
                        update: function(anim) {
                            // Проверяем, достиг ли конверт конца оси Y или X

                            if (Number(anim.animations[0].currentValue.replace(/[a-z]/gi, '')) === endY) {
                                anim.pause();
                                envelope.remove()
                            }
                        },
                        duration: () => Math.random() * 1000 + 800, // Random duration between 500 and 1000 ms
                        complete: function() {
                            envelope.remove();
                        },
                    });
                }

            },
            duration: () => Math.random() * 1000 + 800, // Random duration between 500 and 1000 ms
            complete: function() {
            },
        });

    }

    wishContainer.style.display = 'block'
    wishContainer.addEventListener('touchstart', showWish )
    // wishContainer.addEventListener('click', showWish)
    // Create envelopes every 0.1 second
    setInterval(createEnvelope, 100);

}