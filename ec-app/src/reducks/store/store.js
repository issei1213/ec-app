import { 
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger"

import { UsersReducer } from "../users/reducers";
import { ProductsReducer } from "../products/reducers";

export default function createStore(history) {

  const middleWares = [routerMiddleware(history), thunk]

  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({
      collapsed: true,
      diff: true
    });
    middleWares.push(logger);
  }


  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      products: ProductsReducer
    }),
    applyMiddleware(...middleWares)
  )
}