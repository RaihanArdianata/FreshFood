import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Router from './router';
const Navigation = NavigationContainer

export default function App() {
  return (
    <Navigation>
      <Router></Router>
    </Navigation>
  );
}

