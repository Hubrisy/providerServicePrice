import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className='App'>
      <div className='calc__block'>
        <h1>Provider service price</h1>
        <Calculator />
        <div className='description__list'>
          <div className='description__list-block'>
            <ol>
              <li>
                <div>
                  <h4>backblaze.com:</h4>
                  <ul>
                    <li>min payment is 7$</li>
                    <li>storage price: 0.005$ for GB</li>
                    <li>transfer price: 0.01$ for GB</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h4>bunny.net</h4>
                  <ul>
                    <li>max payment is 10$</li>
                    <li>storage price: HDD is 0.01$ / SSD is 0.02$</li>
                    <li>transfer price: 0.01$</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
          <div className='description__list-block'>
            <ol>
              <li>
                <div>
                  <h4>scaleway.com</h4>
                  <ul>
                    <li>storage price(first 75GB is free): Multi 0.06$ / Single: 0.03$ </li>
                    <li>transfer price(first 75GB is free): 0.02$</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h4>vultr.com</h4>
                  <ul>
                    <li>min payment is 5$</li>
                    <li>storage price: 0.01$</li>
                    <li>transfer price: 0.01$</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
