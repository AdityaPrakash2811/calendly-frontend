
/*export const book = () => {
    return{
        type:'BOOK'
    }
}*/
import axios from 'axios';


export const book = ( name,email,phno,startDate ) => {
    console.log(name,email,phno,startDate);
    const tempStart=startDate;
    return dispatch => {
      dispatch(addBookStarted());
  
      axios
        .post(`http://localhost:5000/meetings`, {
          doc_id:"id_1",
          name:name,
          email:email,
          phno:phno,
          start_date:tempStart.setMinutes(tempStart.getMinutes()+330),
          end_date:tempStart.setMinutes(tempStart.getMinutes()+60)
        })
        .then(res => {
          console.log(res.data.status);
          if(res.data.status!==405){
            dispatch(addBookSuccess(res.data));
          }
          else{
            dispatch(addBookFailure(res.data))
          }
        })
        .catch(err => {
          console.log(err.data);
          dispatch(addBookFailure(err.message));
        });
    };
  };
  
  const addBookSuccess = user => ({
    type: 'ADD_BOOK_SUCCESS',
    payload: {
      ...user
    }
  });

  const addBookStarted = () => ({
    type: 'ADD_BOOK_STARTED'
  });
  
  const addBookFailure = error => ({
    type: 'ADD_BOOK_FAILURE',
    payload: {
      error
    }
  });

  /*const addBookSuccess = user => {
    return{
        type:'ADD_BOOK_SUCCESS',
        payload:{...user}
    }
}

const addBookStarted = () => {
    return{
        type:'ADD_BOOK_STARTED'
    }
}
  
const addBookFailure = error => {
    return{
        type:'ADD_BOOK_FAILURE',
        payload:{error}
    }
}*/







