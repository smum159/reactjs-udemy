
// For this we are using GIPHY API
const apiKey = 'Rf60woHOkN9I45hysxlo23pzoajsYc7v'
// We implement a request using our API key
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
const myRequest2 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//We manage our request
// Take note of '.json', this helps to that in case our response isn't a valid JSON
/*
myRequest
    .then((res) => res.json()
    .then(data => console.log(data)))
    .catch(console.warn) 
*/
// Take note is the double 'then' here. This is because .json is an other kind
// of promise we are having promises in chain each 'then' refers a each promise
// no need to create a double 'catch' since a single one will help for both promises
myRequest2
    .then((res) => res.json())
    .then(({data}) => {
        console.log(data.images.original.url)
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn)