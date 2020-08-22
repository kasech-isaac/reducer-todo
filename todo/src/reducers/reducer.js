export const ADD_TODO = "ADD_TODO";
export const TOGGLE= "TOGGLE";
export const CLEAR_COMPLETED="CLEAR_COMPLETED";


export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]


export const TodoReducer=(state,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, {item: action.payload, completed: false, id: Date.now()}];

        case CLEAR_COMPLETED:
        return  state.filter(item => {
          return !item.completed;

            })
        
        case TOGGLE:
            console.log("Toggle", action.payload);
            return state.map((item) => {
              if (item.id === action.payload) {
                console.log("success");
                return { ...item, completed: !item.completed };
              } else return item;
             
            })
        }
    }

