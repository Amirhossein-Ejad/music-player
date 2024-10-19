import { useEffect } from "react"



export default function PlayLists() {

    useEffect(() => {
        console.log('component did mount (PlayLists)');

    })

    return (
        <>
            <p className="w-full h-10 bg-red-500 text-white text-3xl text-center">
            PlayLists
            </p>


        </>
    )
}