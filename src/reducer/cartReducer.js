const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // tackle the existing product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        category: product.category,
        experience: product.experience,
        amount,
        location: product.location,
        image: product.image,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart
      ? state.cart.reduce((initialVal, curElem) => {
          let { amount } = curElem;
          initialVal = initialVal + amount;
          return initialVal;
        }, 0)
      : 0;

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart
      ? state.cart.reduce(
          (accum, curElem) => {
            let { price, amount } = curElem;
            accum.total_item += amount;
            accum.total_price += price * amount;
            return accum;
          },
          {
            total_item: 0,
            total_price: 0,
          }
        )
      : { total_item: 0, total_price: 0 };

    return {
      ...state,
      total_item,
      total_price,
    };
  }

  return state;
};

export default cartReducer;
