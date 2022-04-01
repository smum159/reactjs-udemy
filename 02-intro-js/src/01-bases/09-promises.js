// We will calle the resolve when we want to solve our promise
// and the reject when the promise wasn't fulfilled 
// Example

import { getHeroById } from "./01-bases/08-import-exports"

const myPromise = new Promise( (resolve, reject) => {

// It is recomenden to set a timeout to our promises in order to
// set a time limit for our promise to be executed    
    setTimeout( () => {
        console.log( "Promise 2 sec timeout finished");
        //This will run the promise catch
        // reject()
        //This will run the promise then
        // resolve()
    }, 1000)
})

// This part of the promise is executed when the promise is resolved
myPromise.then( () => {
 console.log("Promise resolved!");
})

// This part of the promise is executed when the promise is rejected
myPromise.catch( () => {
    console.log("Promise rejected!");
})

// This part of the promise is executed when either the promise is solved or rejected
myPromise.finally( () => {
    console.log("Promise has endend!!");
})

const heroPromise = new Promise( (resolve, reject) => {

        setTimeout( () => {
            console.log( "Time out finished!");
            const hero = getHeroById(2)
            resolve(hero)
            // Reject simulation
            // reject("Your hero doesn't exist")
        }, 2000)
    })
    heroPromise.then( (hero) => {
     console.log("Your Hero is... ", hero);
    }).catch( err  => console.log(err)
    ).finally( () => {
        console.log("Hero promise terminated!");
    })

// Second example. Using promise being callend inside a function
    const getHeroByIdAsync = (id) => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                console.log( "Second hero promise timeout");
                const hero = getHeroById(id)
                if (hero === undefined) {
                    reject("Your hero doesn't exist!")
                } else {
                    resolve(hero);
                }
            }, 2000)
        });
    }
    getHeroByIdAsync(23)
    .then( hero => console.log('Your second hero is... ', hero))
    // We can reduce the amount of code if we are sure about the content we will have
    // and simplify the then and catch statements like this
    // .then( console.log )
    .catch ( err => console.warn('Hero request failed!', err))
    // .catch ( console.warn)
    .finally( () => console.log('Second hero request finished!'))