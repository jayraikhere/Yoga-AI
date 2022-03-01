import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'

import './Instructions.css'

export default function Instructions({ currentPose }) {

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <div className="instructions-container flex-container">
            <ul className="flex-item-left">
                {instructions[currentPose].map((instruction) => {
                    return(
                        <li className="instruction">{instruction}</li>
                    )
                    
                })}
            </ul>
            <img 
                className="pose-demo-img flex-item-right"
                src={poseImages[currentPose]}
            />
        </div>
    )
}

{/* <div class="flex-container">
<div class="flex-item-left">1
<Instructions
  currentPose={currentPose}
/>
</div>
<div class="flex-item-right">2

</div>
</div> */}