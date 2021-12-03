//MongoPass
//gnncfnPpQctHYRt7
import React from 'react';
import './App.css';
import { SearchPage } from './searchPage';
import { MoviePage } from './MoviePage';
import { LoginWrapper } from './utils';
import { SignUpBox } from './signUp';
import { Routes, Route, Link } from "react-router-dom";
import {ProfileWrapper} from "./profile"
import axios from 'axios';
function App(){
  return (
    <Routes>
    <Route path="/" element={<LoginWrapper />} />
    <Route path="signup" element={<SignUpBox />} />
    <Route path="search" element={<SearchPage />} />
    <Route path="profile" element={<ProfileWrapper />} />
    
    </Routes>
  );
}
export default App;
  