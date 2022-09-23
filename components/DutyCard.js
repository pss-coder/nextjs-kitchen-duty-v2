import React from "react";
import styles from '../styles/Home.module.css'

import { getThisWeekInfo, getWeekByWeekNumber } from '../lib/date';

export default function DutyCard({weekNum, year, duty}) {
  // const highlightedStyle = getThisWeekInfo().weekNumber == weekNum ? styles.highlighted : styles.card;

    console.log(getThisWeekInfo().weekNumber + 1, weekNum)

    return (
        <div className={getThisWeekInfo().weekNumber == weekNum ? styles.highlighted : styles.card}  >
              <div className="font-bold text-sm mb-2">
                {weekNum} : {getWeekByWeekNumber(weekNum).startDateWeek} - {getWeekByWeekNumber(weekNum).endDateWeek}
              </div>

              <p className="text-sm">
                Disposal Waste : {duty[0]}
              </p>
              <p className="text-sm">
              Plastic & Paper	 : {duty[1]}
              </p>
              <p className="text-sm">
              Dishes and Surfaces : {duty[2]}
              </p>
              <p className="text-sm">
              Floor Cleaning : {duty[3]}
              </p>
              <p className="text-sm">
              Metal & Glass : {duty[4]}
              </p>
          </div>
    )
}