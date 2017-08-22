import React from 'react';
import { render } from 'react-dom'
// import Hello from './components/hello'
import Root from './root'
import { AppContainer } from 'react-hot-loader'

render(
    <AppContainer>
        {/* <Hello /> */}
        <Root />
    </AppContainer>,

    document.getElementById('root')
);
if (module.hot) {
    // module.hot.accept('./components/hello', () => {
    //     const NewHello = require('./components/hello').default;
    //     render(
    //         <AppContainer>
    //             <NewHello />
    //         </AppContainer>,
    //         document.getElementById('root')
    //     );
    // });
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
