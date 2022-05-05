const initialData = {
  list: [],
};

const reducerData = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_DATA":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_WISHLIST":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "Delete_All":
      const secondList = state.list.filter((elem) => elem.id === action.id);

      return {
        ...state,
        list: secondList,
      };

    default:
      return state;
  }
};

export default reducerData;
