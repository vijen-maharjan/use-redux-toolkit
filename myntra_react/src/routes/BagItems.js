import { useSelector } from "react-redux";
import BagSummary from "../components/BagSummary";
import ItemsInBag from "../components/ItemsInBag";


const BagItems = () => {
    const bagIDs=useSelector(store=>store.bags)
    
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

    
   
    return (
        <>
                <main>
                    <div class="bag-page">
                        <div class="bag-items-container">
                            {finalItems.map((items)=>(
                            <ItemsInBag item={items}/>

                            ))}
                        </div>
                        <div class="bag-summary">
                            <BagSummary/>
                        </div>

                    </div>
                </main>
                
            
        </>
    )
}
export default BagItems;