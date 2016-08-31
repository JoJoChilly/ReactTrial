var React = require('react');

var Counter = React.createClass({
    displayName: 'Counter',
    getInitialState() {
        return {
            clickCount: 0  
        };
    },
    handleClick: function(){
        this.setState(function(state){
            return {
                clickCount:state.clickCount+1
            }
        })
    },
    render() {
        return (
            <h2 onClick={this.handleClick}>ClickMeIBegU@{this.state.clickCount}</h2>
        );
    }
});

module.exports = Counter;