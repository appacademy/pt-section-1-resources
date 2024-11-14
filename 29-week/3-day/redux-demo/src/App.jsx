import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCats } from './store/catReducer';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.catState.entries);

  console.log(articles)

  useEffect(() => {
    dispatch(loadCats());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
    </div>
  )
}

export default App;
