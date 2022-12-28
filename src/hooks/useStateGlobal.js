import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export const useStateGlobal = () => {

   const dispatch = useDispatch()
  
   const { loader, sesionUser } = useSelector(state => state, shallowEqual)


  return { loader, sesionUser, dispatch }
}
