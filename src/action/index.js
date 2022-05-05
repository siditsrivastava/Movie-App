/* eslint-disable no-undef */
export const addWishlist = (data) => {
  return {
    type: "ADD_DATA",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteWishlist = (id) => {
  return {
    type: "DELETE_WISHLIST",
    id,
  };
};

export const alldeleteWishlist = (id) => {
  return {
    type: " Delete_All",
    id,
  };
};
