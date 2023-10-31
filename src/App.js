import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  
  
} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSearch,faList,faHome,faPlus,faUser } from '@fortawesome/free-solid-svg-icons'

import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
function App() {
  return (
    <div className="App">
      
      <Router>

        
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Anoop Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to="/"><FontAwesomeIcon icon={faHome} color='Blue' />Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to="/list"><FontAwesomeIcon icon={faList } color='Blue'/>List</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to="/create"><FontAwesomeIcon icon={faPlus} color='Blue' />Create</Link></Nav.Link>
            {/* <Nav.Link href="#action2"><Link to="/details">Details</Link><FontAwesomeIcon icon={ } /></Nav.Link> */}
            <Nav.Link href="#action2"><Link to="/search"><FontAwesomeIcon icon={faSearch} color='Blue'/>Search</Link></Nav.Link>
            {/* <Nav.Link href="#action2"><Link to="/update">Update</Link><FontAwesomeIcon icon={ } /></Nav.Link> */}
            <Nav.Link href="#action2"><Link to="/search"><FontAwesomeIcon icon={faUser} color='Blue'/>Login</Link></Nav.Link>
           
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
     </Navbar>

        <Routes>
          <Route path="/list" element={<RestaurantList/>}/>
          <Route path="/create" element={<RestaurantCreate/>}/>
          <Route path="/details" element={<RestaurantDetails/>}/>
          <Route path="/search" element={<RestaurantSearch/>}/>
           <Route path="/update/:id" element={<RestaurantUpdate/>}/>  
          {/* <Route path="/update/:id" render={props => <RestaurantUpdate {...props} />} />  */}
          <Route path="/" element={<Home/>}/>
        
        </Routes>
        </Router>
        

      
    </div>
  );
}

export default App;
