import React from 'react';
import './App.css';
import Joke from './components/Joke';

function App2(){
    return (
        <div>
            <Joke
            joke = {{
                question: "what happens to christmas trees on valentines day?",
                punchLine: "they get all sappy"
            }}
            />
            <Joke
            joke = {{
                punchLine: "towels are like doors, they're both rectangular"
            }}
            />
            <Joke
            joke = {{
                question: "what do you call a lion playing golf?",
                punchLine: "roaring mcilroy"
            }}
            />
            <Joke
            joke = {{
                question: "what do snails do when they fight?",
                punchLine: "they slug it out!"
            }}
            />
            <Joke
            joke = {{
                question: "i named my iphone boat...",
                punchLine: "it's now syncing!"
            }}
            />
        </div>
    )
}
export default App2;