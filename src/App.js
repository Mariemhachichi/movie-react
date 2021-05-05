import './App.css';
import Navb from './componant.js/nav'
import Movie from './componant.js/carte'
import Partie1 from './componant.js/part1';
import Footer from './componant.js/footer';
// import Test from './componant.js/test';

function App() {
  return (
    <div>
     <Navb />
     <Partie1 />
     <Movie/>
     {/* <Test /> */}
     <hr></hr>
     <Footer />
    </div>
  );
}

export default App;
