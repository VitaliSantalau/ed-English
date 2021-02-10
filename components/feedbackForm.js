import style from './feedbackForm.module.css'
import Link from 'next/link'

export default function FeedbackForm({ handleShowFeedBack }) {
    
  return (
    <div className={style.form}>
      <label className={style.email}>
        Email
        <input 
          type="text" 
          className={style.inputEmail}
          autofocus
          placeholder="Your email address..."
        />
      </label>
      <label className={style.feedback}>
        Feedback
        <textarea 
          className={style.inputFeedback}
          placeholder="Your feedback..."
        />
      </label>
      <div className={style.containerButtons}>
      <button className={style.buttonSend}>
        Send
      </button>
      <button onClick={handleShowFeedBack} className={style.buttonClose}>
        Close
      </button>
      </div>
    </div>   
  )
}