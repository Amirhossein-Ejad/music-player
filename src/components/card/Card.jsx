
export default function Card(list) {

    return (
        <>

                <div className="flex flex-col justify-between items-center w-32 h-36 md:w-52 md:h-48 overflow-hidden object-contain rounded-lg relative">
                    <div className=" absolute inset-0 overflow-hidden opacity-60 hover:blur-[1px] w-full transition-all"> <img className="w-full h-full" src={list.img} /></div>
                    <div className="w-full absolute left-0 right-0 top-1/2 text-center border">
                        <p className="text-white font-medium text-2xl line-clamp-1 md:text-3xl ">{list.title}</p>
                    </div>
                </div>

        </>
    )
}