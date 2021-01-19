// global declaration 
const nomComplet = document.querySelector('#nom-complet');
const tel = document.querySelector('#tel');
const email = document.querySelector('#email');
const societe = document.querySelector('#societe');
const objet = document.querySelector('#objet');
const message = document.querySelector('#message');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
let res = document.querySelector('#res');
//-----------check inputs -----
const checkInputs = ()=>{
 
    for (const input of inputs) {
      return input.value.length < 3 ? true: false ;
    }
} 
//----------funct onSubmit --------------
const onSubmit = (e)=>{
    e.preventDefault() ; 
     let content =''
      
        if (!checkInputs()) {
            content += ` 
            <label> Nom Complet : ${nomComplet.value}</label> <br>
            <label> Telephone   : ${tel.value}</label> <br>
            <label> Email       : ${email.value}</label> <br>   
            <label> Societe     : ${societe.value}</label> <br> 
            <label> Objet       : ${objet.value}</label> <br>   
            <label> Message     : ${message.value}</label>    
        ` ;    
          res.innerHTML = content ;
        } else {
          alert('inputs lenght must be great 3 characters')
      }
}
//submit form
form.addEventListener('submit' ,onSubmit)
