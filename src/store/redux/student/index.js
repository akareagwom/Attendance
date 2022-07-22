import {createSlice} from '@reduxjs/toolkit';
import {rootState} from '.';
import axios from "axios";
export const initialState ={
    student:[]
}

const fetchStudents = async () => {
    try {
        const response = await axios.get("https://attendancefinger.herokuapp.com/students/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const studentSlice = createSlice({
    name:'student',
    initialState,
    reducers: {
        getStudents: (state) => {
            const res = fetchStudents();
            console.log(res);
            // const students = fetchStudents();
            // state.student.push(students);
        },
    }
    // extraReducers:{}
})

export default studentSlice.reducer;
export const { getStudents } = studentSlice.actions;