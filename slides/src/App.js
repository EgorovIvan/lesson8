import logo from './logo.svg';
import './App.css';
import SlideOne from "./component/Slides/SlideOne";
import SlickCarousel from "./component/Slides/SlickCarousel";
import MyCarousel from "./component/Slides/Carousel";
import ReactSlick from "./component/Slides/ReactSlick";


function App() {
    return (
        <div className="App">
            {/*<SlideOne/>*/}
            <ReactSlick/>
            {/*<MyCarousel/>*/}
        </div>
    );
}

export default App;
