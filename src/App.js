import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/cake/store';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookCakeContainer from './components/HookCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HookCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
