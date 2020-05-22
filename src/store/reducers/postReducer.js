const initState = {
    posts: [
        {id: '1', title: 'Loading...', content: 'We are still loading the posts for you!'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('Created new post', action.post);
            return state;
        case 'CREATE_POST_ERROR':
            console.log('CREATE_POST_ERROR ', action.err)
            return state;
        default:
            return state;
    }
}

export default postReducer