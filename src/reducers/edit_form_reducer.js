
export default function (state = false, action){

  switch (action.type){
    case "SHOW_CLOSE":
      return !action.payload;
  }
  return state;

}
