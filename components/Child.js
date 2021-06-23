import React from 'react'
import PropTypes from 'prop-types'

const Child = ({className, post}) => {
    return (
        <div key={post._id} className={`bg-blue-500 p-4 rounded-xl my-4 shadow-md ${className}`}>
            <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
            <p className="leading-tight text-justify">
                {post.content}
            </p>
        </div>
    )
}

Child.propTypes = {

}

export default Child
