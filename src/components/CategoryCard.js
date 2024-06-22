const CategoryCard = ({author, title, content})=>{

    return(
        <div className="grid grid-rows-2 justify-center w-full h-full rounded-xl shadow-lg p-3">
            <div className="w-full align-middle">
                <h2 className="font-bold">{title}</h2>
            </div>
            <div className="px-4 pt-4 row-span-1">
                <p className="">{content}</p>
                <p className="font-bold"><i>{author}</i></p>
            </div>
        </div>
    )
}

export default CategoryCard;