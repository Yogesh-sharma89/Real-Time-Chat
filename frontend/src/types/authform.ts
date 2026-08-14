interface LoginForm{
    email:string,
    password:string
}

interface SignupForm extends LoginForm{
    firstname:string,
    lastname?:string
}

export type AuthFormProps = LoginForm | SignupForm;