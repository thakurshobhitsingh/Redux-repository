import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import ComponentA from './components/ComponentA';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentA />
      </div>
    </Provider>
  );
}