import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import MyTitle from './MyTitle.jsx';
import Counter from './Counter.jsx';
import ButtonDom from './ButtonDom.jsx';
import UserGist from './UserGist.jsx';
import RefsComponent from './RefsComponent.jsx';

//Props验证
var title = "Ohhhh";
// var title = 123;
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
    <MyTitle title={title} />,
    document.getElementById('example')
);
ReactDOM.render(
    <Counter />,document.getElementById('counter')
);
ReactDOM.render(
    <ButtonDom />,document.getElementById('lifecycle')
);

ReactDOM.render(
  <UserGist source="https://api.github.com/users/icepy/gists" />
  ,document.getElementById('UserGist')
);




ReactDOM.render(
  <RefsComponent />,
  document.getElementById('example1')
);


// setTimeout(function(){
    // ReactDOM.unmountComponentAtNode(document.getElementById('lifecycle'))
// },5000)


//复合Component
// var HelloMessage = React.createClass({
//   render: function() {
//     return <Name name={this.props.name}/>;
//   }
// });

// var Name = React.createClass({
//   render: function() {
//     return <h1>人生中第一个自制组件{this.props.name}</h1>;
//   }
// });

// ReactDOM.render(<HelloMessage name='Joan'/>,document.getElementById('example'));


//State
// var LikedButton = React.createClass({
//     getInitialState: function(){
//         return {liked: false};
//     },
//     handleClick: function(){
//         this.setState({liked:!this.state.liked});
//     },
//     render: function(){
//         var txt = this.state.liked?'like':'hate';
//         return (
//             <p onClick = {this.handleClick}>
//                 I <b>{txt}</b> U. Click me to change attitude.
//             </p>
//         )
//     }
// });
// ReactDOM.render(<LikedButton/>,document.getElementById('example'));


//Props
// var HelloProps = React.createClass({
//     getDefaultProps: function() {
//         return {
//             name:'default'  
//         };
//     },
//     render: function(){
//         return <h1>Hello {this.props.name}</h1>;
//     }
// });
// ReactDOM.render(<HelloProps name="BIUBIUBIU"/>, document.getElementById('example'));

//State & Props
// var UserInfo = React.createClass({
//     getInitialState() {
//         return {
//               name:'Jennifer',
//               age:'20'
//         };
//     },
//     render() {
//         return (
//             <div>
//             <Name name={this.state.name}/>
//             <Age age={this.state.age}/>
//             </div>
//         );
//     }
// });

// var Name = React.createClass({
//     render() {
//         return (
//             <h1>{this.props.name}</h1>
//         );
//     }
// });
// var Age = React.createClass({
//     render() {
//         return (
//             <h2>{this.props.age}</h2>
//         );
//     }
// });
// ReactDOM.render(<UserInfo/>, document.getElementById('example'))



