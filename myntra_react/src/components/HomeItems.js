import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../Redux_store/bagSlice";

const HomeItems=({item})=>{
    //console.log(item.image);
    const bags=useSelector(store=>store.bags)
    
    const dispatch=useDispatch()

    const addButtonHandler=()=>{
        dispatch(bagActions.addToBag(item.id))
    }

    const deleteButtonHandler=()=>{
        dispatch(bagActions.deleteFromBag(item.id))
    }
    return (
        <div class="item-container">
      <img class="item-image" src={item.image} alt="item image"/>
      <div class="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div class="company-name">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bags.includes(item.id)===true ? 
      <button type="button" class="btn btn-danger btn-add-bag" onClick={deleteButtonHandler}>Delete</button>
      :
      <button class="btn-add-bag" onClick={addButtonHandler}>Add to Bag</button>

    }

    </div>
    )
}
export default HomeItems;