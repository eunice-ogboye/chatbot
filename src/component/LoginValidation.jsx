function Validation(values){
    let error = {}
   
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if(values.name === ""){
        error.name = "Field is required"
    } else {
        error.name = ""
    }
    return error;
}
export default Validation;