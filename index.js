

function validate(){
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('cpassword').value

    let tnc = document.getElementById('tnc').checked
    
         
      let error = false
    
      if(firstName.length >=3){
        document.getElementById("first-name-valid").style.display="block"
        document.getElementById("first-name-invalid").style.display="none"
        
      }
      else{
        document.getElementById('first-name-invalid').style.display="block"
        document.getElementById("first-name-valid").style.display="none"
        error= true
      }
    
      if(lastName.length >=3){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
        
      }
      else{
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
        error= true
      }
      
      if(email && email.includes('@') && email.includes('.')
       && email.lastIndexOf('.')<=email.length-3
       && email.indexOf('@')!==0){
        document.getElementById('email-valid').style.display='block'
        document.getElementById('email-invalid').style.display='none'
       
      }
      else{
        document.getElementById('email-invalid').style.display='block'
        document.getElementById('email-valid').style.display='none'
        error= true
      }


      if(password && password.length>=8){
        document.getElementById('password-valid').style.display='block'
        document.getElementById('password-invalid').style.display='none'
        
      }
      else{
        document.getElementById('password-invalid').style.display='block'
        document.getElementById('password-valid').style.display='none'
        error= true
      }    
      
      if(cpassword && cpassword != password){
        document.getElementById('cpassword-valid').style.display='block'
        document.getElementById('cpassword-invalid').style.display='none'
        
      }
      else{
        document.getElementById('cpassword-invalid').style.display='block'
        document.getElementById('cpassword-valid').style.display='none'
        error= true
      }


      if(tnc){
        document.getElementById('tnc-invalid').style.display='none'
        
      }
      else{
        document.getElementById('tnc-invalid').style.display='block'
        error= true
      }
      }
      if(!error) {
            alert('Your details have been saved successfully!')
      }
      resetValidateField()
    
    
    const resetValidateField =()=> {
      document.getElementById('first-name').value =""
      document.getElementById('last-name').value = ""
      document.getElementById('email').value = ""
      document.getElementById('password').value = ""
      document.getElementById('cpassword').value = ""
      document.getElementById('tnc').checked = false
    
      document.getElementById('first-name-valid').style.display = 'none'
      document.getElementById('last-name-valid').style.display = 'none'
      document.getElementById("email-valid").style.display = "none"
      document.getElementById("password-valid").style.display = "none";
      document.getElementById("cpassword-valid").style.display = "none";
    }
    