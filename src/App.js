import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import { useState } from 'react';
function App() {
  const [page, setpage] = useState(1)
  return (
    <div className="App">
      {page==0?<Login setpage={setpage} />:<Home setpage={setpage} />}
    </div>
  );
}

export default App;
