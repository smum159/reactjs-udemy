// This operator simplify the way we can create conditions. This one doesn't
// substitue the traditional way, but simplify simple conditions

const messageReady = false
const deliveredMsg = () => console.log('Message delivered');
const errorMsg = () => console.warn('Error while sending your message!');

// Traditional way

if (messageReady) {
    deliveredMsg()
} else {
    errorMsg()
}

// Conditional operator

// If we want to have two diferent actions. Similar to if/else
messageReady ? deliveredMsg() : errorMsg()
// If we just want to have one action. Simliar to just if. In this case if the 
// condition is not fulfilled the action won't be executed
messageReady && deliveredMsg()