import React from 'react'

function Social() {
    return (
        <div className='home__social'>
            <a href="https://web.facebook.com/profile.php?id=100092359968795" className="home__social-icon" target='_blank'>
                <i className='uil uil-facebook-f'></i>
            </a>
            <a href="#" className="home__social-icon" target='_blank'>
                <i className='uil uil-instagram'></i>
            </a>
            <a href="https://github.com/" className="home__social-icon" target='_blank'>
                <i className='uil uil-github-alt'></i>
            </a>
        </div>
    )
}

export default Social