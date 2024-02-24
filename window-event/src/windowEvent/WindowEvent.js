import { useEffect } from "react"

//More information about event listeners refer this Article: https://bobbyhadz.com/blog/react-functional-component-add-event-listener#:~:text=The%20same%20approach%20can%20be,listener%20to%20the%20window%20object.&text=import%20%7BuseEffect%7D%20from%20'react,Window%20clicked')%3B%20console.


export const WindowEvent = () => {
useEffect(() => {
    const doubleClick = () => {
        alert('mouse pressed !!!');
    }

    window.addEventListener('dblclick', doubleClick);

    return () => window.removeEventListener('dblclick', doubleClick);
}, [])

    return (
        <h3>
            Window event is active
        </h3>
    )
}