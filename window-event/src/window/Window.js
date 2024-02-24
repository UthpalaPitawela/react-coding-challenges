import { useState } from "react"
import { WindowEvent } from "../windowEvent/WindowEvent";

export const Window = () => {
    const [viewWindowEvent, setViewWindowEvent] = useState(false);
    return (
        <>
        <button onClick={()=>setViewWindowEvent(!viewWindowEvent)}>
            Toggle Window Event
        </button>
        {
            viewWindowEvent && <WindowEvent/>
        }
        </>
    )
}