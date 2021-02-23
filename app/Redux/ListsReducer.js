export const AddToImportantAndUrgent = 'AddToImportantAndUrgent';
export const DeleteFromImportantAndUrgent = 'DeleteFromImportantAndUrgent';

const initialState = {
  ImportantAndUrgent: [],
  ImportantButNotUrgent: [],
  NotImportantButUrgent: [],
  NotImportantAndNotUrgent: [],
};

const ListsReducer = (state = initialState, action) => {
  switch (action.type) {
    // ----------

    case AddToImportantAndUrgent:
      console.log(AddToImportantAndUrgent);
      state.ImportantAndUrgent = [action.newItem, ...state.ImportantAndUrgent];
      return state;

    // ----------

    case DeleteFromImportantAndUrgent:
      state.ImportantAndUrgent = state.ImportantAndUrgent.filter((element) => {
        return element !== action.selectedItem;
      });
      return state;

    default:
      return state;
  }
};

export default ListsReducer;
