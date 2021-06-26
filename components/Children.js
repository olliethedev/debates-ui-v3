import React from 'react'
import PropTypes from 'prop-types'
import Child from './Child'

const Children = ({postParent, postChildren}) => {

    const outcomes = {};
    const outcomeDetails = {};
    postParent.extra?.possibleOutcomes?.forEach(outcome => {
      outcomes[outcome._id] = [];
      outcomeDetails[outcome._id] = outcome;
      outcomeDetails[outcome._id].total = postParent.outcomeTotals.find((item)=>item._id===outcome._id).total;
      postChildren.forEach(child=>{
        if(child.extra.forOutcome===outcome._id)
          outcomes[child.extra.forOutcome]?.push(child);
      })
    });
    console.log(outcomes)
    
    return (
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-row sm:w-full flex-wrap">
        {Object.entries(outcomes).map(([key, children]) => 

          <div className="w-auto" key={key}>
            <div className="sticky top-16 bg-white p-2 rounded-2xl shadow">Name:{outcomeDetails[key].name}
              Total:{outcomeDetails[key].total}</div>
            {children.map(child=>
              <Child key={child._id} post={child}/>
              )}
          </div>
          )}

          {Object.entries(outcomes).map(([key, children]) => 

            <div className="w-auto" key={key}>
              <div className="sticky  top-16  bg-white p-2 rounded-2xl shadow">Name:{outcomeDetails[key].name}
                Total:{outcomeDetails[key].total}</div>
              {children.map(child=>
                <Child key={child._id} post={child}/>
                )}
            </div>
            )}
      </div>
    )
}

Children.propTypes = {

}

export default Children
