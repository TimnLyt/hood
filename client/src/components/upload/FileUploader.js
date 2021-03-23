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
import { Redirect } from 'react-router';
import uploadFile from './FileUpload'
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

 //old

export default function FileUploader  (props)  {
    const classes = useStyles();
    const [selectedFile, setSelectedFile] =useState(null);
    const [fileName, setFileName]= useState(null)
    const [uploadProgress, setUploadProgress]=useState()
    const [error, setError] = useState(null);
    const [success, setSuccess]= useState()
    const [file, setFile]=useState(null)
    const handleCapture = ({ target }) => {
         
          setSelectedFile(target.files[0]);
          setFileName(target.files[0].name)
        };
        const progressUpdater = (event) => {
            setUploadProgress(Math.round((100 * event.loaded)) / event.total);
          };

          const upload = () => {
             
            if (selectedFile) {
                uploadFile('image', selectedFile, progressUpdater)
                .then((response) => {
                  console.log(response.data.image);
                  setFile(response.data.image);
                  props.refreshFunction(response.data.image)
                  setSuccess(true);
                })
                .catch((err) => {
                  setError(err);
                  setUploadProgress(0);
                });
            }
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
                        onClick={upload}
                        >
                            Upload
                    </Button>
                     
                    </div>
                    <div> 
                    <CircularProgress variant="determinate" value={uploadProgress} />
                    { error ? <div> Something went wrong! </div> : null}
                    </div>
                </div>
               
            
          
          </>
)}