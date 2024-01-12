import SingleCard from './../SingleCard/SingleCard';
function SingleColumn({singleCol}) {
  
  return (
    // 
    <>
        <div className="mr-4">
          <div className="bg-gray-100 w-[350px]">
            <div className="w-[90%] mx-auto pb-4 pt-5 mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                 {singleCol?.color && (<div className={`bg-${singleCol.color}-600 h-6 w-5 rounded-l-xl block`}></div>)}
                  <p className="text-gray-700 font-semibold text-base">
                    {singleCol?.operation}
                  </p>
                </div>
                <div className='rounded-md bg-zinc-200 px-2 py-[0.5px] flex items-center justify-center'>
                  <p className="font-semibold">0</p>
                </div>
              </div>
            </div>
            <div className='max-h-[85vh] w-full mx-auto pb-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-700' scrollbar>
              {singleCol?.cards?.map((singleCard)=> <SingleCard singleCard={singleCard} key={singleCard.id}/>)}
            </div>
          </div>
        </div>
    </>
  );
}

export default SingleColumn;
