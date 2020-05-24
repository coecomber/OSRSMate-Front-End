import React from 'react'
import { Link } from 'react-router-dom'

const SkillsList = ({highscore}) => {
    return(
        <div className="post-list section">
            { highscore && highscore.map(highscore => {
                return (
                    <Link to={'/post/' + highscore.id} key={highscore.id}>
                    </Link>
                )
            })}
        </div>
    )
}

export default SkillsList