import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import Mywebsite from './App.js'; */
/* class demo{
  methodone()
  {
  let a = 10;
  let b = 20;
  let c = a+b;
  document.getElementById("root").innerHTML = c;
}
methodtwo()
{
let a = 100;
let b = 200;
let c = a+b;
document.getElementById("root").innerHTML = c;
}
}

var mydemo = new demo();
mydemo.methodtwo(); */

// function 

/* let a = function()
  {
  let a = 15;
  let b = 20;
  let c = a+b;
  document.getElementById("root").innerHTML = c;
}
a(); */

/* function three(d){
  let a = 1;
  let b = 2;
  let c = a+b+d
  document.getElementById("root").innerHTML = c;
}
three(8); */

// Arrow function
/* let a = (c) =>{
  let a = 2;
  let b = 5;
  let sum = a+b+c;
  document.getElementById("root").innerHTML = sum;
}
a(1); */

//With JSX - Javascript HTML
/* let myele = <h1>Hello Mahesh Manivannan</h1>
ReactDOM.render(myele, document.getElementById("root")); */

//multili elements with JSX (wrapping of elements) div is the parent, remaining are child
/* let myelements = <div>
  <h1>Hello</h1>    
  <h2>Welcome to my</h2>
  <h3>Page</h3>
</div>
ReactDOM.render(myelements, document.getElementById("root")); */

//Inline css style
/* let mystyle = {
  color: "blue",
  textAlign: "center"
}
let myelements = <div style ={mystyle}>
  <h1>Hello</h1>    
  <h2>Welcome to my</h2>
  <h3>Page</h3>
</div>
ReactDOM.render(myelements, document.getElementById("root")); */

//Adding External CSS

/* let myelements = <div>
  <h1 className = "heading">Hello</h1>    
  <h2>Welcome to my</h2>
  <h3>Page</h3>
</div>
ReactDOM.render(myelements, document.getElementById("root")); */

//Component - Functional component
/* function Header(){
  return <div>
    <h1>Hello</h1>
    <h2>Good Morning</h2>
  </div>
}
ReactDOM.render(<Header />, document.getElementById("root")); */

// Multiple functional components
/* function Header(){
  return <div>
  <h1>Hello</h1>
  <h2>GoodMorning</h2>
  </div>
}
function Sidebar(){
  return <h1>These were the contents </h1>
}
function Navbar(){
  return <h2>Contains Menu</h2>
}
function Mywebsite(){
  return <div>
    <Header />
    <Sidebar />
    <Navbar />
  </div>
}
ReactDOM.render(<Mywebsite />, document.getElementById("root")); */

//Component - Class Components
/* class Mywebsite extends React.Component{
  render(){
    return <h1>Hello Indian Team</h1>
  }
}
ReactDOM.render(<Mywebsite />, document.getElementById("root")); */

//Mutiple - Class Components
/* class Mywebsite extends React.Component{
  render(){
    return <h1>HI Good Morning</h1>
  }
}
class Mynewwebsite extends React.Component{
  render(){
    return <div>
      <Mywebsite />
      <h2>HELLO INDIAN TEAM</h2>
      <h3>Welcome here</h3>
    </div>
  }
}
ReactDOM.render(<Mynewwebsite />, document.getElementById("root")); */

//counter App Project
/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {count: 0};
  }
  
    updateCount = () =>{
      this.setState({
        count: this.state.count+1
      });
      }
      dreCount = () =>{
      this.setState({
        count: this.state.count-1
      });
      }
      resetCount = () =>{
        this.setState({
          count: 0
        });
        }
      render(){
      return <div className='contains'>
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <button className="incre" onClick={this.updateCount}><span>+</span></button> 
        <button className="decre" onClick={this.dreCount}><span className='dec'>-</span></button>
        <button className="reset" onClick={this.resetCount}><span className='res'>Reset</span></button>
        
        </div>
    }
  }
ReactDOM.render(<App />, document.getElementById("root")); */

