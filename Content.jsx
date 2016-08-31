var React = require('react');

var Content = React.createClass({
    displayName: 'Content',
    componentWillMount() {
        console.log("component will mount");
    },
    componentDidMount() {
        console.log("Component did mount");
    },
    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props");
    },
    shouldComponentUpdate(nextProps, nextState) {
        return true;  
    },
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update");
    },
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update");
    },
    componentWillUnmount() {
        console.log("Component will unmount");
    },
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
});

module.exports = Content;