import React from 'react';

import { useSelector, useDispatch ,shallowEqual } from 'react-redux';
import { setLoading } from '../context/loader';

export const ListItem = () => {

  const dispatch = useDispatch()

  const loader = useSelector(state => state.loader, shallowEqual)

  console.log(loader)

  return (
    <div>ListItem
      <button onClick={() => dispatch(setLoading(true))}>
         clicked true
      </button>
      <button onClick={() => dispatch(setLoading(false))}>
         clicked false
      </button>
    </div>
  )
}
