import { createSlice } from "@reduxjs/toolkit";

import { 
  requestContactsThunk,
  addContactThunk, 
  deleteContactThunk,
  updateContactThunk,
  clearContactsThunk, } from "./carsOperations";

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsInitialState = { 
  items: [],
  loading: false,
  error: null,
  showModal: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    // select/unselect contact
    toggleCompleted(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id);
      state.items[index].selected = !state.items[index].selected;
    },
  },
  extraReducers: (builder) => 
    builder

      // requestContacts (getAllContacts)
      .addCase(requestContactsThunk.pending, handlePending)
      .addCase(requestContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.map(item => {
          const selected=false;
          return { ...item, selected }
        })
      })
      .addCase(requestContactsThunk.rejected, handleRejected)

      // addContact
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContactThunk.rejected, handleRejected)

      // deleteContact
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContactThunk.rejected, handleRejected)

      // updateContact
      .addCase(updateContactThunk.pending, handlePending)
      .addCase(updateContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index].name = action.payload.name;
        state.items[index].number = action.payload.number;
      })
      .addCase(updateContactThunk.rejected, handleRejected)

      // clearContacts (only front) if user logout
      .addCase(clearContactsThunk.pending, handlePending)
      .addCase(clearContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(clearContactsThunk.rejected, handleRejected)

      // default
      .addDefaultCase((state, action) => {})
});

export const contactsReducer = contactsSlice.reducer;
export const { toggleCompleted, } = contactsSlice.actions;

