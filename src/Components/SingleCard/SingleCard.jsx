import React from 'react';
import { FaCalendarAlt, FaClipboardList, FaLayerGroup } from 'react-icons/fa';
import { IoAttach, IoChatbubblesOutline } from 'react-icons/io5';
import Rejon from "/rezon.png";


const SingleCard = ({singleCard}) => {
  return (
    <>
    <div className="rounded-[4px] bg-white mb-3 mx-2">
                <div className="py-1 px-2">
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-x-[6px]">
                      <div className="h-6 w-6 rounded-full">
                        <img
                          src={Rejon}
                          alt="user pic"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <p className="text-black font-semibold text-[13px]">
                        Client Name
                      </p>
                    </div>
                    <div className="flex items-center gap-x-[6px]">
                      <div className="h-6 w-6 rounded-full">
                        <img
                          src={Rejon}
                          alt="user pic"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <p className="text-black font-semibold text-[13px]">
                        Client Name
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 mt-1">
                    <div className='w-[70%]'>
                    <div className="flex items-center">
                      <div className="h-2 w-2 mr-4 mb-2">
                      <FaLayerGroup fill="gray"/>
                      </div>
                      <p className="text-gray-500 font-semibold text-[12px] truncate">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis obcaecati? Assumenda delectus rem velit ipsa aspernatur! In, molestiae voluptatem?
                      </p>
                    </div>
                    </div>
                   <div className='basis-[10%]'>
                     
                     <div className="flex items-center justify-between bg-zinc-200 p-1 rounded-md">
                       <div className="h-2 w-2 mb-2 mr-3 cursor-pointer">
                       <FaClipboardList fill="rgb(75 85 99)" />
                       </div>
                       <p className="text-gray-600 font-semibold text-[12px] truncate">
                         1/2
                       </p>
                     </div>
                   </div>
                  </div>
                  <div className='flex items-center gap-x-[10px] text-gray-600 font-bold text-[12px] py-2'>
                  <div className="h-6 w-6 rounded-full">
                        <img
                          src={Rejon}
                          alt="user pic"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="h-6 w-6 rounded-full">
                        <img
                          src={Rejon}
                          alt="user pic"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="h-7 w-7 rounded-full bg-zinc-200 flex items-center justify-center">
                        <p className="text-[11px]">12+</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                      <div className='cursor-pointer'>
                        <IoChatbubblesOutline  className='text-base'/>
                      </div>
                      <p className="">12+15</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                      <div className='cursor-pointer'>
                        <IoAttach className='text-xl rotate-45'/>
                      </div>
                      <p className="">{singleCard?.attachNo}</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                      <div className='cursor-pointer'>
                        <FaCalendarAlt />
                      </div>
                      <p>30-12-22</p>
                      </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default SingleCard