import { useEffect, useState } from "react"


//More simplified
export const Score = () => {
    const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')) || 0);

    useEffect(() => {
        localStorage.setItem('score', JSON.stringify(score));
    },[score])

    return (
        <>
            <div>
            <h2> Your score is: {score}</h2>

            </div>
            <div>
            <button className="button" onClick={()=>  setScore(prevScore=>prevScore+1)}>+</button>
            <button className="button" onClick={()=> setScore(prevScore=>prevScore -1)}>-</button>

            </div>
        </>
    )
}

// In the below method, when we refreshes the page, the refresh this visible , But in the above method the updated values is shown to the user seamlessly. 



// export const Score = () => {
//     const [score, setScore] = useState(4);

//     useEffect(() => {
//         const scoreValue = JSON.parse(localStorage.getItem('score'));
//         if (scoreValue) {
//             setScore(scoreValue);
//         }
//     })
//     const incrementValue = () => {
//         localStorage.setItem('score', JSON.stringify(score +1 ));
//         setScore(score+1);
//     }

//     const decrementtValue = () => {
//         localStorage.setItem('score', JSON.stringify(score -1 ));
//         setScore(score-1);
//     }
//     return (
//         <>
//             <div>
//             <h2> Your score is: {score}</h2>

//             </div>
//             <div>
//             <button className="button" onClick={incrementValue}>+</button>
//             <button className="button" onClick={decrementtValue}>-</button>

//             </div>
//         </>
//     )
// }