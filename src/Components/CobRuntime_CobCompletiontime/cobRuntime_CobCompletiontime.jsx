import './cobRuntime_CobCompletiontime.css';
import DataTable from "react-data-table-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "@ramonak/react-progress-bar";
// import Stopwatch from "../stopWatch/stopWatch";
import React, { useState, useEffect } from 'react';

const fetch = require("node-fetch");


// const response = await fetch('http://127.0.0.1:81/accountViewCont/api/v1.0.0/party/batchStage');
// const data1 = await response.json();
// console.log(data1.body);



// function Table() {
// var dataArray=data1.body;
// var applicationTotal=0;
// var systemWideTotal=0;
// var reportingTotal=0;
// var startofDayTotal=0;
// var onlineTotal=0;


// var applicationJobProcessedCount=0;
// var systemWideJobProcessedCount=0;
// var reportingJobProcessedCount=0;
// var startofDayJobProcessedCount=0;
// var onlineJobProcessedCount=0;



// for (let index = 0; index < dataArray.length; index++) {
//   // console.log(dataArray[index]);
//   // console.log("Line 31: "+dataArray[index]['BATCH STAGE']);
//   let batchStage=dataArray[index]['BATCH STAGE'];
//   let jobStage=dataArray[index]['JOB STATUS'];

//   if(typeof batchStage === "string" && typeof jobStage === "string"){
//     console.log(jobStage==="0");
//     if(batchStage.charAt(0)==="A"){
//       applicationTotal+=1;
//       if(jobStage==="1"){
//         applicationJobProcessedCount+=1;

//       }
//     }
//     else if(batchStage.charAt(0)==="S"){
//       systemWideTotal+=1;
//       if(jobStage==="1"){
//         systemWideJobProcessedCount+=1;
//       }
//     }
//     else if(batchStage.charAt(0)==="R"){
//       reportingTotal+=1;
//       if(jobStage==="1"){
//         reportingJobProcessedCount+=1;
//       }
//     }
//     else if(batchStage.charAt(0)==="D"){
//       startofDayTotal+=1;
//       if(jobStage==="1"){
//         startofDayJobProcessedCount+=1;
//       }
//     }
//     else if(batchStage.charAt(0)==="O"){
//       onlineTotal+=1;
//       if(jobStage==="1"){
//         onlineJobProcessedCount+=1;
//       }
//     }
//   }
  
// //   console.log("applicationjobProcessedCount: "+applicationJobProcessedCount);


  
// }
// console.log("applicationjobProcessedCount: "+applicationJobProcessedCount+" "+systemWideJobProcessedCount+" "+reportingJobProcessedCount+" "+startofDayJobProcessedCount+" "+onlineJobProcessedCount);



// console.log(applicationTotal+" "+systemWideTotal+" "+reportingTotal+" "+startofDayTotal+" "+onlineTotal);

//     const rows = [
//         {
//             stage: "Application",
//             progressBar:  (applicationJobProcessedCount/applicationTotal)*100,
//             processed: applicationJobProcessedCount,
//             total: applicationTotal,
//         },
//         {
//             stage: "System Wide",
//             progressBar: systemWideTotal>0? (systemWideJobProcessedCount/systemWideTotal)*100: (0),
//             processed: systemWideJobProcessedCount,
//             total: systemWideTotal,
//         },
//         {
//             stage: "Reporting",
//             progressBar: reportingTotal>0? (reportingJobProcessedCount/reportingTotal)*100: (0),
//             processed: reportingJobProcessedCount,
//             total: reportingTotal,
//         },
//         {
//             stage: "Start of the Day",
//             progressBar: reportingTotal>0? (startofDayJobProcessedCount/reportingTotal)*100: (0),
//             processed: startofDayJobProcessedCount,
//             total: startofDayTotal,
//         },
//         {
//             stage: "Online",
//             progressBar: onlineTotal>0? (onlineJobProcessedCount/onlineTotal)*100: (0),
//             processed: onlineJobProcessedCount,
//             total: onlineTotal,
//         }
//     ];

