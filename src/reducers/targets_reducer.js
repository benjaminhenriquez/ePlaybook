import { seed_data } from '../seed/seed_data';

export default function (state = seed_data, action){

  switch (action.type){
    case "ADD_COMPANY":
      return [action.payload, ...state];
    case "DELETE_COMPANY":
      return [...action.payload];
    case "EDIT_COMPANY":
      return [...action.payload];
  }
  return state;
}
