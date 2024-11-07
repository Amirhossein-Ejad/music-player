import { categorisData } from './../../datas'
import Card from "../../components/card/Card"
export default function Categories() {



    return (
        <>
            <div className="container min-h-max mb-20 flex justify-center lg:justify-between gap-7 items-start flex-wrap">
                {categorisData.map(item => (
                    <Card {...item} />
                ))}
            </div>


        </>
    )
}