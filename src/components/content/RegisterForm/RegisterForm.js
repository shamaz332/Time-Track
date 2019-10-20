/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'


class RegisterForm extends Component {
    constructor(props) {
        super(props)
        //Estado inicial de los inputs (vacios)
        this.state = {
            name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {}
        };
    };
    //funcion para resetar el formulario
    resetForm = () => {
        document.getElementById('form').reset();
    };
    //funcion para asignar el valor de los inputs a los datos del estado correspondiente
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    //funcion que procesa los datos 
    //AQUI DEBE IR EL PROCESO DE LOS DATOS CON EL BACKEND
    handleSubmit = (event) => {
        //Valido si los datos son correctamente ingresados
        if(this.validateForm()){
            //procesado de los datos con el backend  
        }
        else{
            //valido si los datos no son ingresados correctamente
            event.preventDefault();
            this.resetForm(); 
        }
    };
     //funcion que valida los datos ingresados en el formulario
     validateForm() {
         //hago un destructuring para manejar mejor las variables 
         const {name, last_name, email, password} = this.state;
            let errors = {},
                formIsValid = true;
            //valido si el campo nombe está vacío
            if (name === '') {
                formIsValid = false;
                errors['name'] = "*Ingrese su nombre";
              }
              //valido si el campo nombre contiene letras 
            if (typeof name === 'undefined') {
                if (name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors['name'] = "*Ingrese solo letras";
                }
            }
            //valido si el campo apellido está vacío
            if (last_name === '') {
                formIsValid = false;
                errors['last_name'] = "*Ingrese su apellido";
              }
              //valido si el campo apellido contiene letras
            if (typeof last_name === 'undefined') {
                if (last_name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors['last_name'] = "*Ingrese solo letras";
                }
            }
            //valido si el campo email está vacío
            if (email === '') {
                formIsValid = false;
                errors['email'] = "*ingrese un email";
              }
            if (typeof email === 'undefined') {
                //regular expression for email validation
                let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(email)) {
                  formIsValid = false;
                  errors['email'] = "*ingrese un email valido";
                }
              }
              //valido si el campo contraseña está vacío
            if (password === '') {
                formIsValid = false;
                errors['password'] = "*Ingrese una contraseña";
            }
            //valido si la contraseña es menor a 8 caracteres
            if(password.length > 1 && password.length < 8){
                formIsValid = false;
                errors['password'] = '*La contraseña debe tener al menos 8 caracteres';
            }
            //cambio el estado del error
            this.setState({
                errors: errors
            });
            return formIsValid;

    };
     
    render() {
        //destructuring para el manejo de las variables
        const {name, last_name, email, password, errors} = this.state; 
        
       
        return (
            <div className="container">
                <div className="container-login">
                    <div className="container-form">
                        <div>
                            <h2 className="fonth2-tittle">Sign Up</h2>
                        </div>
                        
                        <div className="form-login">
                            <form id="form" onSubmit={this.handleSubmit} >
                                <div className="login-input">
                                    <input type="text" 
                                        name="name" 
                                        placeholder="Name here..." 
                                        className="input" value={name} 
                                        onChange={this.onChange} 
                                        errors={errors.name}
                                        />
                                </div>
                                <div className="errorMsg">{errors.name}</div>
                                <div className="login-input">
                                    <input type="text" 
                                        name="last_name" 
                                        placeholder="Last name here..." 
                                        className="input" value={last_name} 
                                        onChange={this.onChange}
                                        errors={errors.last_name}
                                        />
                                </div>
                                <div className="errorMsg">{errors.last_name}</div>
                                <div className="login-input">
                                    <input type="email" 
                                        name="email" 
                                        placeholder="Email here..." 
                                        className="input" 
                                        value={email} 
                                        onChange={this.onChange}
                                        errors={errors.email} 
                                        />
                                </div>
                                <div className="errorMsg">{errors.email}</div>
                                <div className="login-input">
                                    <input type="password" 
                                        name="password" 
                                        placeholder="Password here..." 
                                        className="input" 
                                        value={password} 
                                        onChange={this.onChange}
                                        errors={errors.password} 
                                        />
                                </div>
                                <div className="errorMsg">{errors.password}</div>
                                
                                <div className="btn-submit">
                                    <input className="btn-login" type="submit" value="Sign Up"/>
                                </div>
                            </form>
                        </div>

                    </div>
                    
                </div>
              
            </div>
           
        )
    };
};

export default RegisterForm;
