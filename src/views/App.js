import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/Mycomponent';
import ListTodo from './Todos/ListTodo';
import Home from './example/home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './User/ListUser';
import UserDetail from './User/UserDetail';


import Nav from './Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
          >
          </a>
          <Switch>
            {/* <Route path="/" element={<Home />} />

            <Route path="Todos" element={<ListTodo />} />

            <Route path="Mycomponent" element={<Mycomponent />} /> */}
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/mycomponent">
              <Mycomponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <UserDetail />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition='Bounce'
        />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
