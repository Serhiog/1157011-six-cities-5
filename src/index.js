import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import rootReducer from "./store/rootReducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchHotelsList, checkAuth} from "./store/api-actions";
import {requireAuthorization} from "./store/action";

const api = createAPI(() =>
  store.dispatch(requireAuthorization(`NO_AUTH`))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchHotelsList()),
  // store.dispatch(fetchFavoriteOffersList()),
  store.dispatch(checkAuth()),
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
