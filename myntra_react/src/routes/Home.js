import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItems";



const Home=()=>{
   const items= useSelector(itemStore =>itemStore.items)
   //console.log(items)
    return (
        <main>
                <div className="items-container">
                    {items.map((items)=>(
                        <HomeItems key={items.id} item={items}></HomeItems>
                    ))}
                    
                </div>
            </main>
    )
}
export default Home;