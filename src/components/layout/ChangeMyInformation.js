import TextField from '@material-ui/core/TextField';
import React, { Fragment ,Text, View, TextInput, TouchableHighlight} from "react";
import ReactDOM from "react-dom";
import Media from 'react-media';
import styled from 'styled-components';
import MyProducts from "./MyProducts";
import "./styles.css";
import ValidationComponent from 'react-native-form-validator';

import Select from 'react-select';
import { display } from '@material-ui/system';
import Carousel from 'react-bootstrap/Carousel'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';


const optionsFirst = [
  { value: 'سيارات', label: 'سيارات' },
  { value: 'منازل ', label: 'منازل ' },
  { value: 'الكترونيات', label: 'الكترونيات' },
  { value: 'اثاث منزلي', label: 'اثاث منزلي' },
];

const optionsSecond = [
  { value: 'سيارات صغيرة', label: 'سيارات صغيرة' },
  { value: 'شاحنات', label: 'شاحنات' },
  { value: 'فيلا', label: 'فيلا' },
  { value: 'ستيديو', label: ' ستيديو' },
  { value: 'لمطل', label: 'لمطل' },
];

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
width:80%;
height:60%;
margin-left:10%;
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
  justify-content:center;
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

class ChangeMyInformation  extends ValidationComponent{
    NumberValide = "true";
    NameValide = "true";
    PasswordValide = "true";
    ConfirmePasswordValide = "true";
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }

  handleChangePic = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
      
    })
  }
  mySubmitHandler = (event) => {
    let err = '';
    event.preventDefault();
    let age = this.state.age;
    if (this.NameValide === "true" && this.NumberValide==="true" && this.PasswordValide==="true" && this.ConfirmePasswordValide==="true") {
      err = '';
      this.setState({ errormessage: err });
      alert("تمت العملية بنجاح");
    //  console.log(this.titleValide);
    //  console.log(this.descriptionValide);
    //  console.log(this.emailValide);
      
    }
    else {
        console.log(this.NameValide);
        console.log(this.NumberValide);
        console.log(this.PasswordValide);
        console.log(this.ConfirmePasswordValide);
      err = <label htmlFor="" style={{ color: "red" }}> تاكد من الخانات التي قمت بتغيرها </label>;
      this.setState({ errormessage: err });
      

      //ConfirmePassword
      // alert("bade");
    }
  }

  myBlurHandler= (event) => {
    var name = event.target.name;
    var val = event.target.value;
    let err = '';
    if (name === "number") {
        
        if (val.length ===0) {
          err ="";
          this.NumberValide = "true";
        }
        else if(val.length ===8){
          this.NumberValide = "true";

        }
        else{
            err = <label htmlFor="" style={{ color: "red" }}>يرجى ادخال رقم صحيح</label>;
            this.NameValide = "false";     
        }
        
        this.setState({ errormessageNumber: err });
        this.setState({ [name]: val });
      }
    else if (name === "name") {
        this.NameValide = "true";
        if (val.length ===0) {
          err ="";
          this.NameValide = "true";
        }
        
        this.setState({ errormessagename: err });
        this.setState({ [name]: val });
      }

     

      else if (name === "Password") {
        
        if (val.length ===0) {
          err ="";
          this.PasswordValide = "true";
        }else if(val.length<6){
            err = <label htmlFor="" style={{ color: "red" }}>يرجى ادخال كلمة سر صحيح</label>;
            this.PasswordValide = "false";     
        }
        this.setState({ errormessagePassword: err });
        this.setState({ [name]: val });
      }
      
  }

  myChangeHandler = (event) => {
    var name = event.target.name;
    var val = event.target.value;
    let err = '';
    
     if (name === "Password") {
        this.PasswordValide = "true";
        if (val.length < 6) {
          err = <label htmlFor="" style={{ color: "red" }}> يرجى ادخال كلمة سر صحيح </label>;
          this.PasswordValide = "false";
        }
        else {
            err = '';
          this.PasswordValide = "true";
        }
        this.setState({ errormessagePassword: err });
        this.setState({ [name]: val });
      }

      
      else if (name === "ConfirmePassword") {
        if(this.state.Password.length===0){
          err = <label htmlFor="" style={{ color: "red" }}>ادخل كلمة السر اولا </label>;
          this.ConfirmePasswordValide = "false";
        }
      else  if (val != this.state.Password) {
          err = <label htmlFor="" style={{ color: "red" }}>كلمة السر غير متطابقة </label>;
          this.ConfirmePasswordValide = "false";
        }
         
        else{
            this.ConfirmePasswordValide = "true";
        }
        this.setState({ errormessageConfirmePassword: err });
        this.setState({ [name]: val });
      }
  
      else if (name === "number") {
        this.NumberValide = "true";
        if (val.length < 8 || !Number(val)) {
          err = <label htmlFor="" style={{ color: "red" }}> يرجى ادخال رقم صحيح </label>;
          this.NumberValide = "false";
        }
        else if(val.length===0){
            err = '';
            this.NumberValide = "true";
          }
        else {
            err = '';
          this.NumberValide = "true";
        }
        this.setState({ errormessageNumber: err });
        this.setState({ [name]: val });
      }
  }

  Frame = props => {
    const { selectedOptionSecond } = this.state;
    const { selectedOptionFirst } = this.state;
    return (
      <Div >
        <h1>
        بإمكانك تغير معلومة او أكثر
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
                  {this.state.errormessagename}
                </li>
                <li>

                  <TextField
                    placeholder="رقم الهاتف"
                    type='text'
                    name='number'
                    variant="outlined"
                    onChange={this.myChangeHandler}
                    onBlur={this.myBlurHandler}
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
                    onBlur={this.myBlurHandler}
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
                 <label style={{color: "white",padding: "4px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }}>
                      <input type="file" name="pic" accept="image/*" onChange={this.handleChangePic} />
                      اضافة صورة للحساب
                        </label>
                </li>

                <li>
                  {this.state.errormessagetitle}
                </li>


                <li>
                  <input style={{color:"white",padding:"10px", height:"40px",borderRadius:'4px',backgroundColor: '#232f3f' ,border:"none"}} type="submit" value="تحديث" onClick={this.mySubmitHandler} />
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
      <div className="form-input">
        <div>
          <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <Fragment>
                {matches.small &&
               <this.Frame class={"div-root-mobile"} />
                }
                {matches.medium && 
                <this.Frame class={"div-root-desktop"} />
                }
                {matches.large &&
                        <this.Frame class={"div-root-desktop"} />
                      }
              </Fragment>
            )}
          </Media>
        </div>

      </div>
    </>
    );
  }
}

export default ChangeMyInformation;

