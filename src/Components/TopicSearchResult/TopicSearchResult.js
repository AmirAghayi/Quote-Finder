import React from 'react'

function TopicSearchResult(props) {
    return (
        <div>
            <div>{props.quoteInfo.id}</div>
            <div>{props.quoteInfo.author}</div>
            <div>{props.quoteInfo.quotebody}</div>
        </div>
    )
}

export default TopicSearchResult