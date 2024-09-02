import { useState } from 'react'
import './App.css'
import { CartFirst, CartSecond } from './components/Card'

const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 07 LV8',
    href: '#',
    price: '₹47,199',
    originalPrice: '₹48,900',
    discount: '5% Off',
    color: 'Orange',
    size: '8 UK',
    imageSrc:
      'https://images.nightcafe.studio/jobs/5gvmwZlBWYsgPvJShF7o/5gvmwZlBWYsgPvJShF7o--1--ceaa7.jpg?tr=w-1600,c-at_max',
  },
  {
    id: 2,
    name: 'Nike Blazer Low 77 SE',
    href: '#',
    price: '₹1,549',
    originalPrice: '₹2,499',
    discount: '38% off',
    color: 'White',
    leadTime: '3-4 weeks',
    size: '8 UK',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmmIbfbJFSDI4nfnw6Zzd5IGQJmf_rG2iRBO1pg6_3Q&s',
  },
  {
    id: 3,
    name: 'Nike Air Max 90',
    href: '#',
    price: '₹2219 ',
    originalPrice: '₹999',
    discount: '78% off',
    color: 'Black',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqYInlVTlExLGZW62SEH-R0wkW0a6U8G9hcD2SzhGtFk3I-JvwAPvLNN6oZPmrlqU8KI&usqp=CAU',
  },
]
function App() {
  const [boxoneData, setboxoneData] = useState([...products])
  const [boxtwoData, setboxtwoData] = useState([])
  return (
    <div className=' h-[90vh] w-[100%] flex justify-center items-center  '>
      <div className=' h-[90vh] w-[100%] flex justify-center items-center  '>
        <CartFirst products={boxoneData} getdata={setboxtwoData} />
        <CartSecond products={boxtwoData} getdata={setboxoneData} />
      </div>
    </div >
  )
}

export default App
