import TextField from '@material-ui/core/TextField';
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Media from 'react-media';
import styled from 'styled-components';
import MyProducts from "./MyProducts";
import "./styles.css";
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

class MyCompte  extends React.Component {
  state = {
    selectedOptionFirst: null,
    selectedOptionSecond: null,

  };
  handleChangeSelectFirst = selectedOptionFirst => {
    this.setState(
      { selectedOptionFirst },
      () => console.log(`Option selected:`, this.state.selectedOptionFirst)
    );
  };

  handleChangeSelectSecond = selectedOptionSecond => {
    this.setState(
      { selectedOptionSecond },
      () => console.log(`Option selected:`, this.state.selectedOptionSecond)
    );
  };

  titleValide = "false";
  descriptionValide = "false";
  prixValide = "false";
  cityValide = "false";
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
    if (this.titleValide === "true" && this.descriptionValide === "true" && this.prixValide === "true" && this.cityValide === "true") {
      err = '';
      this.setState({ errormessage: err });
      // alert("good");
      //  console.log(this.state.name);
      //  console.log(this.state.Password);
      //  console.log(this.state.number);
      //  console.log(this.state.ConfirmePassword);
    }
    else {
      err = <label htmlFor="" style={{ color: "red" }}> كل الخانات ضرورية</label>;
      this.setState({ errormessage: err });
      console.log(this.NumberValide);
      console.log(this.titleValide);

      //ConfirmePassword
      // alert("bade");
    }
  }


  myChangeHandler = (event) => {
    var name = event.target.name;
    var val = event.target.value;
    let err = '';
    if (name === "title") {
      this.titleValide = "false";
      if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> العنوان ضروري </label>;
      }
      else {
        this.titleValide = "true";
      }
      this.setState({ errormessagetitle: err });
      this.setState({ [name]: val });
    }

    else if (name === "description") {
      this.descriptionValide = "false";

      if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}> يرجى وصف المنتج للزبون </label>;
      }
      else {
        this.descriptionValide = "true";
      }
      this.setState({ errormessagedescription: err });
      this.setState({ [name]: val });
    }

    else if (name === "prix") {
      this.prixValide = "false";
      if (!Number(val)) {
        err = <label htmlFor="" style={{ color: "red" }}> ادخل ارقام فقط </label>;
      }
      else {
        this.prixValide = "true";
      }
      this.setState({ errormessageprix: err });
      this.setState({ [name]: val });
    }


    else if (name === "city") {
      this.cityValide = "false";
      if (Number(val)) {
        err = <label htmlFor="" style={{ color: "red" }}>اسم المدينة خاطئ</label>;
      }
      else if (val === "") {
        err = <label htmlFor="" style={{ color: "red" }}>ادخل المدينة</label>;
      }
      else {
        this.cityValide = "true";
      }
      this.setState({ errormessagecity: err });
      this.setState({ [name]: val });
    }


  }

  Frame = props => {
    const { selectedOptionSecond } = this.state;
    const { selectedOptionFirst } = this.state;
    return (
      <Div >
        <h1>
          اضف منتج جديد
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
                  <div class="row">


                    <div class="column">
                      <Select
                        placeholder="التصنيف الفرعي"
                        value={selectedOptionFirst}
                        onChange={this.handleChangeSelectFirst}
                        options={optionsFirst}

                        theme={theme => ({

                          ...theme,
                          borderRadius: 10,

                          colors: {
                            ...theme.colors,
                            primary: 'black',

                          },

                        })}
                      />
                    </div>
                    <div style={{ flex: '0.5' }}>

                    </div>
                    <div class="column">
                      <Select
                        placeholder="التصنيف"

                        value={selectedOptionSecond}
                        onChange={this.handleChangeSelectSecond}
                        options={optionsSecond}

                        theme={theme => ({

                          ...theme,
                          borderRadius: 10,

                          colors: {
                            ...theme.colors,
                            primary: 'black',

                          },

                        })}
                      />
                    </div>
                  </div>
                </li>
                <li>

                  <TextField
                    placeholder="عنوان الإعلان"
                    type='text'
                    name='title'
                    variant="outlined"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}

                  />
                </li>
                <li>
                  {this.state.errormessagetitle}
                </li>

                <li>

                  <TextField
                    placeholder="تفاصيل الإعلان"
                    type='text'
                    name='description'
                    variant="outlined"
                    multiline
                    rows="4"
                    onChange={this.myChangeHandler}
                    onBlur={this.myChangeHandler}

                  />
                </li>
                <li>
                  {this.state.errormessagedescription}
                </li>


                <li>
                  <div class="row">
                    <div class="column">
                      <TextField
                        placeholder="السعر"
                        type='text'
                        name='prix'
                        variant="outlined"
                        onChange={this.myChangeHandler}
                        onBlur={this.myChangeHandler}
                      />
                      <li>
                        {this.state.errormessageprix}
                      </li>

                    </div>

                    <div style={{ flex: '0.5' }}>

                    </div>

                    <div class="column">
                      <TextField
                        placeholder="المدينة"
                        type='text'
                        name='city'
                        variant="outlined"
                        onChange={this.myChangeHandler}
                        onBlur={this.myChangeHandler}

                      />
                      <li>
                        {this.state.errormessagecity}
                      </li>
                    </div>
                  </div>

                </li>



                <li>
                  <h6>يرجى استخدام الأوقية الجديدة</h6>
                </li>
                <br />
                <div class="row">
                  <div class="column">
                    <label style={{ color: "white", padding: "4px", height: "10px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }}>
                      <input type="file" name="pic1" accept="image/*" onChange={this.handleChangePic} />
                      1
                        </label>

                  </div>

                  <div style={{ flex: '0.5' }}></div>

                  <div class="column">
                    <label style={{ color: "white", padding: "4px", height: "10px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }}>
                      <input type="file" name="pic2" accept="image/*" />
                      2
                        </label>

                  </div>

                  <div style={{ flex: '0.5' }}></div>

                  <div class="column">
                    <label style={{ color: "white", padding: "4px", height: "10px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }}>
                      <input type="file" name="pic3" accept="image/*" />
                      3
                        </label>

                  </div>

                  <div style={{ flex: '0.5' }}></div>

                  <div class="column">
                    <label style={{ color: "white", padding: "4px", height: "10px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }}>
                      <input type="file" name="pic4" accept="image/*" />
                      4
                        </label>

                  </div>

                  <div style={{ flex: '0.5' }}></div>

                  <div class="column">
                    <label style={{ color: "white", padding: "4px", height: "10px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }}>
                      <input type="file" name="pic5" accept="image/*" />
                      5
                        </label>

                  </div>

                  <div style={{ flex: '0.5' }}></div>

                  <div class="column">
                    <label style={{ color: "white", padding: "4px", height: "10px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }}>
                      <input type="file" name="pic6" accept="image/*" />
                      6
                        </label>

                  </div>

                  <div style={{ flex: '0.5' }}></div>

                </div>
                <li>
                  <input style={{ color: "white", padding: "10px", height: "40px", borderRadius: '4px', backgroundColor: '#232f3f', border: "none" }} type="submit" value="انشاء حساب" onClick={this.mySubmitHandler} />
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

export default MyCompte;

