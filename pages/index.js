import { useState } from "react";
import { DateTime } from "luxon";

import styles from '../styles/Home.module.css'
import RosterSettings from "../components/RosterSettings";

import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import RosterCard from "../components/RosterCard";

/*** 
 
Input:
Room numbers
Duties


Process:

1. MapRoomsToDuty(rooms, duties, number of weeks)
        - map each duty to each room
            - repeat for number of weeks
Output:
Table View of room # assigned to duties each week
*/

// default values
var rooms = [1, 2, 3,5,6, 7, 8, 9, 10, 11, 12]
var duties = ["Disposal_Waste", "Plastic_Waste", "Dishes_and_Surfaces", "Floor_Cleaning", "Metal_and_Glass"]

const headers = ["Week", ...duties]

// global variable to track rooms index of duty assigned
var counter = 0;

function MapRoomsToDuty(rooms, duties) {
    const assignedDuty = new Map();

    // TODO: Provide shuffle capability when rooms.length / duties.length == 2
    duties.forEach(duty => {
        if (counter >= rooms.length) {
            counter = 0;    
        }
        assignedDuty.set(duty, rooms[counter])
        counter++;
    });

    return assignedDuty;
}

function getAssignedDutyby(numberOfWeeks) {
    var i = 0;
    var rosters = []
    
    // assign Duty starts this week onwards -> so get this week info
    // every iteration, get following week's info
    const thisWeekInfo = getThisWeekInfo();
    var weekNumber = thisWeekInfo.weekNumber;
    var year = thisWeekInfo.year;

    while(i != numberOfWeeks) {
        // for every iteration, add to week number and year
        const weekInfo = getWeekInfoBy(weekNumber, year);
        var assignedDuties = Object.fromEntries(MapRoomsToDuty(rooms,duties));

        //console.log(weekInfo);
        //console.log(MapRoomsToDuty(rooms,duties))

        var roster = {
            // weekNumber: weekInfo.weekNumber,
            Week: `${weekInfo.startDateWeek} - ${weekInfo.endDateWeek}`,
            // startDateWeek: weekInfo.startDateWeek,
            // endDateWeek: weekInfo.endDateWeek,
           // assignedDuties: assignedDuties
        }

        // for (let key in assignedDuties) {
        //     //console.log(key, yourobject[key]);
        //     roster.key = assignedDuties[key];
        //   }

          for (let [key, value] of Object.entries(assignedDuties)) {
            // console.log(key, value);
            roster[key] = value;
        }

        rosters.push(roster)


        // Validation
        if (isWeekNumberEqualToWeeksInWeekYear(year, weekNumber)) {
            // reset weeknumber and move to next year
            weekNumber = 1;
            year += 1;
        } else {
            weekNumber+= 1;
        }
        
        i++;
    }
    return rosters;
}

function getThisWeekInfo() {
    // Today Date
    var today = DateTime.now()
    var weekNumber = today.weekNumber
    var year = today.weekYear;
    var startDateWeek =  today.startOf('week').toLocaleString(DateTime.DATE_MED)
    var endDateWeek = today.endOf('week').toLocaleString(DateTime.DATE_MED)

    return {
        today: today,
        weekNumber: weekNumber,
        year: year,
        startDateWeek: startDateWeek,
        endDateWeek: endDateWeek
    }  
}

function getWeekInfoBy(weekNumber, year) {
    const dt = DateTime.fromObject({
        weekNumber: weekNumber,
        weekYear: year
    })
    return {
        weekNumber: dt.weekNumber,
        year: dt.weekYear,
        startDateWeek: dt.startOf('week').toLocaleString(DateTime.DATE_MED),
        endDateWeek: dt.endOf('week').toLocaleString(DateTime.DATE_MED)
    }
}

function isWeekNumberEqualToWeeksInWeekYear(year, weekNumber) {
    return DateTime.local(year).weeksInWeekYear == weekNumber;
}

// button handler
function printTable() {
    var element = document.getElementById("table");
    const doc = new jsPDF("landscape", )
    autoTable(doc, { html: element, theme:'grid' })

    doc.save('roster.pdf')
}


