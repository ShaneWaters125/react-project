import { Fragment } from 'react';
import './Introduction.css';

function formatName(user){
    return user.firstname + ' ' + user.lastname;
}

const user = {
    firstname: 'Shane',
    lastname: 'Waters'
}

function GetGreeting(user){
    if(user){
        const element = (
            <div>
                <h1>Hello, {formatName(user)}!</h1>
                <h1>JSX with multiple children</h1>
            </div>
        )
        return element;
    }
    return <h1>Hello, Stranger.</h1>
}

function Form(){
    function handleSubmit(e) {
        e.preventDefault();
        console.log("You clicked submit.");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}


//Return just a single element
// function Introduction() {
//   return (
//     GetGreeting(user)
//   );
// }

//Return multiple elements
function Introduction() {
    return (
        <Fragment>
            <Form />
            <GetGreeting firstname="shane" lastname="waters"/>
        </Fragment>
    );
}

export default Introduction;

