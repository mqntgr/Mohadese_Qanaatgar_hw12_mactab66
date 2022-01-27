//اطلاعات رو از فرم میگیره
function handleSubmit(e) {
   
    e.preventDefault();
    const formElement = e.target;
    const values = {}
    // valid = true;
    for(input of formElement) {
        if ( values[input.name] == "" )
    {
        // document.contact_form.firstname.value
        alert ( "Please fill in the 'Your Name' box." );
        // valid = false;
    }
    else  {
            values[input.name] = input.value
        }
   
    // else{
    //     valid=true
    // }
    return valid
  }
    console.log(values)
    
}


function validate_form ( )
{
    
}

//     const nameInput = document.querySelector('input');
// const form = document.querySelector('form');

// nameInput.addEventListener('input', () => {
// nameInput.addEventListener('invalid', () => {
//   if(nameInput.value === '') {
//     nameInput.setCustomValidity('Enter your username!');
//   } else {
//     nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
//   }
// });

//     console.log(values)
// }
//فقط نام نمایش داده بشه
// const inputElem=document.getElementById("fname")
// const btnElem=document.getElementById("submit")
// btnElem.addEventListener('click',()=>{
//    console.log(inputElem.value)
// })

function hidmessage(e){
    
}

 const btn = document.getElementById("myModal");
 function btnFunc(){
btn.style.display='block'
if(btnFunc){

    // Your application has indicated there's an error
    window.setTimeout(function(){

        // Move to a new location or you can do something else
        window.location.href = "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout";

    }, 3000);
  }
 }

 var span = document.getElementsByClassName("close")[0];
 span.onclick = function() {
    myModal.style.display = "none";
  }

 
