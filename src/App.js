import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop';
import Decor from './pages/Decor/Decor';
import Office from './pages/Office/Office';
import LivingRoom from './pages/LivingRoom/LivingRoom';
import BedRoom from './pages/BedRoom/BedRoom';
import Story from './pages/Story/Story';
import Tracker from './pages/Tracker/Tracker';
import Help from './pages/Help/Help';
import Login from './pages/Login/Login';

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './contexts/ContextProvider';
import ThemeSettings from './components/ThemeSetting';
import DetailProduct from './components/Products/DetailProduct';
const App = () => {
    const { themeSettings, setThemeSettings } = useStateContext();
    return (
        <>
            <BrowserRouter>
                <div style={{ zIndex: '1000' }} className="fixed right-10 bottom-20">
                    <TooltipComponent content="Settings" position="BottomCenter">
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                            style={{ background: '#c19a83', borderRadius: '50%' }}
                        >
                            <FiSettings></FiSettings>
                        </button>
                    </TooltipComponent>
                </div>
                {themeSettings && <ThemeSettings />}
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="shop" element={<Shop />}></Route>
                        <Route path="decor" element={<Decor />}></Route>
                        <Route path="office" element={<Office />}></Route>
                        <Route path="living-room" element={<LivingRoom />}></Route>
                        <Route path="bedroom" element={<BedRoom />}></Route>
                        <Route path="story" element={<Story />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                        <Route path="tracker" element={<Tracker />}></Route>
                        <Route path="help" element={<Help />}></Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="detail" element={<DetailProduct />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