//Import class from external file
/* class Mynewwebsite extends React.Component{
  render(){
    return <div>
      <Mywebsite />
      <h2>HELLO INDIAN TEAM</h2>
      <h3>Welcome here</h3>
    </div>
  }
}
ReactDOM.render(<Mynewwebsite />, document.getElementById("root")); */

//React Props
/* class Student extends React.Component{
  render(){
    return <h1>Name is {this.props.name} Age is {this.props.age}</h1>
  }
}
ReactDOM.render(<Student name="Smith" age="20"/>, document.getElementById("root")); */

//React props using variable
/* class StudentParentclass extends React.Component{
  render(){
    return <h1>Smith is a {this.props.let}</h1> //here let is the variable
  }
}
class StudentChildclass extends React.Component{
  render(){
    let str = "Good Boy";
    return <StudentParentclass let = {str} /> 
  }
}
ReactDOM.render(<StudentChildclass />, document.getElementById("root")); */

//React props using object
/* class StudentParentclass extends React.Component{
  render(){
    return <h1>Student name is {this.props.var.name} and his age is {this.props.var.age}</h1>
  }
}
class StudentChildclass extends React.Component{
  render(){
    var str = {name: "Smith", age:20, role: "student"};
    return <StudentParentclass var = {str} />
  }
}
ReactDOM.render(<StudentChildclass />, document.getElementById("root")); */

//Default value in props
/*class StudentParentclass extends React.Component{
  render(){
    return <h1>Student name is {this.props.name} and his age is {this.props.age} </h1>
  }
}
StudentParentclass.defaultProps = {name: "Warner", age = 25}
ReactDOM.render(<StudentParentclass age = 22 />, document.getElementById("root")); */

//React State
/* class ReactState extends React.Component{
  constructor(){
    super();
    this.state = {value: "Hello World", greet: "Good Morning"}
  }
  render(){
    return <h1>{this.state.value} {this.state.greet}</h1>
  }
  }
ReactDOM.render(<ReactState />, document.getElementById("root")); */

//Change value using React setState
/* class ReactState extends React.Component{
  constructor(){
    super();
    this.state = {value: "Hello world"}
  }
  btn = () =>{
    this.setState({value: "Hi Finch"});
  }
  render(){
    return <div>
    <h1>{this.state.value}</h1>
    <br />
    <button type='button' onClick={this.btn}>Click</button>
    </div>
  }
}
ReactDOM.render(<ReactState />, document.getElementById("root")); */

//React Lifecycle 1)Initial Phase 2)Mounting Phase 3)Updating Phase 4)Unmounting Phase
//React Lifecycle ==> Mounting Phase ==> componentWillMount, componentDidMount
/* class Lifecycle extends React.Component{
  constructor(){
    super();
    this.state = {value: "Hello world"} //Process 2 --> This will print
  }
  componentWillMount(){   //Process 1 //Mounting Phase
    alert("Can we Proceed")
  }
  render(){
    return <div>
      <h1>{this.state.value}</h1>
      <br />
      <button type='button' onClick={this.changeValue}>Click</button>
      <button type='button' onClick={this.deleteHeader}>Delete</button>
      </div>
  }
  changeValue = () => {
    this.setState({value: "Welcome to this place"});
  }
  componentDidMount(){
    setTimeout(() => this.setState({value: "Thank you"}),5000) //Process 4 //Mounting Phase
  }
  componentWillUpdate(){
    alert("Do you want to update a new value"); //Process 3
  }
  componentDidUpdate(){
    document.getElementById("mydiv").innerHTML="NEW VALUE UPDATED SUCCESSFULLY"+" "+this.state.value; //Process 5 like an acknowledgement
  }
  shouldComponentUpdate(){
    return true; //Process 6 this is like a condition if we give FALSE the render process will stop
  }
  deleteHeader = () =>{
    this.setState({value:false,name:false});
  }
  componentWillUnmount(){
    alert("Header Deleted");
  }
}
ReactDOM.render(<Lifecycle />, document.getElementById("root")); */

