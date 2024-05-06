import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
);
