import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { MessageForm } from './components/MessageForm';
import { MessageList } from './components/MessageList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container py-2">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/newmessage" component={MessageForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