export default function Home() {
    // states
    const [rosters, setRosters] = useState([])
    const [assignedRooms, setAssignedRooms] = useState([])
    const [weeksToGenerateRoster, setWeeksToGenerateRoster] = useState(1)

    // handlers
    function displayTableOptions() {
        return (
            <div>
                <section id="generate-table">
                <p className="py-1 text-lg font-extrabold">Rooms assigned in corridor: {assignedRooms.length == 0 ? "Remember to save settings and/or check rooms" : assignedRooms.join(", ")}</p>


                <div class="mb-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter number of weeks to print for:</label>
                    <input required min={1}  onChange={handleWeeksToGenerateRoster} type="number" id="default-input" placeholder="(4 weeks = ~1 Month)" value={weeksToGenerateRoster} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <p>Note: Randomization only works if there is more rooms assigned than duties. Click on Generate Roster button.</p>
                </div>
                
                <button onClick={generateTable} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Generate Roster</button>

                <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={printTable}>Save Table as PDF</button>
                
            </section>

            <div className={styles.grid}>
                { rosters.map((roster, rosterIndex) => (
                    <RosterCard 
                    key = {roster["Week"]}
                    roster = {roster}
                />
                )) }
            </div>



            <table id="table" className="table-fixed invisible" >
                <thead className="text-white">
                {rosters.map((roster,index) => (
                    <tr key={index} className="bg-teal-400">
                    {headers.map((header,index) => (
                            <th className="p-3 text-center" key={index} >{header.replaceAll("_", " ")}</th>
                        ))
                        }
                    </tr>
                ))}
                </thead>
                <tbody className="">
                    { 
                        rosters.map((roster, rosterIndex) => (
                            <tr key={roster["Week"]} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td className="text-center text-sm border-grey-light border hover:bg-gray-100">{roster["Week"]}</td>
                                <td className="font-bold text-center border-grey-light border hover:bg-gray-100 p-3">{roster["Disposal_Waste"]}</td>
                                <td className="font-bold text-center border-grey-light border hover:bg-gray-100 p-3">{roster["Plastic_Waste"]}</td>
                                <td className="font-bold text-center border-grey-light border hover:bg-gray-100 p-3">{roster["Dishes_and_Surfaces"]}</td>
                                <td className="font-bold text-center border-grey-light border hover:bg-gray-100 p-3">{roster["Floor_Cleaning"]}</td>
                                <td className="font-bold text-center border-grey-light border hover:bg-gray-100 p-3">{roster["Metal_and_Glass"]}</td>
                            </tr>
                         ) )
                    }
                </tbody>
            </table>
            </div>
        )
    }

    function displayRosterSettings() {
        return (
            <section id="settings">
                <RosterSettings OnSaveSettings={getAssignedRooms} />
            </section>
        )
    }

    function generateTable() {
        if(weeksToGenerateRoster <= 0) {
            alert("Why you gotta do that? Stay Positive!")
        } else {
            setRosters(getAssignedDutyby(weeksToGenerateRoster))    
        }
        
    }

    function handleWeeksToGenerateRoster(event) {
        const val = event.target.value;
        setWeeksToGenerateRoster(val);
        
    }

    function getAssignedRooms(data) {
        // console.log(data)
        rooms = data;

        if(data.length == 0) {
            alert("YOU MAD BRO?")
        }

        setAssignedRooms([...data])
        
    }



    return (
        <div className={styles.container}>

            <main className={styles.main}>

                <h1 className={styles.title}>Welcome to <a href="https://www.youtube.com/watch?v=v8_7yPocGPg">Lappis Kitchen Roster Planning</a></h1>
                <p className="py-3 text-center">How it works: <br/>Start by checking room numbers to assign duty.<br/>Followed by inputting # of weeks to generate roster. <br/> Save as PDF.</p>
                {assignedRooms.length > 0 ? displayTableOptions() : displayRosterSettings()}

            </main>


            <footer className={styles.footer}>
                <p>Powered by friendly neighbor from Singapore 🇸🇬
                <a target="_blank" rel="noopener noreferrer" className="py-1" href="https://github.com/pss-coder/nextjs-kitchen-duty-v2"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg></a>
                </p>
               
            </footer>
           
        </div>
    )
}