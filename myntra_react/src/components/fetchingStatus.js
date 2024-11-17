import {useDispatch,useSelector} from "react-redux"
import {useEffect} from "react"

import { itemActions } from "../Redux_store/itemSlice";
import { fetchActions } from "../Redux_store/fetchSlice";
const Fetch=()=>{
    const fetchStatus=useSelector(myntra_store=>myntra_store.fetchStatus)
    //console.log(fetchStatus)
    const dispatch=useDispatch()
    //console.log(items)

    useEffect(() => {
        if (fetchStatus.fetchDone) return; //if it is true then it comes out from useEffect
    
        const controller = new AbortController();
        const signal = controller.signal;
    
        
        fetch("http://localhost:8080/items", { signal })
          .then((res) => res.json())
          .then(({items})=>{
          //dispatch(fetchActions.fetchingDone());
            dispatch(itemActions.addItems(items[0]))
             console.log(fetchStatus)

           
          })
            
            
            
          
    
        return () => {
          controller.abort();
        };
      }, [fetchStatus]);

    return <></>

    
}
export default Fetch