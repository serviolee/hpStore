import React from 'react';

const ListItem = (props) => {
  const item = props.item;
  return (
    <div key={item.product_id} className="show">
      <Link to={`/products/${item.product_id}`}>
        <img className="show-img" alt={`${item.title}`} src={item.media[0].sizes[0].url} width="100"/>
      </Link>
      <div className="show-text">
        <h3 className="show-title">{item.title}</h3>
        <h4 className="show-price">${item.price}</h4>
        <h4 className="show-create">{item.created_at}</h4>
      </div>
    </div>
  )
}

export default ListItem;