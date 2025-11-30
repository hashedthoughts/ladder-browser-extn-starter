import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';

const Popup = () => {
    return (
        <div className="popup-container">
            <h1>Hello Extension!</h1>
            <p>Start building your features here!</p>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
);
