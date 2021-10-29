import React from 'react';
import './Abstract.scss'

const Abstract = () => {
    return (
        <div className="mx-auto w-full flex flex-col border-b border-solid border-current md:flex-row">
            <div className="w-full md:w-7/12 border-b md:border-b-0 md:border-r border-solid border-current">
                <p className="text-extralight pt-10 pb-10 pr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="w-full md:w-5/12 flex justify-between">
                <ul className="text-extralight p-10 flex flex-col">
                    <li className="mb-3">- Html</li>
                    <li className="mb-3">- css</li>
                    <li className="mb-3">- SASS</li>
                    <li>- JS</li>
                </ul>
                <ul className="text-extralight p-10 flex flex-col">
                    <li className="mb-3">- Html</li>
                    <li className="mb-3">- css</li>
                    <li className="mb-3">- SASS</li>
                    <li>- JS</li>
                </ul>
                <ul className="text-extralight p-10 flex flex-col">
                    <li className="mb-3">- Html</li>
                    <li className="mb-3">- css</li>
                    <li className="mb-3">- SASS</li>
                    <li>- JS</li>
                </ul>
            </div>
        </div>
    );
};


export default Abstract;