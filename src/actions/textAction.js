const set_text =textObj=>{
    return{
      type:"SET_TEXT",
      payload:textObj
    };
};

const clear_text =()=>{
    return{
      type:"CLEAR_TEXT"
    };
};

export default{
    set_text,
    clear_text
}