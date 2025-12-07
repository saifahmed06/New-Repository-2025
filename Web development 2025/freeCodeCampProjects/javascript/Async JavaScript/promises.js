//Callback hell -old method 
/*
const fakerequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('connection TImeout:(')
        } else {
            success(`Here is the fake data from ${url}`)
        }
    }, delay)
}

fakerequestCallback('books.com/page1',
    function (response) {
        console.log("It worked!!!")
        console.log(response)
        fakerequestCallback('books.com/page2',
            function (response) {
                console.log("it worked again!!!")
                console.log(response)
                fakerequestCallback('book.com/page3',
                    function (response) {
                        console.log("It worked again (3rd req)!!!")
                        console.log(response)
                    },
                    function (err) {
                        console.log("Error (3req)!!!", err)

                    })
            },
            function (err) {
                console.log("Error(2nd req)!!!", err)
            })
    }, function (err) {
        console.log("Error(req)!!!", err)
    }

)
*/

//promise is an object representing the eventual completion or failure of an asynchornous operations
// a promise is a returned obkject to which you attach callbacks, instead of pasing callbacks into a function
const fakerequestCallback = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 400) {
                reject('connection timeout :( ')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


const request = fakerequestCallback('yelp.com/api/coffee/page1');
request.then((data) => {
    console.log("It worked!!! Page 1")
    console.log(data)
    return fakerequestCallback('yelp.com/api/coffee/page2')
})
    .then((data) => {
        console.log("It worked!!! Page 2")
        console.log(data)
        return fakerequestCallback('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("It worked!!! Page 3")
        console.log(data)

    })
    .catch((err) => {
        console.log("Oh no! Error!!!, Request rejected!!!")
        console.log(err)
    })


