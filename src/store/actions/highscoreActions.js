export const getHighscoresByUsername = (username) => {
    return (dispatch) => {
        //Gets stats of player 
        console.log('fetch called')
        fetch('http://217.101.44.31:8090/api/public/highscores/getUserByUsername/' + username)
        .then(response => response.json())
        .then(response => {
            if(response.error) {
                console.log('highscoresActions>getHighscoresByUsername error')
                throw (response.error);
            }

            dispatch({ type: 'GET_HIGHSCORE', response })
        })
        
    }
}