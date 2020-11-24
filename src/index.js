import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import rootReducer from "./store/rootReducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchHotelsList} from "./store/api-actions";
import {loadHotels} from "./store/action";
// import {redirect} from "./store/middlewares/redirect";

const api = createAPI(() =>
  store.dispatch(loadHotels(`LOAD_HOTELS`))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    // applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchHotelsList()),
  // store.dispatch(checkAuth()),
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
