import { useSelector } from "react-redux";

const BagSummary=()=>{
  let CONVENIENCE_FEES= 99;
  const bagIDs=useSelector(store=>store.bags)
    
    let totalItem=bagIDs.length
    let totalMRP = 0;
    let totalDiscount = 0;

    const homeItems=useSelector(store=>store.items)
    
    const requiredItems=(item)=>{
        //console.log(item.id)
        const matchID=bagIDs.indexOf(item.id)
        return matchID>=0;
        //here the value is returned only if matchID is >=0
    }
    const finalItems=homeItems.filter(requiredItems)
    //the value>=0 returned is taken as true condition to filter the array
    //console.log(finalItems)
  
    finalItems.forEach(bagItem => {
      totalMRP += bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
    });
  
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    return (
        <>
        <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹{totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr/>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  </>
    )
}
export default BagSummary;