//     return (
//         <>
//             <div className="parent">
//                 <div className="container my-5 cobStage">
//                     <h2>COB Stage</h2>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Stage</th>
//                                 <th>Progress Bar</th>
//                                 <th>Processed</th>
//                                 <th>Total</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {rows.map((row, index) => (
//                                 <tr key={index}>
//                                     <td>{row.stage}</td>
//                                     <td><ProgressBar completed={parseInt(row.progressBar)} /></td>
//                                     <td>{row.processed}</td>
//                                     <td>{row.total}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 {/* <InteractiveTable /> */}
//         <div className="completionTime">
//          <div className="first">
//             <h6>COB Run Time</h6>
//             <Stopwatch/>
//             <div></div>
//          </div>
//          <div className="second"><h6>Expected Completion Time</h6></div>
//       </div>
//             </div>
//         </>
//     );
// }

// export default Table;


function Table() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:81/accountViewCont/api/v1.0.0/party/batchStage');
          const newData = await response.json();
          setData(newData.body);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      const interval = setInterval(fetchData, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    const calculateRows = () => {
      if (!data || !data.length) return [];
  
      let applicationTotal = 0;
      let systemWideTotal = 0;
      let reportingTotal = 0;
      let startOfDayTotal = 0;
      let onlineTotal = 0;
  
      let applicationJobProcessedCount = 0;
      let systemWideJobProcessedCount = 0;
      let reportingJobProcessedCount = 0;
      let startOfDayJobProcessedCount = 0;
      let onlineJobProcessedCount = 0;
  
      data.forEach(item => {
        let batchStage = item['BATCH STAGE'];
        let jobStage = item['JOB STATUS'];
  
        if (typeof batchStage === 'string' && typeof jobStage === 'string') {
          if (batchStage.charAt(0) === 'A') {
            applicationTotal++;
            if (jobStage === '1') {
              applicationJobProcessedCount++;
            }
          } else if (batchStage.charAt(0) === 'S') {
            systemWideTotal++;
            if (jobStage === '1') {
              systemWideJobProcessedCount++;
            }
          } else if (batchStage.charAt(0) === 'R') {
            reportingTotal++;
            if (jobStage === '1') {
              reportingJobProcessedCount++;
            }
          } else if (batchStage.charAt(0) === 'D') {
            startOfDayTotal++;
            if (jobStage === '1') {
              startOfDayJobProcessedCount++;
            }
          } else if (batchStage.charAt(0) === 'O') {
            onlineTotal++;
            if (jobStage === '1') {
              onlineJobProcessedCount++;
            }
          }
        }
      });
  
      return [
        {
          stage: 'Application',
          progressBar: (applicationJobProcessedCount / applicationTotal) * 100,
          processed: applicationJobProcessedCount,
          total: applicationTotal,
        },
        {
          stage: 'System Wide',
          progressBar: systemWideTotal > 0 ? (systemWideJobProcessedCount / systemWideTotal) * 100 : 0,
          processed: systemWideJobProcessedCount,
          total: systemWideTotal,
        },
        {
          stage: 'Reporting',
          progressBar: reportingTotal > 0 ? (reportingJobProcessedCount / reportingTotal) * 100 : 0,
          processed: reportingJobProcessedCount,
          total: reportingTotal,
        },
        {
          stage: 'Start of the Day',
          progressBar: startOfDayTotal > 0 ? (startOfDayJobProcessedCount / startOfDayTotal) * 100 : 0,
          processed: startOfDayJobProcessedCount,
          total: startOfDayTotal,
        },
        {
          stage: 'Online',
          progressBar: onlineTotal > 0 ? (onlineJobProcessedCount / onlineTotal) * 100 : 0,
          processed: onlineJobProcessedCount,
          total: onlineTotal,
        },
      ];
    };
    return (
        <div className="parent">
          <div className="container my-5 cobStage">
            <h2>COB Stage</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Progress Bar</th>
                  <th>Processed</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {calculateRows().map((row, index) => (
                  <tr key={index}>
                    <td>{row.stage}</td>
                    <td>
                      <ProgressBar completed={parseInt(row.progressBar)} />
                    </td>
                    <td>{row.processed}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="completionTime">
              <div className="first">
                 <h6>COB Run Time</h6>
                 {/* <Stopwatch/> */}
                 <div></div>
          </div>
          <div className="second"><h6>Expected Completion Time</h6></div>
       </div>
        </div>
      );
    
}
export default Table;

