import React, { createContext, useState } from 'react'

const PRODUCTS = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export const ProductsContext = createContext()
export const AddContext = createContext()
export const MinusContext = createContext()

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(PRODUCTS)

  function handleQuantitiyAdd(productID) {
    setProducts(
      products.map(p => {
        if (p.id === productID) {
          return {
            ...p,
            quantity: p.quantity + 1,
          }
        } else {
          return p
        }
      })
    )
  }

  function handleQuantitiyMinus(productId) {
    let newProducts = products.map(p => {
      if (p.id === productId && p.quantity > 0) {
        return {
          ...p,
          quantity: p.quantity - 1,
        }
      } else {
        return p
      }
    })
    setProducts(newProducts.filter(p => p.quantity > 0))
  }

  return (
    <ProductsContext.Provider value={products}>
      <AddContext.Provider value={handleQuantitiyAdd}>
        <MinusContext.Provider value={handleQuantitiyMinus}>
          {children}
        </MinusContext.Provider>
      </AddContext.Provider>
    </ProductsContext.Provider>
  )
}
