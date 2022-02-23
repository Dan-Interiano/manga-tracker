import React from "react";
import "./Home.css"
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            {/* <img src="./assests/mangaimage1.jpg" className="home-bg" alt="manga" /> */}
            <div className="upper-div">
                <h1 className="title-text">Browse through many of the most popular manga</h1>
                
                    <img src="./assests/jjkvolume.jpg" id="pic4" className="home-img" alt="jjk" />
                    <img src="./assests/opvolume.jpg" id="pic3" className="home-img" alt="one piece" />
                    <img src="./assests/naruto-volume.jpeg" id="pic2" className="home-img" alt="naruto" />
                    <img src="./assests/bleachvolume.jpeg" id="pic1" className="home-img" alt="bleach" />
                
            </div>
            <div className="lower-div">
                <p className="home-pg">
                    The Big 3, Naruto, Bleach, and the only one still going on to this day,
                    One Piece, paved the way for manga enthusiast all over the world. They inspired the
                    next generation of manga. Now there is more quality manga out there than ever before,
                    and it sure can be a daunting task keeping track of them all!
                    We wanted to bring our users a useful solution for this!  With new titles coming out constantly
                    we wanted to provide a "to-do list" of sorts that was fun and interactive.
                    Users will be able to keep track of titles they've read and rate them, as well
                    as add titles of their own!
                    With weekly, biweekly, and monthly releases it can be hard to keep
                    track of all the manga you're reading!
                </p>
            
                <div class="button" id="button-3">
                    <button id="circle"></button>
                    <NavLink to="/Manga" >Get Started!</NavLink>
                </div>
            </div>
        </div>
    )
}