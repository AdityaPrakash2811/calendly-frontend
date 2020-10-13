const iState = {users:[],
                loading:false,
                booked:'',
                error:null}


function reducer(state = iState, action) {
    switch (action.type) {
      case 'ADD_BOOK_STARTED':
        return {
          ...state,
          loading: true,
        };
      case 'ADD_BOOK_SUCCESS':
        return {
          ...state,
          loading: false,
          booked:'book success',
          error: null,
          users: [...state.users, action.payload]
        };
      case 'ADD_BOOK_FAILURE':
        return {
          ...state,
          loading: false,
          booked:'book fail',
          error: action.payload.error
        };
      default:
        return state;
    }
  }

export default reducer



//const iState = {name:"",email:"",phno:"",startDate:new Date()}


/*const reducer = (state=iState, action) => {
    switch(action.type){
        case 'BOOK':
            //return action.payload
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}*/
