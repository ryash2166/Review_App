import AverageRating from './components/AverageRating';
import Form from './components/Form';
import Header from './components/Header';
import ReviewList from './components/ReviewList';

const App = () => {

  return (
    <>
    <div className='my-4'>
      <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header bg-white">
              <Header />
            </div>
            <div className="card-body">
              <Form />
              <AverageRating />
              <ReviewList />
            </div>
          </div>
      </div>
    </div>
    </>
    
  );
}

export default App;
