import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    const addToBasket = (item) => {};

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
        </main>
    );
}

export { Shop };
