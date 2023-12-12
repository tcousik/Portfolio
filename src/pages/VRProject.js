import React from 'react'
import "../styles/vr.css"


const VRProject = () => {
    return (
        <div>
            <h1 className='title'>CSCI 4570 (AR/VR) - Final Project Report</h1>
            <h2 className='title'>Tejas Cousik</h2>
            <p>Demo: <a href="https://www.youtube.com/watch?v=OQQuCyN71ks">Link Here</a></p>
            <body>
                <section>
                    <h2>Objective</h2>
                    <p>The objective of this project was to develop a simple yet engaging bowling game using the Unity game development engine. The game aims to provide users with an immersive experience, allowing them to easily interact with a virtual bowling environment.</p>
                </section>

                <section>
                    <h2>Screenshots</h2>

                </section>

                <section>
                    <h2>Technical Highlights</h2>
                    <p>The key technical features of this game include realistic ball physics, accurate pin interactions, and an accurate scorekeeping system.</p>

                    <ul>
                        <li><strong>Physics Simulation:</strong> Implemented realistic ball physics to mimic the behavior of a bowling ball, ensuring a lifelike gaming experience. Downward force is added to make it easier for the player to launch the ball, lessening the chances for the ball to fly away.</li>
                        <li><strong>Pin Interaction:</strong> Developed a robust system for pin interaction, allowing them to respond accurately to collisions and reset appropriately after each frame. The angle of each pin is checked after the ball is launched and ones with a significant angle change are removed.</li>
                        <li><strong>User Interface (UI):</strong> Designed an intuitive UI to display and update the score in real-time, providing players with a clear understanding of their performance.</li>
                        <li><strong>Game Logic:</strong> Implemented game logic to manage frames, calculate scores, and determine when a game was complete.</li>
                        <li><strong>User Input:</strong> Integrated user input controls for grabbing and launching the bowling ball, enhancing the overall user experience.</li>
                    </ul>
                </section>

                <section>
                    <h2>List of Complete Features from Proposal</h2>
                    <ul>
                        <li>Created a bowling alley with a lane, pins, and a ball with realistic dimensions.</li>
                        <li>The controls are intuitive, allowing the player to easily grab the bowling ball and launch them towards the pins.</li>
                        <li>The game properly resets the number of pins in a frame based on how many were hit. If the player gets a strike, the game advances to the next frame.</li>
                        <li>The UI accurately displays the player’s score per frame.</li>
                    </ul>
                </section>

                <section>
                    <h2>List of Missing Features from the Proposal</h2>
                    <ul>
                        <li>There isn’t a leaderboard system to keep track of scores. The game displays the score for each frame but doesn’t provide a final score. There was added complexity here due to how strikes and spares have special conditions for scoring.</li>
                        <li>The scoreboard doesn’t display “X” or “/” for strikes and spares respectively.</li>
                    </ul>
                </section>

                <section>
                    <h2>Measuring Project Success</h2>
                    <ol>
                        <li>Realism: How closely the game simulates real-world bowling physics and interactions.</li>
                        <li>User Engagement: Player enjoyment and interaction level within the game environment.</li>
                        <li>Functionality: Accurate scorekeeping, proper pin resetting, and seamless game progression.</li>
                    </ol>
                </section>

                <section>
                    <h2>Future Considerations</h2>
                    <p>In future iterations, an area for improvement involves enhancing the auditory experience within the game. I attempted to integrate sounds like the ball rolling and pin collisions, but challenges arose in managing potential conflicts with the background music. Resolving these sound-related issues is a priority to create a more immersive and engaging gameplay atmosphere.</p>

                    <p>Also, I would spend time enriching the rest of the environment. This includes adding interactive elements to the lobby, providing players with opportunities to explore and engage beyond the bowling activity.</p>
                </section>

                <section>
                    <h2>Concept Art</h2>

                </section>

                <section>
                    <h2>Professor Feedback</h2>
                    <p>I added a website link and added more details to the technical focus. Since I’m not in CSCI 5570, I’m not required to include a research component.</p>
                </section>

            </body>
        </div >
    )
}

export default VRProject