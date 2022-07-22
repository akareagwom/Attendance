import {configureStore} from '@reduxjs/toolkit';
import studentSlice from './student/index';

export default configureStore({
    reducer:{
        student: studentSlice
    }
})
