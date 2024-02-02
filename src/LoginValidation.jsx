function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if(values.email === ""){
        error.email = "Email is required"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password is required"
    }
    // else if(!password_pattern.test(values.password)){
    //     error.password = "Password didn't match"
    // } 
    else {
        error.password = ""
    }
    return error;
}
export default Validation;