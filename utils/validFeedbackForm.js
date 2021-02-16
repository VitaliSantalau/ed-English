const valid = (email, feedback) => {
    if(!email || !feedback) {
      return "Please fill all fields"
    }
  
    if(!validateEmail(email)) {
      return "Please fill correct email"
    } 
  }
  
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
export default valid