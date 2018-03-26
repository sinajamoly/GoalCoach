import React,{Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from "../firebase";

class SignIn extends Component{

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

    signIn(){
        console.log(this.state);
        const {email,password}=this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
            .catch(error=>{
                console.log('error',error);
                this.setState({error:error})
            })
    }

    render(){
        return(
            <div className="container">
                <div className="form-inline">
                    <h2>Sign In</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder='email' onChange={event=>this.setState({email:event.target.value})}/>
                        <input type="password" className="form-control" placeholder='password' onChange={event=>this.setState({password:event.target.value})}/>
                        <button className="btn btn-primary my-4" onClick={()=>this.signIn()}>Sign In</button>
                    </div>
                    <div className="bg-warning"><p>{this.state.error.message}</p></div>
                    <div className=""><Link to={'/signup'}>Sign Up Instead</Link></div>
                </div>
            </div>
        );
    }
}
export default SignIn;