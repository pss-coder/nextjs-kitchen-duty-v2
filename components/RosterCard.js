import React from "react";
import styles from '../styles/Home.module.css'

// import { getThisWeekInfo, getWeekByWeekNumber } from '../lib/date';

export default function RosterCard({roster}) {
  // const highlightedStyle = getThisWeekInfo().weekNumber == weekNum ? styles.highlighted : styles.card;

    // console.log(getThisWeekInfo().weekNumber + 1, weekNum)

    return (
        <div className={styles.card}>
              <div className="font-bold text-sm mb-2">
               {roster["Week"]}
              </div>

              <p className="text-sm">
                Disposal Waste : {roster["Disposal_Waste"]}
              </p>
              <p className="text-sm">
              Plastic & Paper	 : {roster["Plastic_Waste"]}
              </p>
              <p className="text-sm">
              Dishes and Surfaces : {roster["Dishes_and_Surfaces"]}
              </p>
              <p className="text-sm">
              Floor Cleaning : {roster["Floor_Cleaning"]}
              </p>
              <p className="text-sm">
              Metal & Glass : {roster["Metal_and_Glass"]}
              </p>
          </div>
    )
}