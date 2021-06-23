import React from 'react'
import PropTypes from 'prop-types'
import Child from './Child'

const Children = ({postChildren}) => {
    const cardLeft = "ml-auto col-start-1 col-end-5";
    const cardRight = "mr-auto col-start-6 col-end-10"
    const dotLeft = "col-start-5 col-end-6 mr-10 md:mx-auto relative";
    const dotRight = "col-start-5 col-end-6 md:mx-auto relative mr-10";
    return (
        <div class="container">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
            {postChildren.map(post=><div class="flex md:contents">
              <Child className={cardLeft} post={post}/>
              <div class={dotRight}>
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>)}
          </div>
        </div>
    )
}

Children.propTypes = {

}

export default Children
