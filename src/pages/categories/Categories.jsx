import { useEffect } from "react"



export default function Categories() {

    useEffect(() => {
        console.log('component did mount (CATEGORIES)');

    })

    return (
        <>
            <p className="w-full h-10 bg-red-500 text-white text-3xl text-center">
                categories
            </p>


        </>
    )
}