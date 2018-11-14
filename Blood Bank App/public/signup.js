
let errors = {
    Email: '',
    password: ''
}
var arry = []
function signUp() {
    debugger
    let Fname = document.getElementById('firstName');
    let Lname = document.getElementById('lastName');
    let Uname = document.getElementById('userName');
    let Email = document.getElementById('Email');
    let password = document.getElementById('Password');
    let Cpassword = document.getElementById('ConformPassword');
    let fnameerror = document.getElementById('firstNameError');
    let Lnameerror = document.getElementById('lastNameError');
    let Unameerror = document.getElementById('UserNameError');
    let Emailerror = document.getElementById('EmailError');
    let passworderror = document.getElementById('passwordError');
    let CpasswordError = document.getElementById('CpasswordError');

    Fname
    if (Fname.value === '') {
        fnameerror.innerHTML = `
        <div class="md-form form-sm text-danger">
        <i class="fa fa-user prefix" text-danger></i>
        <input type="text" id="firstName" name="firstName" class="text-danger my-field form-control form-control-sm">
        <label for="inputSMEx"class = "text-danger">First Name</label>
        </div>
        `
    }
    // lname 
    else if (Lname.value === '') {
        Lnameerror.innerHTML = `
        <div class="md-form form-sm text-danger">
        <i class="fa fa-user prefix" text-danger></i>
        <input type="text" id="lastName" name="lastName" class="text-danger my-field form-control form-control-sm">
        <label for="inputSMEx" class= "text-danger">Last Name</label>
        </div>
        `
    }
    // uname
    else if (Uname.value === '') {
        Unameerror.innerHTML = `
        <div class="md-form form-sm text-danger">
              <i class="fa fa-user prefix" text-danger></i>
                <input type="text" id="userName" name="userName" class="text-danger my-field form-control form-control-sm">
                    <label for="inputSMEx" class = "text-danger">User Name</label>
        </div>
        `
    }
    // Email
    else if (Email.value === '') {
        Emailerror.innerHTML = `
        <div class="md-form form-sm text-danger">
                        <i class="fa fa-envelope prefix" text-danger></i>
                        <input type="text" id="Email" name="Email" class="text-danger my-field form-control form-control-sm">
                        <label for="inputSMEx" class = "text-danger">Email</label>
                    </div>
        `
    }
    // password
    else if (password.value === '') {
        passworderror.innerHTML = `
        <div class="md-form form-sm text-danger">
                    <i class="fa fa-lock prefix" text-danger></i>
                    <input type="text" id="Password" name="Password" class="text-danger my-field form-control form-control-sm">
                    <label for="inputSMEx"class= "text-danger">Password</label>
                </div>
        `
    }
    // Cpassword
    else if (Cpassword.value === '') {
        CpasswordError.innerHTML = `
        <div class="md-form form-sm text-danger">
        <i class="fa fa-lock prefix" text-danger></i>
        <input type="text" id="ConformPassword" name="ConformPassword" class="text-danger my-field form-control form-control-sm">
        <label for="inputSMEx"class="text-danger">Conform Password</label>
    </div>
        `
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(Email.value, password.value)
            .then(function (users) {
                let obj = {
                    name: Fname.value,
                    Lname: Lname.value,
                    user: Uname.value,
                    email: Email.value,
                    password: password,
                    Cpassword: Cpassword
                }
                let uid = firebase.auth().currentUser.uid;
                firebase.database().ref('users/' + uid).set(obj)
                swal({
                    title: 'Sign Up',
                    text: 'Successfully',
                    type: 'success',
                    confirmButtonText: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/login.html">Ok</a>',

                })
            })
            .catch(function (error) {
                // Handle Errors here.
                swal({
                    title: 'Error!',
                    text: 'Sign Up Already',
                    type: 'error',
                    confirmButtonText: 'Cancel'
                })
            })
    }
}

// Login
var spiner = document.getElementById('spiner')
function login() {
    let Email = document.getElementById('Email')
    let password = document.getElementById('password')
    spiner.className = "fa fa-spinner fa-spin";
    firebase.auth().signInWithEmailAndPassword(Email.value, password.value)
        .then(function (user) {
            spiner.className = "";
            swal({
                title: 'Login',
                text: 'Successfully',
                type: 'success',
                confirmButtonText: '<a href="file:///F:/vortech.git/Blood%20Bank%20App/public/index.html">Ok</a>',

            })
        })
        .catch(function (error) {
            spiner.className = "";
            swal({
                title: 'Error!',
                text: 'Sign Up Already',
                type: 'error',
                confirmButtonText: 'Cancel'
            })
        });
}


// modal

