

const Shimmer = ()=>{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,  9];

    return(
        <>
        <div>

            <div className="bg-slate-200 py-20">

            </div>

            <div className="flex justify-evenly flex-wrap">
               {
                arr.map(i=>{
                    return(
                        <div className="rounded-xl m-2 p-16 w-1/5 bg-slate-300"></div>
                    )
                })
               }
            </div>
            <div className="py-50 px-72 bg-slate-300">
            </div>
        </div>
        </>
    )
}

export default Shimmer;