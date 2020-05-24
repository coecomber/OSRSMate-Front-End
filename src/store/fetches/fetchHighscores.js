// import fetchHighscoresPending from '../actions/highscoreActions'
// import fetchHighscoresSuccess from '../actions/highscoreActions'
// import fetchHighscoresError from '../actions/highscoreActions'

// function fetchHighscores() {
//     return dispatch => {
//         dispatch(fetchHighscoresPending());
//         fetch('http://localhost:8080/api/public/highscores/getUserByUsername/grey%20sheep')
//         .then(res => res.json())
//         .then(res => {
//             if(res.error) {
//                 throw(res.error);
                
//             }
//             dispatch(fetchHighscoresSuccess(res.highscores));
//             return res;
//         })
//         .catch(error => {
//             console.log('PROBLEEM IN fetchHighscores!')
//             dispatch(fetchHighscoresError(error));
//         })
//     }
// }

// export default fetchHighscores;