function modal() {
    let firstName = document.getElementById('First_Name')
    let lastName = document.getElementById('Last_Name')
    let CNIC = document.getElementById('CNIC')
    let Age = document.getElementById('AGE')
    let bloodGroup = document.getElementById('Blood_Group')
    let errorFname = document.getElementById('ErrorFname')
    let errorLname = document.getElementById('ErrorLname')
    let errorCnic = document.getElementById('ErrorCnic')
    let errorAge = document.getElementById('ErrorAge')
    let errorBloodGroup = document.getElementById('ErrorBloodGroup')

    if (firstName.value === '') {
        errorFname.innerHTML = `Please Fill First Name*`
    }
    else if ((firstName.value.length <= 2) || firstName.value.length > 20) {
        errorFname.innerHTML = `Character Must be 3 to 20`;
    }
    else if (!firstName.value.match(/[a-zA-Z]/)) {
        errorFname.innerHTML = `Invaild*`
    }
    else if (lastName.value === '') {
        errorLname.innerHTML = `Please Fill Last Name*`
    }
    else if ((lastName.value.length <= 3) || lastName.value.length > 20) {
        errorLname.innerHTML = `Character Must be 3 to 20`;
    }
    else if (!lastName.value.match(/[a-zA-Z]/)) {
        errorLname.innerHTML = `Invaild*`
    }
    else if (CNIC.value === '') {
        errorCnic.innerHTML = `Please Fill CNIC*`
    }
    else if (CNIC.value.length < 14 || CNIC.value.length > 14) {
        errorCnic.innerHTML = `Invaild CNIC*`
    }
    else if (Age.value === '') {
        errorAge.innerHTML = `Age*`
    }
    else if (Age.value.length < 2 || Age.value.length > 2) {
        errorAge.innerHTML = `Invaild Age*`
    }
    // else if(!Age.value.indexOf('-') <=0 && !Age.value.indexOf('+') <=0 ){
    //     errorAge.value=`Invaild**`
    // }
    else if (bloodGroup.value === '') {
        errorBloodGroup.innerHTML = `Blood Group*`
    }
    else if (bloodGroup.value.length < 2 || bloodGroup.value.length > 2) {
        errorBloodGroup.innerHTML = `Invaild Group*`
    }
    else if (bloodGroup.value.indexOf('+') <= 0 && bloodGroup.value.indexOf('-') <= 0) {
        errorBloodGroup.innerHTML = `Invaild*`
    }
    else {
        var database = firebase.database();
        let uid = firebase.auth().currentUser.uid;
        database.ref('donors/' + uid).set({
            name: firstName.value,
            Lname: lastName.value,
            CNIC: CNIC.value,
            Age: Age.value,
            bloodGroup: bloodGroup.value
        }).then(() => {
            swal({
                title: 'Donated',
                type: 'success',
                confirmButtonText: '<a href = "file:///F:/vortech.git/Blood%20Bank%20App/public/index.html">Ok</a>',
                confirmButtonColor: '#3085d6'
            })
        })
    }
    firstName.addEventListener('blur', () => {
        if (firstName.value.length >= 3)
            errorFname.innerHTML = '';
    })
    lastName.addEventListener('blur', () => {
        if (lastName.value.length >= 3)
            errorLname.innerHTML = '';
    })
    CNIC.addEventListener('blur', () => {
        if (CNIC.value.length == 14)
            errorCnic.innerHTML = '';
    })
    Age.addEventListener('blur', () => {
        if (Age.value.length == 2)
            errorAge.innerHTML = '';
    })
    bloodGroup.addEventListener('blur', () => {
        if (bloodGroup.value.length == 2)
            errorBloodGroup.innerHTML = '';
    })
}
tableData();
function tableData() {
    var row = document.getElementById('rowData')
    firebase.database().ref('donors/').on('value', ((data) => {
        console.log(data.val())
        var user = data.val()
        for (const x in user) {
            const text = user[x];
            arry.push(text)
        }
        console.log(arry)
        for (var i = 0; i < arry.length; i++) {
            row.innerHTML = `
             <div class="tableStyle">
             <table class="table">
             <thead>
             <tr>
             <th scope="col">#</th>
             <th scope="col">First</th>
             <th scope="col">Last</th>
             <th scope="col">Age</th>
             <th scope="col">CNIC</th>
             <th scope="col">Blood Group</th>
             </tr>
             </thead>
                 <tr>
                 <th scope="row">1</th>
                 <td>${arry[i].name}</td>
                 <td>${arry[i].Lname}</td>
                 <td>${arry[i].CNIC}</td>
                 <td>${arry[i].Age}</td>
                 <td>${arry[i].bloodGroup}</td>
              </tr>
              </table>
              </div>`
            console.log(row)
        }
    }))
}


function logout() {
    debugger
    firebase.auth().currentUser
    firebase.auth().signOut()
    firebase.auth().onAuthStateChanged((donors) => {
        if (donors)
            alert('login');
        else
            swal({
                title: 'Logout',
                type: 'success',
            })
        window.location.replace(`file:///F:/vortech.git/Blood%20Bank%20App/public/main.html`);

        swal({
            title: 'Logout',
            type: 'error',
            confirmButtonText: '<a href = "file:///F:/vortech.git/Blood%20Bank%20App/public/main.html">Ok</a>',
            confirmButtonColor: '#3085d6'
        })

    })



}




















   // let fields = document.getElementsByClassName('my-field form-control form-control-sm')
    // let EmailNull = document.getElementsByClassName('Email')
    // for (let i = 0; i < fields.length; i++) {
    //     const label = fields[i].parentElement.getElementsByTagName('label')[0].textContent;


    //     if (fields[i].value === '') {
    //         fields[i].parentElement.innerHTML = `
    //                 <div class="md-form form-sm text-danger"} >
    //                  <i class="fa fa-user prefix text-danger"></i>
    //                     <input type="text" id="${fields[i].id}" name="${fields[i].name}" class="text-danger my-field form-control form-control-sm">
    //                     <label for="inputSMEx">${label}</label>
    //                 </div>`
    //                 ;

    //     }
    //     else if (EmailNull===('@') <= 0) {
    //         fields[i].innerHTML = `
    //         <div class="md-form form-sm text-danger">
    //         <i class="fa fa-envelope prefix text-danger"></i>
    //         <input type="text" id="Email" name="Email" class=" text-danger my-field form-control form-control-sm">
    //         <label for="inputSMEx" class="text-danger">Email</label>
    //         </div>
    //         `

    //     }


    // }