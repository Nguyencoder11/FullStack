import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import StudentView from './component/student/StudentView';
import Navbar from './component/common/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import AddStudent from './component/student/AddStudent';

function App() {
  return (
    <main className="container mt-5 ">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/view-students' element={<StudentView/>}></Route>
          <Route exact path='/add-student' element={<AddStudent/>}></Route>

        </Routes>
      </Router>
    </main>
  );
}

export default App;
