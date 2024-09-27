import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const questionnaireSlice = createSlice({
    name: 'questionnaires',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addItem, updateItem, deleteItem } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
