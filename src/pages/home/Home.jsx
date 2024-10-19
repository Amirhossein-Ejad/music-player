import ContentSlider from "../../components/sliders/content_slider/ContentSlider";
import { useEffect } from "react";
export default function Home() {

    useEffect(() => {
        console.log('component did mount (HOME)');

    })
    return (

        <>
            <ContentSlider />

        </>
    )



}