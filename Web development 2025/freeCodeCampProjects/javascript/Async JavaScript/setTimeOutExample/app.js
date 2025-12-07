// document.body.style.backgroundColor = 'pink'
setTimeout(() => {
    document.body.style.backgroundColor = 'brown';
    setTimeout(() => {
        document.body.style.backgroundColor = 'pink';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow'

        }, 2000)

    }, 2000)

}, 2000)

// document.body.style.backgroundColor = 'pink'


const delayedColorChange = (newCOlor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newCOlor;
        doNext();
    }, delay);

    delayedColorChange('red', 1000, () => {
        delayedColorChange('blue', 1000, () => {
            delayedColorChange('black', 1000, () => {
                delayedColorChange('pink', 1000, () => {

                })

            })

        })
    })
}