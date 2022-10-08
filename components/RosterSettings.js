import { useState } from "react";

export default function RosterSettings({OnSaveSettings}) {
    const defaultRooms = [1,2,3,4,5,6,7,8,9,10,11,12];
    const defaultDuties = ["Disposal_Waste", "Plastic_Waste", "Dishes_and_Surfaces", "Floor_Cleaning", "Metal_and_Glass"]


    const [rosterSettings, setRosterSettings] = useState({
        checkedRoomNums: [],
      });
      
      const handleChange = (e) => {
        // Destructuring
        const { value, checked, name } = e.target;
        const { checkedRoomNums } = rosterSettings;
        // console.log(`${name}: ,${value} is ${checked}`);
         
        // Case 1 : The user checks the box
        if (checked) {
            
        setRosterSettings({
            checkedRoomNums: [...checkedRoomNums,value]
        })

        }
      
        // Case 2  : The user unchecks the box
        else {
            setRosterSettings({
                checkedRoomNums: checkedRoomNums.filter((e) => e !== value),
            });
        }
      };

      function saveChanges() {
        OnSaveSettings(rosterSettings.checkedRoomNums)
      }


        
      return (
        <div className="container my-3">
        <div className="flex">
            
            <div className="mx-3 my-3">
                <p className="text-center text-sm font-bold">Rooms to assign</p>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-pointer">
            
            {defaultRooms.map((item,index) => (
                    <li key={item} className="cursor-pointer w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600  hover:bg-blue-50">
                        <div className="flex items-center pl-3">
                            <input onChange={handleChange} id={item +"-checkbox"} name="room" type="checkbox" value={item} className=" cursor-pointerw-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor={item +"-checkbox"} className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{item}</label>
                        </div>
                    </li>
                ))}
            </ul>
            </div>

            <div className="mx-3 my-3">
                <p className="px-3 py-3 text-center text-sm font-bold">Duties</p>
                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {defaultDuties.map((item,index) => (
                        <li key={item} className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600  hover:bg-blue-50">
                            <div className="flex items-center pl-3">
                                {/* <input id={item +"-checkbox"} type="text" readOnly className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" /> */}
                                <label className="px-3 py-3 ml-2 w-full text-md font-medium text-gray-900 dark:text-gray-300">{item.replaceAll("_", " ")}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>            
        </div>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={saveChanges} >Save Settings</button>


        </div>
      )
}