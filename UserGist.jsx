var React = require('react');

var UserGist = React.createClass({
    displayName: 'UserGist',
    getInitialState() {
        return {
            username:'Joan',
            lastGistUrl:''  
        };
    },
    componentDidMount() {
        this.serverRequest = $.get(this.props.source,function(result){
            var lastGist = result[0];
            this.setState({
                username:lastGist.owner.login,
                lastGistUrl:lastGist.html_url
            });
        }.bind(this));
    },
    componentWillUnmount() {
        this.serverRequest.abort();  
    },
    render() {
        return (
            <div>
                {this.state.username} 用户最新的 Gist 共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        );
    }
});

module.exports = UserGist;