import React from 'react'
import PropTypes from 'prop-types'
import Child from './Child'

const Children = ({postParent, postChildren}) => {

    const outcomes = {};
    const outcomeDetails = {};
    postParent.extra.possibleOutcomes.forEach(outcome => {
      outcomes[outcome._id] = [];
      outcomeDetails[outcome._id] = outcome;
      postChildren.forEach(child=>{
        if(child.extra.forOutcome===outcome._id)
          outcomes[child.extra.forOutcome]?.push(child);
      })
    });
    console.log(outcomes)
    
    return (
        <div className="container">
          <div
            className="flex flex-row"
          >
            {Object.entries(outcomes).map(([key, children]) => 
              <div>
                <div>key:{outcomeDetails[key].name}</div>
                {children.map(child=>
                  <Child post={child}/>
                  )}
              </div>
              )}
          </div>
        </div>
    )
}

Children.propTypes = {

}

export default Children
