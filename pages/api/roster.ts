// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { PrismaClient } from "@prisma/client"
// import type { NextApiRequest, NextApiResponse } from "next"

// const prisma = new PrismaClient();

// export default async function roster(req: NextApiRequest, res: NextApiResponse) {
//     // if (req.method != "POST") {
//     //     return res.status(405).json({message: "message not allowed"})
//     // }

//     // const rosterData = JSON.parse(req.body)


//     // const roster = await prisma.roster.findMany();

//     const of_half = [1,2,3,6,7]
//     const ol_half = [8,9,10,11,12]


//     const data = []
//     for (let i = 40; i < 50; i++) {
//         // if i == even, take roster from data
//         var arr = [];
//         if ( i == 40) {
//             arr = of_half.sort(() => Math.random() - 0.5)
//         } else if (i == 41) {
//             arr = ol_half.sort(() => Math.random() - 0.5)    
//         } else if (i >= 42) {
//             arr = data[i - 42].DutyRooms.sort(() => Math.random() - 0.5)
//         }
//         while(hasOneElementInSameSpot(arr, getRosterByEvenOdd(i))) {
//             arr = arr.sort(() => Math.random() - 0.5)
//         }

//         console.log(i+ ": " + arr)
//         data.push({
//             weekNum: i,
//             year: 2022,
//             DutyRooms: arr,
//             assignedRooms: [1,2,3,6,7,8,9,10,11,12]
//         })
//     }


//     const createMany = await prisma.roster.createMany({
//         data: data})

//     res.json({data})

// }

// function hasOneElementInSameSpot(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] == arr2[i])
//         return true
//     }
  
//     return false
//   }


//   function getAllWeekRosters() {
//     return [
//       {
//         weekNum: 38,
//         year: 2022,
//         duty: [1201, 1202, 1203, 1206, 1207]
//       },
//       {
//         weekNum: 39,
//         year: 2022,
//         duty: [1208, 1209, 1210, 1211, 1212]
//       }
//     ];
//   }

//   function getRosterByEvenOdd(num) {
//     return num % 2 == 0 ? getAllWeekRosters()[0].duty : getAllWeekRosters()[1].duty
//   }