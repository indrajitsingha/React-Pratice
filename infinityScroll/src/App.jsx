import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetchData from "./useFetchData"
function App() {
  const { Data } = useFetchData()

  return (
    <>
      <div classNameName='logo-container'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Infinity Scroll</h1>
      <div className="card-container">
        {Data?.map((pro) => <ProductsCard key={pro?.id} product={pro} />)}


      </div>

    </>
  )
}

export default App


const ProductsCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product?.category?.image} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{product?.title}</h3>
        <p className="card-description">This is a description of the card. It gives a brief overview of what is featured in the card component.</p>
      </div>
      <div className="size">
        <span>Size</span>
        <ul className="list-size">
          {product?.sizes?.map((val) => <li className="item-list" key={val}>
            <button className="item-list-button">{val}</button>
          </li>)}

        </ul>
      </div>
      <div className="card-footer">
        <button>Learn More</button>
      </div>
    </div>
  )
}