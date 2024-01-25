import { createSlice } from "@reduxjs/toolkit";
import toast, { Toast } from "react-hot-toast";

const initialState = {
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    total: localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
};

const cartSlice = createSlice( {
    name:"cart",
    initialState: initialState,
    reducers:{
        setTotalItems(state, value) {
            state.token = value.payload;
        },
        // Add to cart
        addToCart: (state, actions) => {
            const course = actions.payload;
            const index = state.cart.findIndex( (item) => item._id === course._id);

            if(index >= 0){
                // If the course is already in the cart, do not modify the quantity
                toast.error("Course already in cart");
                return;
            }

            // If course is not in the cart, add it to the cart
            state.cart.push(course);
            // Update the total quantity and price
            state.totalItems++;
            state.total += course.price;
            // Update to localstorage
            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("total", JSON.stringify(state.total));
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            // show toast
            toast.success("Course added to cart");
        },
        // removefromcart
        removeFromCart: (state, action) => {
            const courseId = action.payload;
            const index = state.cart.findIndex( (item) => item.id === courseId);

            if(index >= 0){
                // If the course is found in the cart, remove it
                state.total -= state.cart[index].price
                state.cart.splice(index, 1);
                state.totalItems--;
                // Update to localstorage
                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
                // Show toast
                toast.success("Course removed from cart")
            }
        },
        // resetcart
        resetCart: (state) => {
            state.cart= []
            state.total = 0
            state.totalItems = 0

            // Update to localStorage
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            localStorage.removeItem("totalItems")
        }
    }
})

export const {setTotalItems, resetCart, addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;



