import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = createRoot(document.getElementById('root'));

// const container = document.getElementById("root")
// const root = ReactDOM.createRoot(container)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)