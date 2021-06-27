import React from 'react'
import PropTypes from 'prop-types'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const Collapsible = ({content}) => {
    return (
        <div className="w-full">
      <div className="w-full">
          {content.map(item=>
            <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between px-4 py-2 text-sm font-medium text-left rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                        <span>{item.visibleContent}</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {item.collapsibleContent}
                    </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )}
      </div>
    </div>
    )
}

Collapsible.propTypes = {

}

export default Collapsible
