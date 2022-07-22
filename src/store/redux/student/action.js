import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'


export const getAllStudents = createAsyncThunk('user/students', async ()=>{
    try{
        const response = await axios.get('https://attendancefinger.herokuapp.com/students')
        console.log(response.data)
    } catch(e){
       console.log(e)
    }
})
 
