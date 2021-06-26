import React from 'react'
import PropTypes from 'prop-types'
const getEvenRow =(lable, content) =><div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">{lable}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {content}
    </dd>
</div>

const getOddRow =(lable, content) =><div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">{lable}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {content}
    </dd>
</div>
const Parent = ({post}) => {
    const content = [
        {name:"Title", value:post.title},
        {name:"Author Stake", value:post.stake},
        {name:"Duration", value:post.extra.duration},
        {name:"Description", value:post.content},
    ];
    return (
        <div className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Debate Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Debate details and information.</p>
                </div>
                <div className="border-t border-gray-200">
                <dl>
                    {content.map((item, index)=>index % 2 === 0 ? getEvenRow(item.name, item.value) : getOddRow(item.name, item.value))}
                </dl>
                </div>
            </div>
        </div>
    )
}

Parent.propTypes = {

}

export default Parent
