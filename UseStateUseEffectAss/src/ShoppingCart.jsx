import { useReducer } from "react";

const initialState = [];

function reducer(cart, action) {
    if (action.type === "ADD") {
        return [...cart, action.product];
    }

    if (action.type === "DELETE") {
        return cart.filter((item) => item.id !== action.id);
    }

    if (action.type === "CLEAR") {
        return [];
    }

    return cart;
}

function ShoppingCart() {
    const [cart, dispatch] = useReducer(reducer, initialState);

    const laptop = { id: 1, name: "Laptop", price: 50000 };
    const phone = { id: 2, name: "Phone", price: 20000 };

    return (
        <div>
            <h1>Product Store</h1>

            <h2>Products</h2>

            <p>
                Laptop - ₹50000
                <button onClick={() => dispatch({ type: "ADD", product: laptop })}>
                    Add
                </button>
            </p>

            <p>
                Phone - ₹20000
                <button onClick={() => dispatch({ type: "ADD", product: phone })}>
                    Add
                </button>
            </p>

            <h2>Cart</h2>

            <p>
                {cart.length === 0 ? "Cart is empty" : cart[0]?.name}
            </p>

            <button onClick={() => dispatch({ type: "CLEAR" })}>
                Clear Cart
            </button>
        </div>
    );
}

export default ShoppingCart;