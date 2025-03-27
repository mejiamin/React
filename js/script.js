// script.js

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App cards={cards} isTopSellers={isTopSellers} />);

function App({ cards, isTopSellers }) {
    const isShownByGrid = false;
    const listClassName = `cards ${isShownByGrid ? '' : 'list'}`;
    return (
        <section className="rent">
            <RentHeader isShownByGrid={isShownByGrid} />
            <ul className={listClassName}>
                {cards.map((item) => (
                    <Card cardData={item} isTopSeller={isTopSellers.includes(item.id)} key={item.id} />
                ))}
            </ul>
        </section>
    );
}

function RentHeader({ isShownByGrid }) {
    return (
        <header>
            <h2>Аренда яхты</h2>
            <ul className="card-view-buttons">
                <li className="card-view-item">
                    <button className={`card-view-button-grid ${isShownByGrid ? 'active' : ''}`} type="button"></button>
                </li>
                <li className="card-view-item">
                    <button className={`card-view-button-list ${!isShownByGrid ? 'active' : ''}`} type="button"></button>
                </li>
            </ul>
        </header>
    );
}

function Card({ cardData, isTopSeller }) {
    const formattedPrice = `${cardData.price.toLocaleString()}`;
    return (
        <li className={`card ${isTopSeller ? 'card-top-seller' : ''}`}>
            <img className="card-img" src={cardData.img} width="280" height="140"/>
            <div className="card-content">
                <h1 className="card-title">{cardData.name}</h1>
                <p className="card-description">{cardData.description}</p>
                <ul className="card-features">
                    {cardData.features.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
            <p className="card-price">
                <span className="card-price-name">Цена</span>
                <span className="card-price-value">{formattedPrice} ₽/час</span>
            </p>
        </li>
    );
}