# QongFu--Mohammed-E.-Al-Fahad

https://www.qongfu.com/

This is Fitness Web app for QongFu.
I used React.js/Next.js/Material UI for this project.


# Qongfu Web Front End
###### React.js

## Dependencies
- Aphrodite for styling (We will have normal LTR and RTL styling but we will only work on normal LTR at the moment)
- Framer Motion animation library for React
- Lodash
- React i18Next for translations


## Component and Page Template Structure
###### Component.js
```
import React from 'react';
import { css } from 'aphrodite/no-important';
import f from './functions';

class ComponentName extends React.Component {
  state = {
    // ...
  }
  
  // Import functions
  shouldComponentUpdate = f.shouldComponentUpdate.bind(this);
  // ...
  
  render () {
    return(
    
      <div className={css(this.styles.div)}>
        <h1 className={css(this.styles.h1)}>{this.props.t('Hello World, Language is in English')}</h1>
      </div>
      
    ):
  }
}

export default ComponentName;
// Will have connections and withRouter later
```


###### functions.js
```
import getStyles from './styles';
import getStylesRtl from './stylesRtl';

export default {

    shouldComponentUpdate: function (nextProps, nextState) {
      // detect changes between English and Arabic language settings
      // to setup the styles to be used
    },
    
    componentWillMount: function () {
      // ...
    },
    
    componentDidMount: function () {
      // ...
    },
    
    // *********************************************************
    // *************** CUSTOM COMPONENT FUNCTIONS
    // *********************************************************
    
    // ...
    
    
    
    // *********************************************************
    // *************** REDUX CONNECTIONS & DISPATCHING
    // *********************************************************
    
    // ...
    
}

```

###### styles.js and stylesRtl.js
```
import { StyleSheet } from 'aphrodite/no-important';

export default function (props,state) {
    return StyleSheet.create({
    
      // ...
    
    });
}
```



![Qongfu-Desktop](https://user-images.githubusercontent.com/66811996/103221669-4acfcb80-4977-11eb-800b-a19198ab3aa8.png)


![Qongfu-Mobile](https://user-images.githubusercontent.com/66811996/103221718-663ad680-4977-11eb-8573-f95cd82edc89.png)
