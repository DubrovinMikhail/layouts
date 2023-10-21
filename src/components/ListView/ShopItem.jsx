export const ShopItem = ({ product }) => {
 return (
    <div className="item" style={{backgroundImage:`url(${product.img})`, backgroundSize:"cover"}}>
          <h4 className='item__name'>{product.name}</h4>
          <p className='item__color'>{product.color}</p>
          <div className="item-price__wrapper">
            <p className='item__price'>${product.price}</p>
          </div>
    </div>
  )
}
