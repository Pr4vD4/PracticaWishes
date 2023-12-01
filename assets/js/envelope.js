function randrange(min, max) {
    return Math.random() * (max - min) + min;
}

function createEnvelopes() {
    const container = document.querySelector('.bag');

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

        envelope.style.transform = `translate(${startX}px, ${startY}px)`;

        container.appendChild(envelope);


        const endX = randrange(-25, 25)
        const endY =  randrange(-50, -30)


        anime({
            targets: envelope,
            translateY: {
                value: () => `${endY}vh`, // Random translation upwards
                easing: "easeInOutQuad",
            },
            translateX: {
                value: () => `${endX}vw`, // Random translation sideways
                easing: "easeInOutQuad",
            },
            rotate: {
                value: () => Math.random() * 180 - 90, // Random rotation between -90 and 90 degrees
                easing: "linear",
            },
            opacity: {
                value: () => .1,
                easing: "easeInBack"
            },
            update: function(anim) {
                // Проверяем, достиг ли конверт конца оси Y или X

                if (Number(anim.animations[1].currentValue.replace(/[a-z]/gi, '')) === endX || Number(anim.animations[0].currentValue.replace(/[a-z]/gi, '')) === endY) {
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

    // Create envelopes every 1 second
    const interval = setInterval(createEnvelope, 80);
    setTimeout(() => {
        clearInterval(interval)
        container.addEventListener('click', createEnvelopes)
        container.addEventListener('touchstart', createEnvelopes)
        showWish()
    }, 3000, interval)
}