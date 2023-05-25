import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
