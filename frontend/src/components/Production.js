import React from 'react'
import Footer from "./Footer";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

const Production = () => {

  const [production, setProduction] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/production", {
        withCredentials: true,
      }) 
      .then((response) => {
        setProduction(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching production data:", error);
      });
  }, []);



  // const productions = [
  //   { production_id: "PRO010", mine_id: "MINE02", date: "10-02-2024", quality:"GOOD", quantity:112 },
  //   { production_id: "PRO016", mine_id: "MINE04", date: "16-02-2024", quality:"GOOD", quantity:223 },
  //   { production_id: "PRO07", mine_id: "MINE03", date: "16-02-2024", quality:"GOOD", quantity:333},
  //   { production_id: "PRO020", mine_id: "MINE06", date: "16-02-2024", quality:"GOOD", quantity:345 },
  // ];

  return (
   <>
      <div className="flex h-[90vh]">
        {/* Sidebar */}
        <aside className="w-[20vw]  bg-[#4A4752] text-white p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#359BD2] text-center">
              AVILAMBH
            </h1>
            <nav className="mt-6 space-y-4 pt-24 pl-8">
              <Link
                to="/home"
                className="block text-gray-300 hover:text-white "
              >
                HOME
              </Link>
              <Link
                to="/reports"
                className="block text-gray-300 hover:text-white underline"
              >
                REPORTS
              </Link>
              <Link
                to="/safety"
                className="block text-gray-300 hover:text-white"
              >
                SAFETY
              </Link>
              <Link
                to="/transport"
                className="block text-gray-300 hover:text-white "
              >
                TRANSPORT
              </Link>
              <Link
                to="/inventory"
                className="block text-gray-300 hover:text-white "
              >
                INVENTORY
              </Link>
              <Link
                to="/production"
                className="block text-gray-300 hover:text-white"
              >
                PRODUCTION
              </Link>
            </nav>
          </div>
        </aside>
      </div>

      <div className="w-[80vw] h-[85vh] absolute top-0 right-0 mt-4">
        <div className="h-3/4 overflow-y-auto">
          <table className="w-4/5 mx-auto border border-gray-300 shadow-md ">
            <thead class="bg-gray-700 text-white  uppercase text-left sticky top-0 z-5">
              <tr className="text-center">
                <th className="px-4 py-2">Production ID</th>
                <th className="px-4 py-2">Mine ID</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Quality</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="max-h-[400px] overflow-y-auto scrollbar-hide">
              {production.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Production_Id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Mine_Id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Quality}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.Quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="px-4 py-1 bg-gray-500 rounded-md text-white outline-none"
                    
                    >
                      update
                    </button>
                    <button
                      type="button"
                      className="px-4 py-1 ml-2 bg-gray-500 rounded-md text-white outline-none"
                     
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
   </>
  )
}

export default Production