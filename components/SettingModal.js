import React from "react";
import { useState, useEffect } from "react";

export default function SettingModal({assignedRooms, saveAssignedRooms}) {

    const [showModal, setShowModal] = useState(false);


    // Total number of rooms in F10
    const rooms = [1,2,3,4,5,6,7,8,9,10,11,12]

     // checkboxes state
     const [checkedState, setCheckedState] = useState(
        new Array(rooms.length).fill(false).map((item, index) => {
            return assignedRooms.includes(index + 1) ? true : item
        }) 
    );

    function handleOnChange(position) {

        const updatedState = checkedState.map((item, index) => {
            return position == index ? !item : item
        })

        setCheckedState(updatedState);

        if(updatedState[position]) {
            //to add item in arry
            assignedRooms.push((position+1))
            assignedRooms.sort(function (a, b) {
                return a - b;
              });

        } else {
            for (let i = 0; i < assignedRooms.length; i++) {
                if (assignedRooms[i] == (position+1)) {
                    assignedRooms.splice(i,1)
                }
            }
        }
        
    }

    function saveChanges () {
        // save to parent state
        setShowModal(false)
        const copy = [...assignedRooms]
        saveAssignedRooms(copy)

    }


 


  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Settings
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Add List input from here, to allow users to update room #
                        </p>
                        

                    <fieldset>
                    <legend className="sr-only">
                        Rooms
                    </legend>
                        {
                            rooms.map((item, index) => (
                                <div key={index} className="flex items-center mb-4">
                                    <input 
                                        id={`checkbox-${index}`} 
                                        type="checkbox" 
                                        value={item}
                                        checked={checkedState[index]} 
                                        onChange={() => handleOnChange(index)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor={`checkbox-${index}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
                                </div>
                            ))
                        }
                    </fieldset>
                </div>

                
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => saveChanges()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}