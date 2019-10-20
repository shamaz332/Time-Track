/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import logo from './img/logo-login.png'
//componente del login
class LoginForm extends Component {
    constructor(props) {
        super(props)
        //estado inicial de los inputs(vacios)
        this.state = {
             email: '',
             password: '',
             errors: {}
        };
    };
    //asigno el valor de los inputs al campo correspondiente del dato
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    //Procesado de los datos para el ingreso del usuario
    /**TODO: EN ESTA PARTE VA EL PROCESADO CON EL BACKEND PAAR EL MANEJOS DE LOS DATOS */
    handleSubmit = (event) => {
        //esto es solo prueba
        this.validateForm() ? alert('you are logged') : event.preventDefault();
    };
    //valido que los datos ingresados el formulario son correctos
    validateForm() {
        //destructuring para las variables
        const {email, password} = this.state;
        let errors = {},
            formIsValid = true;
            //valido que el campo email no este vacio
        if (email === '') {
            formIsValid = false;
            errors['email'] = "*Ingrese un email";
            }
            //valido que el campo email sea valido
        if (typeof email === 'undefined') {
            //regular expression for email validation
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                formIsValid = false;
                errors['email'] = "*Ingrese un email valido";
                }
            }
            //valido que el campo contraseña no este vacio
        if (password === '') {
            formIsValid = false;
            errors['password'] = "*Ingrese su contraseña";
            }
            //cambio el estado de los errores
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        //destruturing para el manejo de las variables
        const {email, password, errors} = this.state; 
        return (
            <div className="container">
                <div className="container-login">
                    <div className="container-form">
                        <div>
                            <h2 className="fonth2-tittle">Welcome</h2>
                        </div>
                        <div>
                            <img src={logo} alt={"logo"} className="img-login"/>
                        </div>
                        <div className="form-login">
                            <form  onSubmit={this.handleSubmit}>
                                <div className="login-input">
                                    <input type="email" 
                                        name="email" 
                                        placeholder="Email here..." 
                                        className="input" value={email} 
                                        onChange={this.onChange} 
                                        errors={errors.name} />
                                </div>
                                <div className="errorMsg">{errors.email}</div>
                                <div className="login-input">
                                    <input type="password" 
                                        name="password" 
                                        placeholder="Password here..." 
                                        className="input" value={password} 
                                        onChange={this.onChange} 
                                        errors={errors.password}/>
                                </div>
                                <div className="errorMsg">{errors.password}</div>
                                <div className="btn-submit">
                                    <input className="btn-login" type="submit" value="LOGIN"/>
                                </div>
                            </form>
                        </div>

                    </div>
                    
                </div>
              
            </div>
           
        )
    };
};

export default LoginForm;
