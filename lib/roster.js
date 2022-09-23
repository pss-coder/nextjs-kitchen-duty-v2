const dutyRooms = [1, 2, 3, 6, 7, 8, 9, 10, 11, 12]

export const data = [
  {
    "id": "cl8euw1ih00380o6kpnusuy6b",
    "weekNum": 39,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [11, 12, 8, 9, 10]
  },
  {
    "id": "cl8euzi5v00630o6kov2rvnis",
    "weekNum": 40,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [2, 6, 3, 7, 1]
  },
  {
    "id": "cl8euzi5v00640o6k69l7c6lp",
    "weekNum": 41,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [10, 9, 8, 11, 12]
  },
  {
    "id": "cl8euzi5v00650o6ko6exmgq0",
    "weekNum": 42,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [6, 2, 1, 7, 3]
  },
  {
    "id": "cl8euzi5v00660o6kvooqo1uq",
    "weekNum": 43,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [9, 8, 10, 11, 12]
  },
  {
    "id": "cl8euzi5v00670o6kh59u2nxq",
    "weekNum": 44,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [2, 1, 6, 3, 7]
  },
  {
    "id": "cl8euzi5w00680o6kxyyl2boh",
    "weekNum": 45,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [8, 10, 12, 11, 9]
  },
  {
    "id": "cl8euzi5w00690o6kta9dvmqy",
    "weekNum": 46,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [1, 6, 3, 7, 2]
  },
  {
    "id": "cl8euzi5w00700o6kcnqi147n",
    "weekNum": 47,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [11, 9, 8, 12, 10]
  },
  {
    "id": "cl8euzi5w00710o6k6z69qm2g",
    "weekNum": 48,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [7, 3, 1, 6, 2]
  },
  {
    "id": "cl8euzi5w00720o6k0jji9zv5",
    "weekNum": 49,
    "year": 2022,
    "assignedRooms": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12],
    "DutyRooms": [12, 11, 10, 8, 9]
  }
]


export function getAllWeekRosters() {
    return [
        {
            weekNum: 38,
            year: 2022,
            duty: [1, 2, 3, 6, 7]
        }, 
        {
            weekNum: 39,
            year: 2022,
            duty: [8, 9, 10, 11, 12]
        }
    ]
}

export function getThisWeekRoster() {
    return {
        weekNum: 38,
        year: 2022,
        duty: [1, 2, 3, 6, 7]
    }

    // Get this week number + year
    // retrieve duty array <- [].length = 5
}

// empties all duties this week onwards
// aka removes row from week n onwards
export function clearRosterFromThisWeekOnwards() {}

export function getFollowingWeekRoster(){
    //get recent week duty
    const allRoster = getAllWeekRosters()
    const lastUpdatedWeek = allRoster[allRoster.length - 1]

    const duty = lastUpdatedWeek.duty
    

}

/***
assumes: there is week 1 roster inside

1. User enter sites for 1st time
2. System
    (will retrieve this week roster)
        -> if this week roster not found
            => addRosterToWeek(current week)
3. User wants to see next Week Roster
        -> 
 
Database:
Kitchen Roster - 
  Database:
    - WEEK # + YEAR  (YEARWEEK(CURDATE());)
    - [room nos doing duty for week]
    - [all available room nos]

  getRoomsbyWeek()

  getRosterbyWeek()
    - if week# not there, then give error message, too far, or too far forward

  addRosterToWeek(week #, all available room no)
    - only since 10rooms + 5 duties
    -   ensure room is added to a duty, never done 2 week before
    - else
      - just add sequentially
  
  getNextWeekDuty(currentWeek#)

  getPreviousWeekDuty(currentWeek#)

  updateWeekRoster(week #, [all rooms no])
    - used when [rooms no] changed
    - delete following weeks duty
      => user can click on getNextWeekDuty


-------------------------

HTML -> jump to current week duty


 */