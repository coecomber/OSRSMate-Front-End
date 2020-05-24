const initState = {
    highscore: 
        {
            "id": 1,
            "name": "Grey Sheep",
            "overallExp": 237635060,
            "attackExp": 13035716,
            "defenceExp": 5877111,
            "strengthExp": 13446153,
            "hitpointsExp": 19330848,
            "rangedExp": 22064057,
            "prayerExp": 3648476,
            "magicExp": 12509310,
            "cookingExp": 13064268,
            "woodcuttingExp": 13041743,
            "fletchingExp": 12608059,
            "fishingExp": 13035928,
            "firemakingExp": 13049104,
            "craftingExp": 6639004,
            "smithingExp": 4645807,
            "miningExp": 8025322,
            "herbloreExp": 6369594,
            "agilityExp": 3922024,
            "thievingExp": 13114548,
            "slayerExp": 11152752,
            "farmingExp": 7849842,
            "runecraftExp": 4187380,
            "hunterExp": 13041563,
            "constructionExp": 3976451
          }
    
}

const highscoreReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_HIGHSCORE':
            state.highscore = action.response
            console.log('state before returning is')
            console.log(state)
            return {
                ...state
            }
        case 'GET_HIGHSCORE_ERROR':
            console.log('Trying to get all highscores failed for the following user: ', action.username)
            return state;
        case 'ADD_HIGHSCORE':
            console.log('Added new highscore', action.post);
            return state;
        case 'ADD_HIGHSCORE_ERROR':
            console.log('ADD_HIGHSCORE_ERROR ', action.err)
            return state;
        default:
            return state;
    }
}

export default highscoreReducer




// import {FETCH_HIGHSCORES_PENDING, FETCH_HIGHSCORES_SUCCESS, FETCH_HIGHSCORES_ERROR} from '../actions/highscoreActions'

// const initialState = {
//     pending: false,
//     highscores: [],
//     error: null
// }

// export function highscoreReducer(state = initialState, action) {
//     switch(action.type){
//         case FETCH_HIGHSCORES_PENDING:
//             console.log('FETCH_HIGHSCORES_PENDING')
//             return {
//                 ...state,
//                 pending: true
//             }
//         case FETCH_HIGHSCORES_SUCCESS:
//             console.log('FETCH_HIGHSCORES_SUCCESS')
//             return {
//                 ...state,
//                 pending: false,
//                 highscores: action.highscores
//             }
//         case FETCH_HIGHSCORES_ERROR:
//             console.log('FETCH_HIGHSCORES_ERROR ', action.err)
//             return {
//                 ...state,
//                 pending: false,
//                 error: action.err,
//             }
//         default:
//             return state
//     }
// }

// export const getHighscores = state => {
//     console.log(state.highscores)
// }
// export const getHighscoresPending = state => state.pending;
// export const getHighscoresError = state => state.error;