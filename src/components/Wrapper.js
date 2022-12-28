import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

const Wrapper = () => {

   const language = useSelector(state => state.language, shallowEqual)
   console.log(language)
  return (
    <div>Wrapper</div>
  )
}

export default Wrapper