import React from 'react'
import landingStyles from "./landingStyles.css"

const Landing = () => {
    return (
        <div className='landing_container'>
            <div className='topSub_container'>
                <div className='left_container'>
                    <div className='left_top'>
                        DEVELOPER
                    </div>
                    <div className='class-name'></div>
                    <div className='left_bottom'>
                        UI/UX DESIGNER
                    </div>
                </div>
                <div className='right_container'>
                    <div className='right_top'>
                        I'm Kavinda Nirushana
                    </div>
                    <a href='#' className='btn'>CONTACT ME</a>
                </div>
            </div>

            <div className='bottomSub_container'>
                Web Application - Mobile Application - Websites
            </div>
        </div>
    )
}

export default Landing
