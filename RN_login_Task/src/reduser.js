
const initialState = {
    username: '',
    password: '',
    invalid: '',
    employeData:''


};

const initialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERNAME_CHANGE':
            return {
                ...state,
                username: action.payload
            }
        case 'PASSWORD_CHANGE':
            return {
                ...state,
                password: action.payload
            }
        case 'INVALID':
            return {
                ...state,
                invalid: action.payload
            }
        case 'JSON_API_CALL':
                return {
                    ...state,
                    employeData: action.payload
                }
        
        default:
            return state;
    }

}

export default initialReducer

















// const validate = (values)=>{
//     const errors={};
//     if(!values.email){
//       errors.email ="required"
//     } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)){
//       errors.email = "user name must be less than or equal 20  characters"
//     }
//     if (!values.password){
//       errors.password = 'required'
//     }else if(!values.password.length < 8){
//       errors.password = "password not less than 8 characters"
//     }
//     return errors
//   }