import { useContext } from 'react'
import { DataContext } from '../store/globalState'
import Loading from './loading'
import Toast from "./toast"

const Notify = () => {
  const [state, dispatch] = useContext(DataContext)
  const { notify } = state

  return (
    <>
      { notify.loading && <Loading /> }
      { notify.error && <Toast /> }
      { notify.success && <Toast /> }
    </>
  )

}

export default Notify