//React Event Handling
/* class Event extends React.Component{
  constructor(){
    super();
    this.state = {value: "Welcome"};
  }
  changeValue = () =>{
    this.setState({value: "Thank You"});
  }
  render(){
    return <div>
      <h1>{this.state.value}</h1>
      <button type='button' onClick={this.changeValue}>Click</button>
    </div>
  }
}
ReactDOM.render(<Event />, document.getElementById("root")); */

//React Event Handling - Passing arguments
/*class Event extends React.Component{
  constructor(){
    super();
    this.state={value: "welcome"}
  }
  changeValue = (a) => {
    this.setState({value: a});
  }
  render(){ // the below one is Anonymous function
    return <div>
      <h1>{this.state.value}</h1>
      <button type='button' onClick = {() => this.changeValue("Good Morning")}>Click</button> 
      
    </div>
    //same using bind keyword-->need to mention this keyword also as argument
    /*return <div>
      <h1>{this.state.value}</h1>
      <button type='button' onClick = {this.changeValue.bind(this,"Good Morning")}>Click</button> 
      
    </div> */
  /*}
}
ReactDOM.render(<Event />, document.getElementById("root")); */

//React CSS ==> Inline CSS ==> It consists of two ways one is the add the style in double braces {{}}
//another one is to create a object and add the object's name into the style
//we can also add external CSS to our react project
/* class Css extends React.Component{
  render(){
    let myStyle = {
      color:"blue",
      fontSize:"100px",
      textTransform:"uppercase"
    }
    return <div>
      <h1 style={{color:"red",textAlign:"center"}}>Hello World</h1>
      <h1 style={myStyle}>Welcome</h1>
      <h1 className="index">Homecoming</h1>
    </div>
  }
}
ReactDOM.render(<Css />, document.getElementById("root")); */

//React Forms
/* class Forms extends React.Component{
  constructor(){
    super();
    this.state = {username:""}
  }
  userName = (event) => {
    this.setState({username: event.target.value})
  }
  render(){
    return <form>
      <h1>Hello {this.state.username}</h1>
      <label>Enter your name:</label>
      <input type="text" placeholder='Name' onChange={this.userName} />
    </form>
  }
}
ReactDOM.render(<Forms />, document.getElementById("root")); */

//React Fragments
//Used to write proper Semantic HTML code | Faster excecution | Less Memory 
/* class Fragments extends React.Component{
  constructor(){
    super();
    this.state = {value:"React Fragments",greet:"Hello World",name:"Homecoming"}
  }
  render(){
    return <React.Fragment>
      <h1>{this.state.value}</h1>
      <h2>{this.state.greet}</h2>
      <h3>{this.state.name}</h3>
    </React.Fragment>
  } //short form ==> Empty tags
  //return <>
   //   <h1>{this.state.value}</h1>
     // <h2>{this.state.greet}</h2>
    //  <h3>{this.state.name}</h3>
   // </>
} 
ReactDOM.render(<Fragments />, document.getElementById("root")); */

//React List ==> Using Functional Component
 /* function Reactlist (){
  let list = [1,"two",3,"four",5,"six"]
  let ulList = list.map((listvalues) => {
    return <li>{listvalues}</li>
  });
  return <ul>{ulList}</ul>
}
ReactDOM.render(<Reactlist list />, document.getElementById("root")); */

//React List ==> using react props

/* function Mylist(props){
  let list = props.list;
  let listMap = list.map((listvalues) => {
    return <li>{listvalues}</li>
  });
  return <ul>{listMap}</ul>
}
let list = ["one","two","three","four","five"]
ReactDOM.render(<Mylist list = {list}/>,document.getElementById("root")); */

/* function Reacthooks() {
  let [count, numCount] = useState(0);
  useEffect(() => 
  alert("Welcome to My program"))
  
  return <div>
    <p>You have clicked the button {count} times</p>
    <button onClick={() => numCount(count+1)}>Click</button>
  </div>
}
ReactDOM.render(<Reacthooks />, document.getElementById("root")); */





