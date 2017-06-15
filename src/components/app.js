import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {} from '../actions/index';
import { RouteTransition } from 'react-router-transition';

class App extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillReceiveProps() {

    }
    render() {
        return (

            <div className="container-app">
                <div className={location.pathname == '/' ? "wrapper-inner green_body" : location.pathname == '/study' || location.pathname == '/test' || location.pathname == '/my_journey' || location.pathname.indexOf('/settings') == 0 ? "wrapper-inner footer-min" : "wrapper-inner" }>
                    <RouteTransition
                        className="transition-wrapper"
                        pathname={this.props.location.pathname}
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 1 }}
                        atActive={{ opacity: 1 }}
                    >
                        {this.props.children}
                    </RouteTransition>
                </div>
            </div>
        );
    }
}


export default connect(null, {})(App);