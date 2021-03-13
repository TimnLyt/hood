import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import UploadFile from './UploadFile';
import {Grid,TextField,FormControl,FormLabel,
    FormControlLabel, 
    InputLabel, 
    Select, 
    Card,
    Button,
    Typography,
    MenuItem,
    Avatar,
    Container,
}from "@material-ui/core";
const validationRules = yup.object({
    title: yup.string('Titile').required('Title required'),
     
    price: yup.number('Price').required('Price required'),
    discription: yup.string('Discription').required('discription required'),
    //condition: yup
     // .string('condition')
     // .oneOf(['New', 'Used', 'Other'], 'Must be a valid condition input')
     // .required('Condition required'),
     
  });

const useStyles = makeStyles((theme) => ({
  can:{
    marginLeft: '15%',
    width: "70%",
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
     
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',  
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
 
 

 function CreatProduct() {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const now = new Date();
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      discription: '',
      //condition: '',
      selling:true,
      date: now.toISOString().substring(0, 10),
       
    },
    validationSchema: validationRules,
    onSubmit: async(values) => {
      console.log('form values ', values);
      //const authToken = await getAccessTokenSilently();
      const requestConfig = {
        url: 'http://localhost:5000/v1/sell',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
           
        },
        data: {
          title: values.title,
          price: values.price,
          date: values.date,
          discription: values.discription,
          //condition: values.condition,
          selling: values.selling,
           
        },
      };

      axios(requestConfig)
        .then(() => {
          setSuccess(true);
        })
        .catch((err) => {
          setError(err);
        });
    },
  });


return (
    <Card component="main" className={classes.can}  
     >
       
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
           
        </Avatar>
        <Typography component="h1" variant="h5">
          Creat Product
        </Typography>
        <form 
        className={classes.form} noValidate
         onSubmit={formik.handleSubmit}
         id="productCreateForm">
          <Grid container spacing={2}>
            <Grid item xs={12}  >
              <TextField
                 
                name="title"
                variant="outlined"
                fullWidth
                label="Title"
                multiline
                rows={2} 
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
              />
            </Grid>
            <Grid item xs={12}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                label="price"
                name="price"
                multiline
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Discription"
                name="discription"
                multiline
                rows={5}
                value={formik.values.discription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
              />
            </Grid>
            <Grid>
              <UploadFile/>
            </Grid>
             
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type="submit"
            form="productCreateForm"
          >
            Post
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
               
               product
              
            </Grid>
          </Grid>
        </form>
      </div>
       
    </Card>
)
 
};
export default withAuthenticationRequired(CreatProduct, {
    returnTo: () => '/sell',
});
