import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
      <div className="w-full py-[10rem] px-4 bg-white">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
              <div className="w-full p-4 shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
                  <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="single" />
                  <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                  <p className="text-4xl font-bold text-center">$149</p>
                  <div className="text-center font-medium">
                      <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                      <p className="py-2 border-b mx-8">1 Granted User</p>
                      <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                      <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trail</button>
                  </div>
              </div>

              <div className="w-full p-4 shadow-xl flex flex-col md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100">
                  <img className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent" src={Double} alt="single" />
                  <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                  <p className="text-4xl font-bold text-center">$149</p>
                  <div className="text-center font-medium">
                      <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                      <p className="py-2 border-b mx-8">1 Granted User</p>
                      <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                      <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trail</button>
                  </div>
              </div>

              <div className="w-full p-4 shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
                  <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="single" />
                  <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                  <p className="text-4xl font-bold text-center">$149</p>
                  <div className="text-center font-medium">
                      <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                      <p className="py-2 border-b mx-8">1 Granted User</p>
                      <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                      <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trail</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Cards