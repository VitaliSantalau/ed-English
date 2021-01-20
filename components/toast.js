import style from './toast.module.css'

const Toast = ({ msg, handleShow }) => {

  return (
    
      <div className={style.container}>
        <strong>{msg.title}</strong>
        <div>{msg.msg}</div>
        <button onClick={handleShow}>Ok</button>
      </div>

  )
}

export default Toast