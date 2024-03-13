import { stat } from "fs";
import { useContext, createContext, useState, useReducer } from "react";

// types 
type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type action = {
  type: "increase" | "decrease" | "remove" | "incWithQuantity"
  id: number
}

type actionQ = action & {
  quantity: number
}
type ShoppingCartContext = {
  getQuantity: (id: number) => number
  reducerTrigger: (action: actionQ) => void
  getTotalQuantity: () => number
  getCartITems: () => cartItems[]
}
type cartItems = {
  id: number
  quantity: number
}

// contexts
const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// context provider
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

  const [state, dispatch] = useReducer(cartReducer, [] as cartItems[]);


  function getQuantity(id: number) {
    return 1;
  }

  function cartReducer(state: cartItems[], action: actionQ) {
    const { type, id, quantity } = action;
    console.log(id);
    console.log(type);
    console.log(quantity);
    switch (type) {
      case "increase": {
        if (state.find((item) => item.id === id) == null) {
          return [...state, { id, quantity: 1 }];
        } else {
          return state.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      }
      case "decrease": {
        if (state.find(item => item.id === id)?.quantity === 1) {
          return state.filter((item) => item.id !== id);
        } else {
          return state.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
        }
      }
      case "remove": {
        return state.filter((item) => item.id !== id);
      }
      case "incWithQuantity": {
        if (state.find((item) => item.id === id) == null) {
          return [...state, { id: id, quantity: quantity }];
        }
        else {
          return state.map((item) => {
            console.log(`int the map func`)
            if (item.id === id) {
              console.log(item.id);
              return { ...item, quantity: item.quantity + quantity }
            }
            return item;
          });
        }
      }
      default:
        return state;
    }
  }

  function reducerTrigger(action: actionQ) {
    dispatch(action);
  }

  function getTotalQuantity() {
    return state.reduce((total, item) => total + item.quantity, 0);
  }

  function getCartITems() {
    return state;
  }


  return (
    <ShoppingCartContext.Provider value={{ getQuantity, reducerTrigger, getTotalQuantity, getCartITems }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}