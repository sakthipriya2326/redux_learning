import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import RegistrationForm from './component/registration/registration';

const App = () => {
  return (
    <Provider store={store}>
      <RegistrationForm />
    </Provider>
  );
};

export default App;