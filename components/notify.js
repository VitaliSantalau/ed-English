import { useContext } from 'react'
import { DataContext } from '../store/globalState'
import Loading from './loading'
import Toast from "./toast"

const Notify = () => {
  const {state, dispatch} = useContext(DataContext)
  const { notify } = state

  return (
    <>
      { notify.loading && <Loading /> }
      { notify.error && 
        <Toast
          msg={{ msg: notify.error, title: "Error" }} 
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
        /> 
      }
      { notify.success &&
        <Toast
          msg={{ msg: notify.success, title: "Success" }} 
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
        />  
      }
    </>
  )

}

export default Notify