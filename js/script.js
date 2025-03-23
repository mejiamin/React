// script.js




// const container = document.getElementById('root');

// function MyComponent({ title, className, expression, children }) {
//     return (
//         <div className={className}>
//             <h1 className="title">{title}</h1>
//             <p className="description">Мой первый компонент</p>
//             <span className="expression">{children} = {expression}</span>
//             <br/>
//             <img src="" alt="Мне нужен url" />
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(container);
// root.render(
//     <MyComponent
//         title="Hello React!"
//         className="container"
//         expression={2 + 2}
//     >
//         <span>2 + 2</span>
//     </MyComponent>
// );





const container = document.getElementById('root');

function MyComponent({ title, className, expression, children }) {
    return (
        React.createElement('div', { className: 'container' }, [
            React.createElement('h1', { className: 'title' }, title),
            React.createElement('img', { src: '', alt: 'Мне нужен url' })
        ])
    );
}

const root = ReactDOM.createRoot(container);
root.render(
    React.createElement(MyComponent, {title: 'Приложение на React без JSX'})
);