var React = require('react');
//Props验证
var MyTitle = React.createClass({
    displayName: 'MyTitle',
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
});

module.exports = MyTitle;

