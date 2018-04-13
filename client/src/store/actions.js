import axios from '../axios-posts';


export const FETCH_POST_POST = 'FETCH_POST_POST';
export const FETCH_GET_POST = 'FETCH_GET_POST';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';


export const fetchPostSucces = (posts) => {
  return {type: FETCH_POST_SUCCESS, posts}
};



export const fetchGetPost = () => {
    console.log('get request')
    return (dispatch) => {
        return axios.get('/posts').then((response) => {
            console.log(response.data)
            dispatch(fetchPostSucces(response.data))
        })
    }
};
export const fetchPostPost = (posts) => {
    return (dispatch, getState) => {
        console.log(posts)
        return axios.post('/posts', posts).then(() => {
            dispatch(fetchGetPost())
        })
    }
};

export const fetchPostError = () => {
    return {type: FETCH_POST_ERROR}
};