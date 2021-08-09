import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

/**Reads data from the store and loads the film into ItemList component */
function FilmList() {
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;
