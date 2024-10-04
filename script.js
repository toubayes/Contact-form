//  selection

const firstname=document.querySelector(".firstname");
const lastname=document.querySelector(".lastname");
const email=document.querySelector(".address");
const general=document.querySelector(".general-radio-input");
const support=document.querySelector(".support-radio-input");
const message=document.querySelector(".subject");
const check=document.querySelector(".check-input");
const error=document.querySelectorAll(".error");
const message_state=document.querySelector(".message-state");

const submit=document.querySelector(".class");
submit.addEventListener("click",(event)=>{
    event.preventDefault(); // Prevent default form submission behavior
    let isValid = true;

    if (isValid) {
        validate_input();
    }
});

function validate_input(){
    if (firstname.value.trim() === "") {
        error[0].innerHTML = " This field is required";
        error[0].style.color = "red";
        firstname.style.borderColor = "red";
    } else {
        error[0].innerHTML = "";
        firstname.style.borderColor = "";
    }

    if (lastname.value.trim() === "") {
        error[1].innerHTML = " This field is required";
        error[1].style.color = "red";
        lastname.style.borderColor = "red";
    } else {
        error[1].innerHTML = "";
        lastname.style.borderColor = "";
    }

    // validation of email
    if(email.value.trim() === "" ){
        error[2].innerHTML="This field is required"
        error[2].style.color="red";
        email.style.borderColor="red";
        if(!email.value.includes("@")){
            error[2].innerHTML=" Please enter a valid email address"
            error[2].style.color="red";
            email.style.borderColor="red";
        }else{
            error[2].innerHTML="";
            error[2].style.color="";
            email.style.borderColor="";
        }
    }else{
            error[2].innerHTML="";
            error[2].style.color="";
            email.style.borderColor="";
        }
        //    validate radio 
   // Validate radio buttons (ensure one is selected)
        if (!general.checked && !support.checked) {
            error[3].innerHTML = "Please select an option";
            error[3].style.color = "red";
        } else {
            error[3].innerHTML = "";
        }

        // validate testarea input
        if(message.value.trim() === ""){
            error[4].innerHTML="   This field is required";
            error[4].style.color="red";
            message.style.borderColor="red";
        }else{
            error[4].innerHTML=" ";
            error[4].style.color="";
            message.style.borderColor="";
        }
        // validate checkbox
        if(!check.checked){
            error[5].innerHTML="This field is required";
            error[5].style.color="red";
            
            }else{
                error[5].innerHTML="";
                error[5].style.color="";
               
            }
      
        // If all fields pass validation, show success message
        if (
            firstname.value.trim() !== "" &&
            lastname.value.trim() !== "" &&
            email.value.trim() !== "" &&
            email.value.includes("@") &&
            (general.checked || support.checked) &&
            message.value.trim() !== "" &&
            check.checked
        ) {
            message_suceess();
        }

}
function message_suceess(){
        message_state.style.display="block";
}