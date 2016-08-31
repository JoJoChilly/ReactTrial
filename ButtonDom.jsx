var React = require('react'),
    Content = require('./Content.jsx');

var ButtonDom = React.createClass({
    displayName: 'ButtonDom',
    getInitialState() {
        return {
            data:0  
        };
    },
    setNewNumber:function(){
        this.setState({data:this.state.data+1})
    },
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>Click me to Add LOVE</button>
                <Content myNumber={this.state.data}/>
            </div>
        );
    }
});

module.exports = ButtonDom;