import { useSelector } from "react-redux";

export function Profile(){
    const rockInfo = useSelector(state=>state.rockets);
    return (
        <>
        <h1>this is the profile page</h1>
        <div>
            {/* eslint-disable-next-line */}
            {rockInfo.map(item => {
                if (item.reserved){
                    return <p>{item.rocket_name}</p>
                }})}
        </div>
        </>
    )
}