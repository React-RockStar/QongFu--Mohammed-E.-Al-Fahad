import React from 'react';
import { css } from 'aphrodite/no-important';
import f from './functions';
import _ from 'lodash';
import { motion } from "framer-motion";

class Landing extends React.Component {
    // Set states
    state = {
        //
    };

    // Bind basic functions
    shouldComponentUpdate = f.shouldComponentUpdate.bind(this);
    componentWillMount = f.componentWillMount.bind(this);
    componentDidMount = f.componentDidMount.bind(this);
    componentWillUnmount = f.componentWillUnmount.bind(this);

    // Bind component level functions
    checkIpAddress = f.checkIpAddress.bind(this);

    // Remove this
    toggle = f.toggle.bind(this);

    render () {
        return (
            <div className={css(this.styles.mainContainer)}>

                {/* Remove from this line */}
                <h1 className={css(this.styles.helloWorld)}>
                    Hello World It's Qongfu!
                </h1>
                <motion.button
                    style={styles}
                    whileHover={{ scale: .9 }}
                    onClick={() => this.toggle()}
                >
                    Click Me
                </motion.button>
                {/* Until this line */}

            </div>
        );
    }
}

export default Landing;

// Remove from this line
const styles = {
    background: "#7fffd4",
    borderRadius: 30,
    width: 150,
    padding: "10px 20px",
    margin: "auto",
    color: "#333",
    outline: "none",
    border: "none",
    cursor: "pointer"
};
// Until this line