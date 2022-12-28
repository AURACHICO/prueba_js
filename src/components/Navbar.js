import React from 'react'

import { useSelector, useDispatch ,shallowEqual } from 'react-redux';
import { setSesionUser } from '../context/sesionUser';


export const Navbar = () => {

  const dispatch = useDispatch()

  const sesionUser = useSelector(state => state.sesionUser, shallowEqual)

  console.log(sesionUser)

  return (
    <div>Navbar

<button onClick={() => dispatch(setSesionUser(true))}>
Navbar true
      </button>
      <button onClick={() => dispatch(setSesionUser(false))}>
      Navbar false
      </button>
    </div>
  )
}
