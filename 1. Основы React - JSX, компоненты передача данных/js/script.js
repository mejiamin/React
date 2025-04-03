// script.js

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App words={words} selectedItems={selectedItems} finishedItems={finishedItems} />);

function App({ words = [], selectedItems = [], finishedItems = [] }) {
    return (
        <section className="game">
            <Grid words={words} selectedItems={selectedItems} finishedItems={finishedItems} />
        </section>
    );
}

function Grid({ words, selectedItems, finishedItems }) {
    const cards = words.map((item, index) => (
        <Card
            key={item.id}
            type={item.type}
            url={item.url}
            text={item.word}
            isSelected={selectedItems.includes(item.id)}
            isFinished={finishedItems.includes(item.id)}
        />
    ));
    return (
        <ul className="cards">
            {cards}
        </ul>
    );
}

function Card({ url, text, type, isSelected = false, isFinished = true }) {
    const content = type === 'image'
        ? <img src={url} width="185" height="100" />
        : <span>{text}</span>;
    const className = `card ${isSelected ? 'selected' : ''}
        ${isFinished ? 'disabled' : ''}`;
    return (
        <li className={className}>
            {content}
        </li>
    );
}