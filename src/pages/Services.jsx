import React, {useState} from 'react'
import Appbar from '../reuseableComponent/Appbar'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormHelperText from '@material-ui/core/FormHelperText';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import '../pages/style.css'
import { useFormik } from 'formik'
import * as yup from 'yup'


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

    const schema = yup.object().shape({
        questionField: yup.string().required("This field is required"),
        
      })
    
      const formik = useFormik(
        {
          initialValues: {
            questionField: "",
            lable:"",
            
          },
          validationSchema: schema,
          onSubmit: (data) => {
            console.log(data)
          }
        }
      )

  return (
    <div>
      <Appbar></Appbar> 
      <center>
      
      <div className="outer-div">
      <div className='icon-div'>
           
           <MinimizeIcon style={{marginTop:'5px',padding:'5px'}}/>
           <FilterNoneIcon style={{marginTop:'5px'}}/>
            <CloseIcon style={{}}/>
           
         </div>
         
          <div className="sample">
      <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
    
<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
<FormHelperText id="outlined-weight-helper-text" style={{fontSize:18}}>Enter Your Question</FormHelperText>
          <OutlinedInput
            id="questionField"
            aria-describedby="outlined-weight-helper-text"
            name="questionField"
            values={formik.values.questionField}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(formik.touched.questionField && formik.errors.questionField) ? true : false}
            helperText={(formik.touched.questionField && formik.errors.questionField) ? formik.errors.questionField : ""}
           style={{width:'600px'}}
          />
          
        </FormControl>
            <br /><br />
             <Button variant="contained" color="primary" id="button" type="submit">
              Submit
            </Button>
            <br></br><br></br><br></br><br></br>
            <br></br><br></br>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
<FormHelperText id="outlined-weight-helper-text" style={{fontSize:18}}>Lable</FormHelperText>
          <OutlinedInput
            id="questionField"
            aria-describedby="outlined-weight-helper-text"
            name="lable"
            values={formik.values.lable}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(formik.touched.lable && formik.errors.lable) ? true : false}
            helperText={(formik.touched.lable && formik.errors.lable) ? formik.errors.lable: ""}
           style={{width:'400px'}}
          />
          
        </FormControl>
            </form>
            </div>
         
      </div>
      </center>
    </div>

  )
}