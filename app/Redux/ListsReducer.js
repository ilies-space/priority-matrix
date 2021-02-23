export const AddToImportantAndUrgent = 'AddToImportantAndUrgent';
export const DeleteFromImportantAndUrgent = 'DeleteFromImportantAndUrgent';

export const AddToImportantButNotUrgent = 'AddToImportantButNotUrgent';
export const DeleteFromImportantButNotUrgent =
  'DeleteFromImportantButNotUrgent';

const initialState = {
  ImportantAndUrgent: [],
  ImportantButNotUrgent: [],
  NotImportantButUrgent: [],
  NotImportantAndNotUrgent: [],
};

const ListsReducer = (state = initialState, action) => {
  switch (action.type) {
    //ImportantAndUrgent

    case AddToImportantAndUrgent:
      console.log(AddToImportantAndUrgent);
      state.ImportantAndUrgent = [action.newItem, ...state.ImportantAndUrgent];
      return state;

    // ----------

    case DeleteFromImportantAndUrgent:
      console.log(DeleteFromImportantAndUrgent);
      state.ImportantAndUrgent = state.ImportantAndUrgent.filter((element) => {
        return element !== action.selectedItem;
      });
      return state;

    //ImportantButNotUrgent

    case AddToImportantButNotUrgent:
      console.log(AddToImportantButNotUrgent);
      state.ImportantButNotUrgent = [
        action.newItem,
        ...state.ImportantButNotUrgent,
      ];
      return state;

    // ----------

    case DeleteFromImportantButNotUrgent:
      console.log(DeleteFromImportantButNotUrgent);
      state.ImportantButNotUrgent = state.ImportantButNotUrgent.filter(
        (element) => {
          return element !== action.selectedItem;
        },
      );
      return state;

    default:
      return state;
  }
};

export default ListsReducer;
