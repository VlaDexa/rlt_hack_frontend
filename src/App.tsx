import './App.css'
import {Footer} from "./Footer";
import {Header} from "./Header";
import {Rating} from "./RatingSubpage/Rating";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
    return (
    <div className="App">
        <Header/>
        <Rating/>
        <Footer/>
    </div>
  )
}

export default App
