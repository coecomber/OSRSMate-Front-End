export const getHighscoresByUsername = (username) => {
    return (dispatch, { getFirebase, getFirestore }) => {
        //Gets stats of player 
        fetch('http://217.101.44.31:8090/api/public/highscores/getUserByUsername/' + username)
        .then(() => {
            dispatch({ type: 'GET_STATS', username })
        }).catch((err) => {
            dispatch({ type: 'GET_HIGHSCORE_ERROR', err });
        })
    }
}


// export const FETCH_HIGHSCORES_PENDING = 'FETCH_HIGHSCORES_PENDING';
// export const FETCH_HIGHSCORES_SUCCESS = 'FETCH_HIGHSCORES_SUCCESS';
// export const FETCH_HIGHSCORES_ERROR = 'FETCH_HIGHSCORES_ERROR';

// // eslint-disable-next-line
// export function fetchHighscoresPending() {
//     return {
//         type: FETCH_HIGHSCORES_PENDING
//     }
// }

// // eslint-disable-next-line
// export function fetchHighscoresSuccess(highscores) {
//     return {
//         type: FETCH_HIGHSCORES_SUCCESS,
//         highscores: highscores
//     }
// }

// // eslint-disable-next-line
// export default function fetchHighscoresError(error) {
//     return {
//         type: FETCH_HIGHSCORES_ERROR,
//         error: error
//     }
// }