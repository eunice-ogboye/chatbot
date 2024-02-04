function Validation(values){
    let error = {}
    const name_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if(values.email === ""){
        error.name = "Field is required"
    }
    else if(!name_pattern.test(values.email)){
        error.name = "name not valid"
    } else {
        error.name = ""
    }
    return error;
}
export default Validation;