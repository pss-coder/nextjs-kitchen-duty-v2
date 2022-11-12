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
              Mop and Wipe the floor : {roster["Mop and Wipe the floor"]}
              </p>
              <p className="text-sm">
              Empty Paper Bin	 : {roster["Empty Paper Bin"]}
              </p>
              <p className="text-sm">
              Empty Plastic Bin : {roster["Empty Plastic Bin"]}
              </p>
              <p className="text-sm">
              Empty Domestic Waste : {roster["Empty Domestic Waste"]}
              </p>
              <p className="text-sm">
              Empty Metal and Glass : {roster["Empty Metal and Glass"]}
              </p>

              <p className="text-sm">
              Supervise tables : {roster["Supervise tables"]}
              </p>

              <p className="text-sm">
              Supervise stoves : {roster["Supervise stoves"]}
              </p>

              <p className="text-sm">
              Supervise drying rack : {roster["Supervise drying rack"]}
              </p>

              <p className="text-sm">
              Supervise cleaning tools(to top up) : {roster["Supervise cleaning tools ( to top up )"]}
              </p>

              <p className="text-sm">
              Supervise counters and sinks : {roster["Supervise counters and sinks"]}
              </p>
          </div>
    )
}