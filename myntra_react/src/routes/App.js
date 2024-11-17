import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import HomeItems from '../components/HomeItems';
import { Outlet } from 'react-router-dom';
import Fetch from '../components/fetchingStatus';

const App = () => {
    
    
    return (
        <>
            <Header></Header>
            <Fetch/>
            <Outlet/>
            <Footer></Footer>
        </>
    );
}

export default App;
