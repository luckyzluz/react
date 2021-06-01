
import './App.css';
import Home from './components/home'
import Propsdemo from './components/propsdemo'
import Kong from './components/kong'
import Children from './components/children'
import Demo from './components/demo'

function App() {
  return (
    <div className="App">
<Home/>
<Propsdemo title=":我是props传的值" />
<Kong/>
<Children>
  <h3>你好children1</h3>
<h3>你好children2</h3>
</Children>
<Demo/>
        你好么么哒

    </div>
  );
}

export default App;
