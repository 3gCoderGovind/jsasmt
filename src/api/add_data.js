import axios from 'axios';

const addData=async (data)=>
    {   
         const obj=await axios.post('http://localhost:3001/user/add',data);
          return ;
    }   

  export {addData};  