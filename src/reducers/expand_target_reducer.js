
export default function (state = false, action){

  switch (action.type){
    case "EXPAND":
      return !action.payload;
  }
  return state;

}
