import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard } from 'mdbreact';
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

import styles from './App.module.css';
import Calendar from './container/CalendarContainer';
import Form from './container/FormData';
import ControlSelect from './container/ControlSelect';
import Checkbox from './views/reuse/CustomCheck';

const store = configureStore({  //初始化store並綁定reducer
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Checkbox value={false} disabled/>
      <Form />
      <MDBContainer fluid className={`${styles.container} mt-4`}>
        <MDBRow>
          <MDBCol size="12" xl="2">
            <h2>暨大借教室系統</h2>
            <ControlSelect />
          </MDBCol>

          <MDBCol size="12" xl="10">
            <MDBCard>
              <Calendar />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Provider>
  );
}

export default App;
