import axios from 'axios';

const getData=async ()=>
    {    
      const data=await axios.get('https://jsonblob.com/api/jsonBlob/1134448167713890304');
    
      return data;
    }   
  export default getData;
  
  