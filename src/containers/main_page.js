import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {} from '../actions/index';


class MainPage extends Component{
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(props){
        super(props);
        // this.chooseBeforeSign = this.chooseBeforeSign.bind(this);
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillUnmount(){

    }
    render(){
        return(
            <div>
               <p>React start</p>
            </div>
        );

    }
}
function  mapStateToProps(state) {
    return{
        language: state.language
    }
}

export default connect(null, {})(MainPage);