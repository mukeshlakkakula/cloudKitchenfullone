import { createContext, useContext, useReducer } from "react";

const CartStateContex = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // console.log("added ADD");
      // console.log("action size", action.size);
      return [
        ...state,
        {
          id: action.id,

          name: action.name,
          qty: action.quantity,
          finalPrice: action.finalPrice,
          size: action.size,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case "DROP":
      let empArray = [];
      return empArray;
    case "UPDATE":
      let arr = [...state];
      // console.log("updaated");
      // console.log("astate", state);

      const filterFood = arr.map((each) => {
        if (each.id === action.id && each.size === action.size)
          return {
            ...each,
            qty: parseInt(action.quantity) + parseInt(each.qty),
            finalPrice: parseInt(action.finalPrice) + parseInt(each.finalPrice),
          };
        return each;
      });

      return filterFood;

    default:
      console.log("error in reducer");
  }
};

const ContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContex.Provider value={state}>
        {children}
      </CartStateContex.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContex);
export const useDispatchCart = () => useContext(CartDispatchContext);
export default ContextReducer;
