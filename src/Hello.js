import {Component} from "react";

//Added 4 function component

function First() {
    return(
        <h3>First function component</h3>
    )
}
function Second() {
    return(
        <h3>Second function component</h3>
    )
}
function Third() {
    return(
        <h3>Third function component</h3>
    )
}
function Fourth() {
    return(
        <h3>Fourth function component</h3>
    )
}


//Added 4 class component

export class First1 extends Component{
    render(){
        return(
            <h2>First class component</h2>
        )
    }
}
export class Second2 extends Component{
    render(){
        return(
            <h2>Second class component</h2>
        )
    }
}
export class Third3 extends Component{
    render(){
        return(
            <h2>Third class component</h2>
        )
    }
}
export class Fourth4 extends Component{
    render(){
        return(
            <h2>Fourth class component</h2>
        )
    }
}



// Pass name, address, scores from App Component to Student component
//  using function component

const Student = (props) => {
    return(
        <h3>Name : {props.name},
            Address : {props.address},
            Score : {props.score} </h3>
    )
}


// Pass name, address from App component to Display Component, display them in text boxes and modify them in that Component


export class Student1 extends Component{
    state = {
        name : "Nikita",
        address : "Dharashiv"
    };
    ChangeName = () => {
        this.setState({name:"Vyankatesh"})
    }
    ChangeAddress = () => {
        this.setState({address:"Ambajogai"})
    }
    render(){
        return(
            <>
                {this.state.name}<br></br>
                <button onClick={this.ChangeName}>Change Name</button><br></br>
                {this.state.address}<br></br>
                <button onClick={this.ChangeAddress}>Change Address</button>
            </>
        )
    }
}


// Add 2 buttons, add events for onClick for them to display hello & bye

export class Btns extends Component{
    hello() {
        alert("Hello");
    }
    bye() {
        alert("Bye");
    }
    render(){
        return(
            <>
                <br></br>
                <button onClick={() => this.hello()}>Click for Hello</button>
                <button onClick={() => this.bye()}>Click for Bye</button>
            </>
        )
    }
}

export {First, Second, Third, Fourth, Student};
