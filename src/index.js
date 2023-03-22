import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Cart from './pages/Cart'
import reportWebVitals from './reportWebVitals'
import './index.css'

// Дефолтные состояния хранилища
const defaultState = {
  selectedGood: {},
  itemsInCart: [],
}

// Редюсер выпадающего списка
const selectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_GOOD':
      return { ...state, selectedGood: action.payload }
    case 'ADD_GOOD':
      return { ...state, itemsInCart: [...state.itemsInCart, action.payload] }

    default:
      return state
  }
}

// Хранилище состояний
const store = configureStore({
  reducer: {
    selection: selectReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route path="/catalog/product/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
