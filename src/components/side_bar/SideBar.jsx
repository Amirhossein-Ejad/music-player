import { useRef , useEffect} from "react";
export default function SideBar(props,color) {

  useEffect(()=>{
    console.log('compenent did mount');
      console.log(refVal.current);
  },[])

  const refVal = useRef()

  
  return (
    <>
      <div ref={refVal} className={`flex justify-center  items-center bg-secondary_dark flex-[1_1_0] h-screen`}></div>
    </>
  );
}
