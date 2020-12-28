import getStyles from './styles';
// import getStylesRtl from './stylesRtl';
import _ from 'lodash';
// ...

export default {

    shouldComponentUpdate: function (nextProps, nextState) {
        // ...
    },

    componentWillMount: function () {
        this.styles = getStyles(this.props, this.state);
    },

    componentDidMount: function () {
        // ...
    },

    componentWillUnmount: function () {
        // ...
    },

    // *********************************************************
    // *************** CUSTOM COMPONENT FUNCTIONS
    // *********************************************************
    
    checkIpAddress: function () {
        //
    },

    // REMOVE THIS
    toggle: function () {
        //
    }
    
    
    
    // *********************************************************
    // *************** REDUX CONNECTIONS & DISPATCHING
    // *********************************************************

    // ...

}