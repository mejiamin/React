// script.js




// var handleToggle = document.querySelector('.open');

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// function MyComponent(props) {
//     const { onToggle, isOpen } = props;
//     return (
//         <div className={isOpen ? 'open' : ''} onClick={onToggle}>Component</div>
//     )
// }

// root.render(<MyComponent onClick={handleToggle} isOpen={true} />)




// function UserCard(props) {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>{props.email}</p>
//             <p>{props.phone}</p>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UserCard name={'Amin'} email={'amin@mail.com'} phone={'123-456-789'} />)




// function UserCard({name, email, phone}) {
//     return (
//         <div>
//             <h2>{name}</h2>
//             <p>{email}</p>
//             <p>{phone}</p>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<UserCard name={'Amin'} email={'amin@mail.com'} phone={'123-456-789'} />)




// function Example() {
//     const [count, setCount] = React.useState(0);

//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Нажми
//             </button>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Example />)




// function Example() {
//     const [count, setCount] = React.useState(0);
//     const [name, setName] = React.useState("Jon");

//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <p>Вас зовут {name}</p>
//             <button onClick={() => setCount(count + 1)}>Нажми</button>
//             <button onClick={() => setName("Jane")}>Изменить имя</button>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Example />);




const Button = (props) => {
    return <button {...props}>Нажми на меня!</button>
}

const App = () => {
    return <Button className="btn btn-pripary" onClick={() => console.log("Нажали!")} />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());