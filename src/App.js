import './App.css';
import { BrowserRouter, createBrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './component/header/Header';
import { Footer } from './component/footer/Footer';
import { Dashboard } from './component/dashboard/Dashboard';
import { About } from './component/about/About';
import { Pagenotfound } from './component/Pagenotfound';
import { Contact } from './component/contact/Contact';
import { Userlist } from './component/userlist/Userlist';
import { Services } from './component/services/Services';
import { Edit } from './component/edit/Edit';
import { Pagination } from './component/pagination/Pagination';
import { Cardpagi } from './component/pagination/Cardpagi';
import { Sign } from './component/sign/Sign';
import { Search } from './component/search/Search';
import { Usecontext } from './component/usecontext/Usecontext';
import { Usecontexdata } from './component/usecontexdata/Usecontexdata';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Try } from './component/try/Try';
import { Usememo } from './component/usememo/Usememo';
import { UseCallback } from './component/usecallback/UseCallback';
import { Usereducer } from './component/usereducer/Usereducer';

const createContextData = createContext()
function App() {
  const [state, setState]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      setState(res.data)
    })
  },[])
  return (
    <createContextData.Provider value={state}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='our-services' element={<Services/>}/>
            <Route path='user-list' element={<Userlist/>}/>
            <Route path='contact-us' element={<Contact/>}/>
            <Route path='edit/:id' element={<Edit/>}/>
            <Route path='pagi-nation' element={<Pagination/>}/>
            <Route path='card-pagi' element={<Cardpagi/>}/>
            <Route path='about-us' element={<About/>}/>
            <Route path='sign-up' element={<Sign/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='use-context' element={<Usecontext/>}/>
            <Route path='use-context-data' element={<Usecontexdata/>}/>
            <Route path='use-memo' element={<Usememo/>}/>
            <Route path='use-callback' element={<UseCallback/>}/>
            <Route path='use-fetch' element={<Try/>}/>
            <Route path='use-reducer' element={<Usereducer/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        </createContextData.Provider>
  );
}

export default App;
export {createContextData}

