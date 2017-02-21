export default function(state,index){
  state.splice(index,1)
    return {
            type: "DELETE_COMPANY",
            payload: state
            };
}
