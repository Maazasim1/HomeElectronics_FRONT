import api from './api';


    
    const baseurl = "http://0.0.0.0:5000/api/";

export var TableString={StringOfTable:""};

export const ACTION_TYPES = {
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE :'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

export const fetchall = (Table=TableString.StringOfTable) => dispatch => {
    api.pos(baseurl,Table).fetchAll()
    .then(response => {
            console.log(response)
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload:response.data
            })
            
        }
    )
    .catch(err=>console.log(err))
   
}
export const create = (data,onSuccess,Table=TableString.StringOfTable) => dispatch => {
    
    api.pos(baseurl,Table).create(data)
    .then(response=>{
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload:response.data
        })
        onSuccess()
    })
    .catch(err=>console.log(err));
}

export const update = (data,id,onSuccess,Table) => dispatch => {
    api.pos(baseurl,Table).update(id,data,Table)
    .then(response=>{
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload:{id,...data}
        })
        onSuccess()
    })
    .catch(err=>console.log(err))
}

export const Delete = (id,onSuccess,Table) => dispatch => {
    api.pos(baseurl,Table).delete(id)
    .then(response=>{
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload:id 
        })
        onSuccess()
    })
    .catch(err=>console.log(err))
}