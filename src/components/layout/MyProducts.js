import TextField from '@material-ui/core/TextField';
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Media from 'react-media';
import styled from 'styled-components';
import MyProducts from "./MyProducts";
import "./styles.css";
const Div = styled.div`
width:100%;

h1{
  text-align:center;
  font-size:22px;
    color:#f2a847;
} 
`;
//DivMobil
const DivForm = styled.div`

.div-root-mobile,.div-root-desktop{
border-radius:25px;
border-style: solid;
border-color: #232f3f;
list-style-type:none;

}
.div-root-mobile{
width:100%;
height:500px;
list-style-type:none;

}
.div-root-desktop{
width:33%;
margin-left:33%;
height:60%;
margin-top:12px;
}


.form{
  display:flex;
  
  flex-direction:column;
}

.form h6{
  margin:0;
}
.form li{
  padding-top:3%;
  list-style-type:none;
  }
`;


class MyProduct  extends React.Component {
  NumberValide = "false";
  NameValide = "false";
  PasswordValide = "false";
  ConfirmePasswordValide = "false";
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    let err = '';
    event.preventDefault();
    let age = this.state.age;
    if (this.PasswordValide === "true" && this.NameValide === "true" && this.NumberValide === "true" && this.ConfirmePasswordValide === "true") {
      err = '';
     this.setState({ errormessage: err });

      //alert("good");
      //  console.log(this.state.name);
      //  console.log(this.state.Password);
      //  console.log(this.state.number);
      //  console.log(this.state.ConfirmePassword);
    }
    else {
     err = <label htmlFor="" style={{ color: "red" }}> كل الخانات ضرورية</label>;
     this.setState({ errormessage: err });
      console.log(this.NumberValide);
      console.log(this.NameValide);
      console.log(this.PasswordValide);
      console.log(this.ConfirmePasswordValide);
      //ConfirmePassword
      // alert("bade");
    }
  }


  myChangeHandler = (event) => {
    var name = event.target.name;
    var val = event.target.value;
    let err = '';
    if (name === "name") {
      this.NameValide = "false";
      if (val != "" && Number(val)) {
        err = <label htmlFor="" style={{ color: "red" }}> يرجى ادخال اسم صحيح </label>;
      }
      else if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> الإسم ضروري </label>;
      }
      else {
        this.NameValide = "true";
      }
      this.setState({ errormessageName: err });
      this.setState({ [name]: val });
    }

    else if (name === "Password") {
      this.PasswordValide = "false";
      if (val.length < 6) {
        err = <label htmlFor="" style={{ color: "red" }}> يرجى ادخال كلمة سر صحيح </label>;
      }
      else if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> كلمة السر ضرورية </label>;
      }
      else {
        this.PasswordValide = "true";
      }
      this.setState({ errormessagePassword: err });
      this.setState({ [name]: val });
    }

    else if (name === "ConfirmePassword") {
      this.ConfirmePasswordValide = "false";
      if (val != this.state.Password) {
        err = <label htmlFor="" style={{ color: "red" }}>كلمة السر غير متطابقة </label>;
      }
      else if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> يرجى تأكيد كلمة السر</label>;
      }
      else {
        this.ConfirmePasswordValide = "true";
      }
      this.setState({ errormessageConfirmePassword: err });
      this.setState({ [name]: val });
    }

    else if (name === "number") {
      this.NumberValide = "false";
      if (val.length < 8 || !Number(val)) {
        err = <label htmlFor="" style={{ color: "red" }}> يرجى ادخال رقم صحيح </label>;
      }
      else if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> رقم ضروري </label>;
      }


      else {
        this.NumberValide = "true";
      }
      this.setState({ errormessageNumber: err });
      this.setState({ [name]: val });
    }


  }

  Frame = props => {
    return (
      <Div >

        <h1>
        نتشرف بإنضمامك الينا
        </h1>

        <DivForm >
          <div className={props.class} >

            <form

              className="form-inside-input "
              
              onSubmit={this.mySubmitHandler}
              noValidate
            >


              <ul className='form' align="center">
                
                <li>
                  <TextField
                    placeholder="الإسم و اللقب"
                    type='text'
                    name='name'
                    variant="outlined"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}
                  />
                </li>
                <li>
                  {this.state.errormessageName}
                </li>

                <li>

                  <TextField
                    placeholder="رقم الهاتف"
                    type='text'
                    name='number'
                    variant="outlined"
                    onChange={this.myChangeHandler}
                
                    onBlur={this.myChangeHandler}
                  />
                </li>
                <li>
                  {this.state.errormessageNumber}
                </li>


              
                <li>
                  <TextField
                    placeholder="كلمة السر"
                    type='text'
                    name='Password'
                    variant="outlined"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}
                  />
                </li>
                <li>
                  {this.state.errormessagePassword}
                </li>
            
                <li>
                  <TextField
                    placeholder="تأكيد كلمة السر"
                    type='text'
                    name='ConfirmePassword'
                    variant="outlined"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}
                  />
                </li>
                <li>
                  {this.state.errormessageConfirmePassword}
                </li>

                <li>
                  <h6>بضغط على انشاء حساب فأنت توافق على  <a href="url" style={{color:"#f2a847"}}> سياسة الموقع</a> </h6>
                </li>

                <li>
                  <input style={{color:"white",padding:"10px", height:"40px",borderRadius:'4px',backgroundColor: '#232f3f' ,border:"none"}} type="submit" value="انشاء حساب" onClick={this.mySubmitHandler} />
                </li>

                <li>
                  {this.state.errormessage}
                </li>


              </ul>

            </form>

          </div>
        </DivForm>

      </Div>
    )

  }

  render() {

    return (
      <>
      <this.Frame class={"div-root-desktop"} />
      </>
      )
      }

}
export default MyProduct;

