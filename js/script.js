// script.js

const container = document.getElementById('root');

function App() {
    return (
        <React.Fragment>
            <h1>Hello</h1>
            <form>
                <input type="text" required />
            </form>
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(container);
root.render(<App />);