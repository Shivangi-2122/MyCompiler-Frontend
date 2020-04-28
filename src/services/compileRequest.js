import axios from 'axios'

const API_URL = 'https://mycompiler.cfapps.io/uploadFileToS3Bucket'

export default function compileRequest(flag,file,code,language){
    var formData= new FormData();
    if(flag){
        
    formData.append('uploadingFiles',file);
    formData.append('uploadingCode',null);
    }
    else{
       
        formData.append('uploadingFiles',null);
        formData.append('uploadingCode',code);
    }
    formData.append('language',language);
    let axiosConfig = {
        headers: {
            'content-type': 'multipart/form-data'
        }
      };
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
      return axios.post(API_URL,formData,axiosConfig );
}