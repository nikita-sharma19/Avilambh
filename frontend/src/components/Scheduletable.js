import React from 'react'

function Scheduletable() {
  return (
    <>
   <div className="min-h-screen bg-gray-500 p-6 flex justify-center items-center">
      {/* Outer Container */}
      <div className="w-[80vw] h-[85vh] p-3 bg-white shadow-lg flex rounded-lg overflow-hidden">
        {/* Main Content */}
        <div className="w-[65vw] h-[30vh] p-6">
          <h1 className="text-2xl font-bold text-gray-800">Main Content</h1>
          <p className="text-gray-600 mt-4">
            This is the main content area inside the white container.
          </p>
        </div>
         {/* Sidebar */}
         <div className="w-1/4 bg-gray-400 text-white p-4">
          <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li className="p-2 bg-gray-700 rounded">Site 1</li>
            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Site 2</li>
            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Site 3</li>
          </ul>
        </div>
      </div>
      </div>
    </>
  )
}

export default Scheduletable