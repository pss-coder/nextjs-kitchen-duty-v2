// ARCHIVE


import { useState } from "react"
import styles from '../styles/Home.module.css'

export default function MultiInputField({isRoomField, isDutyField, onDataRetrieve}){

    var duties = ["Disposal_Waste", "Plastic_Waste", "Dishes_and_Surfaces", "Floor_Cleaning", "Metal_and_Glass"]
    const [inputFields, setInputFields] = useState(isDutyField ? duties: [] )
 
    const addInputField = ()=> {


        setInputFields([...inputFields]);

        console.log(inputFields);

        onDataRetrieve(inputFields);
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }

   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;

    const list = [...inputFields];

    list[index][name] = value;
    setInputFields(list);
    
}
    return(
    
        <div className="container">

            {
                inputFields.map((value, index) => {
                    {/* const {data} = value; */}
                    return (
                        <div key={index} className="flex items-center border-b border-teal-500 py-2">
                            <input
                                onChange={(evnt)=>handleChange(index, evnt)}
                                value={value}
                                name="data"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="text" />
                                
                            <button 
                                onClick={addInputField}
                                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                                type="button">
                                Add Room
                            </button>

                            {
                                (index != inputFields.length)? 
                                    <button 
                                        className="mx-1 flex-shrink-0 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 text-sm border-4 text-white py-1 px-2 rounded" 
                                        onClick={removeInputFields}>
                                    Remove
                                    </button>:''
                            }
                        </div>
                    )
                })
            }

            


            {/* <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {roomNum, emailAddress, salary}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                        <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={roomNum} name="fullName" className="form-control"  placeholder="Full Name" />
                    </div>
                    </div>
                   
                    <div className="col">
                

                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button>:''}
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div> */}

            </div>
        
    )
}
