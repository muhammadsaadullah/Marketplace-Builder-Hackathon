import Image from "next/legacy/image"
export default function ChefCard (props:any) {
    return (
        <div className="flex">
            <div className="flex flex-col h-[55vh] justify-start items-center border-2">
                <div className="flex h-[90%] justify-center overflow-hidden border-2">
                    <Image src={props.image} alt="" height={1000} width={1000} objectFit="cover" objectPosition="center" className=""/>
                </div>
                <div className="flex flex-col p-2 pt-1 pb-0 justify-center items-center">
                    <h1 className="flex font-roboto font-bold text-xl text-black text-center border">{props.name}</h1>
                    <h2 className="flex font-inter font-normal text-lg text-black text-center border">{props.designation}</h2>
                </div>
            </div>            
        </div>
    )
}