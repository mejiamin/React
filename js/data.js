// data.js

const isTopSellers = ['1', '2'];
const cards = [
    {
        id: '1',
        name: 'Катер Meridian 401',
        description: 'Яхта 401 длиной 12.5 метров и шириной 4.2 метра',
        img: 'img/photo-card-1.jpg',
        price: 14000,
        features: [
            '2 каюты',
            '4 спальных места',
            'аудиосистема, кондиционер'
        ]
    },
    {
        id: '2',
        name: 'Катер 60 Manhattan',
        description: 'Двухпалубное судно VIP уровня длиной 20 метров',
        img: 'img/photo-card-2.jpg',
        price: 25000,
        features: [
            '6 кают',
            'оборудованная кухня',
            'джакузи'
        ]
    }
];

window.cards = cards;