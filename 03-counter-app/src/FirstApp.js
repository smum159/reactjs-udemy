// This is our first FC (functional component) this is the current way how we
// create component in React. It is used to use classes instead functions, and

import { Fragment } from "react";

// there could be the possiblity to still find those way of coding.
export const FirstApp = () => {

    return <h1>Hello Friend</h1>
}

export const FirstAppWrappedElements = () => {
    // Unlike the previous function, this one returns more than one line wich will 
    // need to wrapped in parenthesis, but not just that in react we need to wrap 
    // any HTML element wrappend in one single element. For this there are 3 examples
    return (

        // Implementig divs or any other html that we could need. Take note that any of the
        // tags implemented will be render to along with your elements in it
        /* <div>
            <h1>Hi Buddy!</h1>
            <p>How you doing?</p>
        </div> */

        // Implementing React's fragment component will allow us to wrap our
        // elements in a component that will not render any extra elements that we
        // couldn't want contraty to the example above
        <Fragment>
            <h1>Hi Buddy!</h1>
            <p>How you doing?</p>
        </Fragment>
        
        // Using empty tags will also work and 
        // this one is a short way similar to implement Reacts Fragment component
        /* <>
            <h1>Hi Buddy!</h1>
            <p>How you doing?</p>
        </> */
    )

}

export const FirstAppVariablesPrinting = () => {

    const day = 24
    const month = "March"
    const year = [2,0,2,2]
    const user = {
        nombre: "Juan",
        edad: 30
    }
    return (
        // We can print many type of variables on react in order to do that the first step
        // is to wrap them between curved brackets {}.
        // Take note of the following examples
        <>
            {/* We can print object properties */}
            <h1>Hello User: {user.nombre}</h1>
            {/* we can also print string, numbers, and also take note on the array
            it will print each element separated but this will be render in a single line */}
            <p>Today is {month} {day} {year}</p>
            <p>Here's your all your info:</p> 
            {/* We also can print full objects but these would need to go through a stringify process */}
            <p>{JSON.stringify(user)}</p>
        </>
    )
}