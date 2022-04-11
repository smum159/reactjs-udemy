// This is our first FC (functional component) this is the current way how we
// create component in React. It is used to use classes instead functions

import { Fragment } from "react";
import PropTypes from 'prop-types';

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

// React componentes cant pass data between them by sending properties (props)
// In this case we have two examples of how send these props between components

// We can send the properties assuming that these exist in a general object called props
// this isn't a recommendted way any more
export const FirstAppImplProps1 = (props) => {
    // As you see in the component we're assuming that inside props we have a property
    // called 'greeting' and we return the value of this one
    return <h1>{props.greeting}</h1>
}

// The other recommended method is by defining the especific properties that we want to received
// We can se that instead the word 'props' we have an object with the name of the property we
// want to received
export const FirstAppImplProps2 = ({greeting, user = 'Perez'}) => {
    // here we can use the property directly without using the word 'props'
    // an advantage here is that we can assign default values to those props that could
    // come undefined.
    return <h1>{greeting} {user}</h1>
}

// The past two examples have a lack, and this is that these need props to work but
// they don't force the developer to send those props. For the next example we are gonna
// make use of the 'PropTypes'. Take note of the proper import at the top.

export const FirstAppImplPropsTypes = ({userName, weekday}) => {
    return( 
        <>
            <h1>Hello {userName}, welcome back!</h1>
            <p>Today is {weekday}</p>
        </>
    )
}

// By implementing proptypes for our component, we can define the type of the property we want
// to get for our component. In this case we are specifying a type string.
// Also take note of the last annotation in the proptype 'isRequired' with this we make sure
// that the property we are specifying is required for our component and if this one isn't
// provided a new error will be triggered. 
FirstAppImplPropsTypes.propTypes = {
    userName: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired
}
// We also are able to set default values on a more organized way instead of specifying these
// at the top of our component by creating a 'defaultProps' object such as this. This can
// be use as a fail save and as visual feedback for our component to point out of missing
// props in our compoent
FirstAppImplPropsTypes.defaultProps = {
    userName: "No user name added",
    weekday: "No weekday added"
}