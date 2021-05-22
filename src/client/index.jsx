/**
* Created by Anil Jangra on 5/22/2021
*/
import ReactDOM from 'react-dom';
import React from 'react';
import NewsApp from './NewsApp/NewsApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <NewsApp />;
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
