import authReducer from './authReducer'
import postReducer from './postReducer'
import highscoreReducer from './highscoreReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    highscore: highscoreReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer    
});

export default rootReducer