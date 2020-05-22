import React from 'react'
import moment from 'moment'

const PostSummary = ({post}) => {
    return(
        <div className="card z-depth-0 post-summary"> 
            <div className="card grey darken-2">
                <div className="card-content grey-text text-darken-4">
                    <span className="card-title">{post.title}</span>
                    <p>Posted by { post.authorFirstName } { post.authorLastName }</p>
                    <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default PostSummary