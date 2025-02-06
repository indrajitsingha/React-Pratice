import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import './App.css';
import useFetchData from './useFetchData';

function App() {
  const { Data } = useFetchData();
  console.log(Data);

  const parentRef = useRef();

  const rowVirtualizer = useVirtualizer({
    count: Data?.length || 0, // Number of items to virtualize
    getScrollElement: () => parentRef.current, // Reference to the scroll container
    estimateSize: () => 200, // Estimate height for each item (adjust if necessary)
  });

  return (
    <div
      ref={parentRef}
      style={{
        overflow: 'auto',
        position: 'relative',
        background: "red"

      }}
      //  className='mainCard'

    >
      <h1>sfffdfffdf</h1>
      <div
        style={{
          // height: `${rowVirtualizer.getTotalSize()}px`,
          height: `900px`,
          position: 'relative',
          width: '100%',
        }}
        className="product-container"
       
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div

            key={virtualRow.index}
            ref={virtualRow.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <Product pro={Data[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

const Product = ({ pro }) => {
  return (
    <div className="card">
      <div className="image_container">
        <img src={pro?.category?.image} alt="" />
      </div>
      <div className="title">
        <span>{pro?.title}</span>
      </div>
      <div className="size">
        <span>Size</span>
        <ul className="list-size">
          <li className="item-list">
            <button className="item-list-button">37</button>
          </li>
          <li className="item-list">
            <button className="item-list-button">38</button>
          </li>
          <li className="item-list">
            <button className="item-list-button">39</button>
          </li>
          <li className="item-list">
            <button className="item-list-button">40</button>
          </li>
          <li className="item-list">
            <button className="item-list-button">41</button>
          </li>
        </ul>
      </div>
      <div className="action">
        <div className="price">
          <span>${pro?.price}</span>
        </div>
        <button className="cart-button">
          <svg
            className="cart-icon"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};
