import React from "react";

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
                <span className="matched">Aug</span>
                <span className="remainder">gie</span>

            </div>
            
            <div className="typed-keys">asdfgieasdf</div>
            <div className="completed-words">
                <ol>
                    <li>Matheus</li>
                    <li>Lucas</li>
                    <li>Kaue</li>
                </ol>
            </div>
        </div>
    );
};

export default App;
