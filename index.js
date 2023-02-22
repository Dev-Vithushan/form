

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mobile = document.getElementById('mobile')
const qualification = document.getElementById('qualification')
const dob = document.getElementById('dob')
const male = document.getElementById('option-1')
const female = document.getElementById('option-2')
var gender = ""


form.addEventListener("submit", e => {
    e.preventDefault()
    // submitButton.disabled = true
    
    validateInputs()

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    const mobileValue = mobile.value.trim()
    const dobValue = dob.value.trim()
    const qualificationValue = qualification.value.trim()
    var genderVal = ""

    // if (male.checked == true){
    //     genderVal = "male"
    // } else if (female.checked == true) {
    //     genderVal = "female"
        
    // }

    // var ele = document.getElementsByName('gender');
      
    // for(i = 0; i < ele.length; i++) {
    //     if(ele[i].checked)
    //         genderVal = ele[i].value
    // }

    // console.log(genderVal);
    
    if (usernameValue === '' || emailValue === '' || passwordValue === '' || password2Value === '' || mobileValue === '' || dobValue === ''){
        alert("You need to enter the all data")
    } else {
        showInfo();
        console.log("Hello")
            fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("form")),
        }).then(
            response => response.json()
        ).then((html) => {
            // you can put any JS code here
            window.open('page2.html', '_blank');
        
        });
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbxvvswAXpUdNVGWnTkBR93nMKI-OPG2n0qX97uaqKeejV-fuR6kyhL9FjcW0XBEr3jb/exec'
        // let requestBody = new FormData(form)
        // fetch(scriptURL, { method: 'POST', body: requestBody})
        //   .then(response => {
        //      alert('Success!', response)
        //      submitButton.disabled = false
        //     })
        //   .catch(error => {
        //   alert('Error!', error.message)
        //     submitButton.disabled = false
    
        //   }
        //   )
        }
    



        
    
});






// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
    

//     const usernameValue = username.value.trim()
//     const emailValue = email.value.trim()
//     const passwordValue = password.value.trim()
//     const password2Value = password2.value.trim()
//     const mobileValue = mobile.value.trim()
//     const dobValue = dob.value.trim()
//     const qualificationValue = qualification.value.trim()


//     if (usernameValue === '' || emailValue === '' || passwordValue === '' || password2Value === '' || mobileValue === '' || dobValue === '' || qualificationValue === '' ){
//         alert("You need to enter the all data")
//     } else {
        
//         // excelExport();
//         showInfo();
//         excelExport();
        

//         // let data = new FormData(form);
//         //     fetch('https://script.google.com/macros/s/AKfycbyzNFKuK6K_nv0pGUA8KlkMP8TgSQbbxnUetbY9L1S-bSCAU2WZx43mAY6rV5G2hukX/exec', {
//         //             method: "POST",
//         //             body: data
//         //         })
//         //         .then(res => res.text())

        
        
//         // excelExport();
        
//         // fetch(form.action, {
//             //     method: "POST",
//             //     body: new FormData(document.getElementById("form")),
//             // })
//     }








// });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const mobileValue = mobile.value.trim();
    const dobVal = dob.value.trim()
    // const male = male.value.trim()
    // const female = female.value.trim()


    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if (mobileValue.length < 8) {
        setError(mobile,'Your Phone number not correct')
    }

    if(dobVal === ''){
        setError(dob, 'Need to Select your Date of birth')
    }

    // if(maleVal === '' && femaleVal === ''){
    //     setError(gender, 'Need to select atleast one')
    // }


    return true;

    

};

const showInfo = () =>{


    const nameVal = username.value
    const emailVal = email.value
    const passwordVal = password.value
    const mobileVal = mobile.value
    const qualificationVal = qualification.value
    const dobVal = dob.value
    // const genderVal = ""
    var genderVal = ""

    // if (male.checked == true){
    //     genderVal = "male"
    // } else if (female.checked == true) {
    //     genderVal = "female"
        
    // }

    var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            genderVal = ele[i].value
    }

    // var ele = document.getElementsByName('gender');
    //         for(i = 0; i < ele.length; i++) {
    //             if(ele[i].checked)
    //             genderVal = ele[i].value;

    var row = 1
    var display = document.getElementById("display")
    var newRow = display.insertRow(row)
    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    var cell6 = newRow.insertCell(5)
    var cell7 = newRow.insertCell(6)

    cell1.innerHTML = nameVal
    cell2.innerHTML = emailVal
    cell3.innerHTML = passwordVal
    cell4.innerHTML = dobVal
    cell5.innerHTML = mobileVal
    cell6.innerHTML = qualificationVal
    cell7.innerHTML = genderVal
    row ++ 


    alert("Your details are adding to the table")
    // displayRadioValue()

}


function eraseAll() {
    var element = document.getElementById(" personalDetails ");
    element.reset()
}

function excelExport ()  {
    const scriptURL = 'https://docs.google.com/spreadsheets/d/10qQTKg87ITWJdGtj1ybOf-BMSVa3a34zoiHQcdf5gpQ/edit#gid=0'
    const form = document.forms['google-sheet']
    

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
          .catch(error => console.error('Error!', error.message))
}



function googleSheetExport () {
    alert("hello")
    const form = document.getElementById('form');
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("form")),
    })
    // .then(
    //     response => response.json()
    // ).then((html) => {
    //   // you can put any JS code here
    //   window.open('page2.html', '_blank');

    // });
}

