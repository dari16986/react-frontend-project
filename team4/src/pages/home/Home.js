import React, { useEffect } from "react";
import './Home.css'
import TodayMovie from "../../components/todayMovie/TodayMovie";

const Home = (props) => {

    useEffect( () => {
        document.title = 'Página de inicio - Team4'
    })

    return (
        <div className="home-container overflow-hidden">
            <div className="centered-div animate-container">
                <TodayMovie />
            </div>
        </div>
    )
}

export default Home
