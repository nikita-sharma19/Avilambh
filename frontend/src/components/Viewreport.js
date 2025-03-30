import React from 'react'
// import { useNavigate } from 'react-router-dom';
function Viewreport() {
// const navigate = useNavigate()
    // const report =  [
    //     { report_id: 1, mine_id: "A", date: "" },
    //     { report_id: 2, mine_id: "B", date: "" },
    //     { report_id: 3, mine_id: "C", date: "" },
    //   ];
  return (
   <>
   {/* <div className="h-3/4 overflow-y-auto">
          <table className="w-4/5 mx-auto border border-gray-300 shadow-md ">
            <thead class="bg-gray-700 text-white  uppercase text-left sticky top-0 z-5">
              <tr className="text-center">
                <th className="px-4 py-2">report_id</th>
                <th className="px-4 py-2">mine_id</th>
                <th className="px-4 py-2">date</th>
              </tr>
            </thead>
            <tbody className="max-h-[400px] overflow-y-auto scrollbar-hide">
              {report.map((item) => (
                <tr key={item.report_id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {item.report_id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.mine_id}
                  </td>
                 
                  <td className="border border-gray-300 px-4 py-2">
                    {item.date.slice(0, 10)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button onClick={()=>navigate('safety')} className="px-4 py-1 bg-[#ff2188] rounded-md text-white outline-none">
                      view
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="absolute bottom-6 right-32 bg-blue-500 text-white px-6 py-1 rounded" >
            Add
          </button>
        </div> */}

<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-2/4  overflow-y-auto scrollbar-hide">
            <h2 className="text-xl font-bold mb-4">SMP Report</h2>
            <form>
              <label className="block mb-2">Report_id</label>
              <input
                name="report_id"
                type="text"
              
                className="w-full p-2 border rounded mb-4"
               
              />
              <label className="block mb-2">Mine_id</label>
              <input
                name="mine_id"
                type="text"
              
                className="w-full p-2 border rounded mb-4"
              />

              <label className="block mb-2">Date</label>
              <input
                name="date"
                type="text"
          
                className="w-full p-2 border rounded mb-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 rounded-md text-white"  
                >
                  View
                </button>
              </div>
            </form>
          </div>
        </div>
   </>
  )
}

export default Viewreport