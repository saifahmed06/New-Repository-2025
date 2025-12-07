//used to make interative website
// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('dblclick', function () {
//     alert("clicked")
// });

// const hello = document.querySelector('#hello');
// hello.addEventListener('click', () => {
//     console.log("hello");
// });

// const goodbye = document.querySelector('#goodbye');
// goodbye.addEventListener('click', () => {
//     console.log("goodbye");
// });


const button = document.querySelector('#change-color');
button.addEventListener('click', function () {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;


})
