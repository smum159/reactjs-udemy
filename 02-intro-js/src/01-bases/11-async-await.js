// Another way to create promises and responses is to implemeting
// the 'async' and 'await' operators to create async functions
// these work similar to a promise

// Promise

const getImagePromise = () => new Promise ( (resolve, reject) =>
    resolve('Promise solved')
)

getImagePromise().then( console.log )
// Output
//  'Promise solved'

// ASYNC function

const getImageAsync = async() => {
    return 'Async func finished'
}

getImageAsync().then(console.log)
// Output
//  'Async func finished'


// Example. Implementing the previous fetch api example with error handling

const getGifImage = async() => {
    try {
        const apiKey = 'Rf60woHOkN9I45hysxlo23pzoajsYc7v'
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await res.json()
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
        console.log(data);
        return data;
    } catch (error) {
        console.warn('Something went wrong!!! see... ', error);
    }
    
}

getGifImage()