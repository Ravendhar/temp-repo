import './cobRunningBatch.css';
import DataTable from "react-data-table-component";

const CobRunningBatch = () =>{
    
    const columns1 = [
        {
          name: "Batch Name",
          selector: (row) => row.stage,
        },
        {
          name: "JOB Name",
          selector: (row) => row["JOB NAME"],
        },
        {
          name: "Status",
          selector: (row) => row.status,
        },
      ];
    
      const rows1 = [
        {
          stage: "BNK/END.OF.DAY",
          "JOB NAME": "TEST.JOB",
          status: "Running",
        },
      ];
      
      return(
        <div className="runningBatch">
           
                <DataTable
                    columns={columns1}
                    data={rows1}
                    fixedHeader
                    title="Running Batch"
                />              

        </div>
      );
    
    }
    
export default CobRunningBatch;