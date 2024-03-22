
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Category from './Components/Category/Category';
import SubCategory from './Components/SubCategory/SubCategory';
import Meal from './Components/Meal/Meal';





function App() {
  const [Discription, setDiscription] = useState('')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Category  setDiscription={setDiscription}/>}/>
        <Route path='/subcategory/:subcategory' element={<SubCategory Discription={Discription} />}/>
        <Route path='/meal/:mealId' element={<Meal/>}/>
      </Route>
    )
  )

  
  return (
      <RouterProvider router={router}>  
      </RouterProvider>
  );
}

export default App;
