import React, { useEffect,useState } from 'react';
import {
  Button,
  IconButton,
  Tooltip,
  makeStyles,
  Theme,
   TextField,
   CircularProgress
} from  "@material-ui/core";
//import { PhotoCamera } from "@material-ui/icons";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    
    width: '100%', 
    marginLeft:'10vw'
  },   
  input: {
    alignItems: 'center'
  },
  faceImage: {
    color: theme.palette.primary.light,
  },
  upload:{
       
      margin: 42,
      marginRight:0,
  }
}));

 

export default function UploadFile  ()  {
    const classes = useStyles();
    const [selectedFile, setSelectedFile] =useState(null);
    const [fileName, setFileName]= useState(null)
    const [uploadProgress, setUploadProgress]=useState()
      const handleCapture = ({ target }) => {
         
          setSelectedFile(target.files[0]);
          setFileName(target.files[0].name)
        };
        const handleSubmit=(event)=>{
            event.preventDefault()
            const formData= new FormData();
            formData.append('image', selectedFile);

            const options={
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                onUploadProgress:(ProgressEvent)=>{
                    const{loaded, total}=ProgressEvent;
                    let percent=Math.floor(((loaded/1000)*100)/(total/1000));
                    
                    if (percent<100){
                        setUploadProgress(percent)
                    }
                }
            };
            axios
            .post(
                
                ' http://localhost:5000/v1/upload',
                
                formData,
                options
            )
            .then(res =>{
                console.log(res.data.message);
               setUploadProgress(100 );
                
            })
            .catch(err=>{
                console.log(err);
                setUploadProgress(0);
            });

        };
  return (
    <>
       
        <div className={classes.root}>
            <div className={classes.input}> 
          <label htmlFor="image">{ } 
          {selectedFile ? (
            <span>You have selected a file - {fileName}</span>
            ) : (
             <span>Choose a file...</span>
                )}
          <br />
          <input
            id="image"
            name="image"
            style={{ display: 'none' }}
            type="file"
            onChange={handleCapture}
          />
          <Button
             variant="contained"
             color="primary"
             component="span"
           >
               Choose a image:
           </Button>

           </label>
           <Button
                variant="contained"
                 color="primary"
                 className={classes.upload}
                disabled={!selectedFile}
                onClick={handleSubmit}
                >
                    Upload
            </Button>
             
            </div>
            <div> 
            <CircularProgress variant="determinate" value={uploadProgress} />
            </div>
        </div>
       
    
  
  </>
)}