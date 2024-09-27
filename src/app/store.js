import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../redux/adminSlice';
import inventoryReducer from '../redux/inventorySlice';
import questionnaireReducer from '../redux/questionnaireSlice';

export default configureStore({
    reducer: {
        admins: adminReducer,
        inventory: inventoryReducer,
        questionnaires: questionnaireReducer,
    },
});
