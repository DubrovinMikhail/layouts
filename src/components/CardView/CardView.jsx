import { ShopCard } from './ShopCard'

export const CardView = ({ cards }) => {
  console.log('card')
  return (
    <div className='cards-grid'>
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    <button className='item-button'>Add to cart</button>
    </div>
  )
}
