import { ShopItem } from './ShopItem'

export const ListView = ({ items }) => {
  return (
    <div className='cards-grid'>
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
      <button className='item-button'>Add to cart</button>
    </div>
  )
}
