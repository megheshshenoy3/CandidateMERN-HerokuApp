import React, { Component } from 'react'
import axios from 'axios';
import Footer from './Components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updatestate } from './actions';
import Navbar from './Components/navbar'
import Table from './Components/pagetable'
import About from './Components/about'
import AddnewForm from './Components/formsadd'
export default function App() {
  const dispatch = useDispatch();
  const candidateinfo = useSelector(state => state.Candidateinfo)
  useEffect(() => {
    axios.get('/addfetch/').then(result => {
      dispatch(updatestate(result.data))
      console.log(result.data)
    })
  }, []);
  return (
    <div style={{"background":"#efefef"}}>
    
      <Router>
      <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/candidatetable">
            <Table lengthofobj={candidateinfo.length} />
          </Route>
          <Route path="/addingnew">
            <AddnewForm />
          </Route>
          <Route path="/">
            <Table lengthofobj={candidateinfo.length} />
          </Route>

        </Switch>
        <Footer/>
        <br/><br/><br/>
      </Router>
    </div>
  )
}

