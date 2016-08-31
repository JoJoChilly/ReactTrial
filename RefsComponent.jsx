var React = require('react');

var RefsComponent = React.createClass({
    displayName: 'RefsComponent',
    handleClick: function(){
        this.refs.myInput.focus();
    },
    render() {
        return (
            <div>
                <input type="text" ref="myInput" />
                <input type="button" value="点我输入框获取焦点" onClick={this.handleClick} />
            </div>
        );
    }
});

module.exports = RefsComponent;