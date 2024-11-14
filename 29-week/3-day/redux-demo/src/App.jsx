import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCats } from './store/catReducer';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const cats = useSelector(state => state.catState.entries);

  console.log(cats)

  useEffect(() => {
    dispatch(loadCats());
  }, [dispatch]);

  return (
    <div>
      <h1>Cats List</h1>
      <ol>
        {cats.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
    </div>
  )
}

export default App;
