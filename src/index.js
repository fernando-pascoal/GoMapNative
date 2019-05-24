import React, { Component } from "react";
import "~/config/reactotron";

import { Provider } from "react-redux";
import store from "~/store";
import Map from "~/components/Map";
import Form from "~/components/Form";

import { ViewContainer } from "./styles";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ViewContainer>
                    <Form />
                    <Map />
                </ViewContainer>
            </Provider>
        );
    }
}

export default App;
