import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Toaster} from "react-hot-toast";
import { GlobalProvider } from './context/GlobleContext';
import { BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>

</GlobalProvider>
);





