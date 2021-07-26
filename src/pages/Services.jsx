import React, {useState} from 'react'
import Appbar from '../reuseableComponent/Appbar'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormHelperText from '@material-ui/core/FormHelperText';
import '../pages/style.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60ch',
  
      },
    },
  }));

export default function Services() {
    const classes = useStyles();
    const [outputText, setoutputT] = useState(null)

    const schema = yup.object().shape({
      inputText: yup.string().required("This field is required"),
        
      })
    
      const formik = useFormik(
        {
          initialValues: {
            inputText: "",
            
            
          },
          validationSchema: schema,
          onSubmit: (data) => {
            console.log(data)
            axios.post('http://127.0.0.1:8000/api/detect/', data).then(res => {
              console.log(res)
              setoutputT(res.data.outputText)
            }).catch(err => {
              console.log(err)
            })
          }
        }
      )

  return (
    <div>
      <Appbar></Appbar> 
      <center>
      
      <div className="outer-div">
         
      <div className="sample">
      <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
    
<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
<FormHelperText id="outlined-weight-helper-text" style={{fontSize:18}}>Enter Your Question</FormHelperText>
          <OutlinedInput
            id="questionField"
            aria-describedby="outlined-weight-helper-text"
            name="inputText"
            values={formik.values.inputText}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(formik.touched.inputText && formik.errors.inputText) ? true : false}
            helperText={(formik.touched.inputText && formik.errors.inputText) ? formik.errors.questionField : ""}
           style={{width:'600px'}}
          />
          
        </FormControl>
            <br /><br />
             <Button variant="contained" color="primary" id="button" type="submit">
              Submit
            </Button>
            <br></br><br></br><br></br><br></br>
            </form>
            <div id="output">
              <h1>Output Label</h1>
              <h2 style={{color:'#7400b8'}}>{outputText ? outputText[0]:""}</h2>
            </div>
            </div>
         
      </div>
      </center>
    </div>

  )
}