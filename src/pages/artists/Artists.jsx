import { useEffect } from "react"



export default function Artists() {

    useEffect(() => {
        console.log('component did mount (ARTISTS)');

    })

    return (
        <>
            <p className="w-full h-10 bg-red-500 text-white text-3xl text-center">
                Artists
            </p>


        </>
    )
}