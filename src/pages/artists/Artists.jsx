import { atristsData } from "../../datas";
import Card from "../../components/card/Card";


export default function Artists() {


    return (
        <>
            <div className="container min-h-max mb-20 flex justify-center lg:justify-between gap-7 items-start flex-wrap">
                {atristsData.map(item => (
                    <Card {...item} />
                ))}
            </div>
        </>
    )
}