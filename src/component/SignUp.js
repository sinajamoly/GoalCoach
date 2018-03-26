import React,{Component} from 'react';
import {firebaseApp} from "../firebase";
import {Link} from "react-router";

class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    }

    signUp(){
        console.log(this.state);
        const {email,password}=this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            .catch(error=>{
                console.log('error',error);
                this.setState({error:error})
            })
    }

    render(){
        return(
            <div className="container">
                <div className="form-inline">
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder='email' onChange={event=>this.setState({email:event.target.value})}/>
                        <input type="password" className="form-control" placeholder='password' onChange={event=>this.setState({password:event.target.value})}/>
                        <button className="btn btn-primary my-4" onClick={()=>this.signUp()}>Sign UP</button>
                    </div>
                    <div className="bg-warning"><p>{this.state.error.message}</p></div>
                </div>
                <div className=""><Link to={'/signin'}>SignIn Instead</Link></div>
            </div>
        );
    }
}
export default SignUp;