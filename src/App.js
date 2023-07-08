import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import PostList from './Components/PostCard/PostList';
import Cards from './Components/Boxes/Boxes';

function App() {
  return (
    <div className="App container">
      <div className='row'>
        <Navbar />
        <div className='col-md-9'>
          <div className='text-start fs-3 mt-4 fw-medium text-uppercase border-bottom border-danger'>Latest Blog Posts</div>
          <PostList />
        </div>
        <div className='col-md-3'>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
