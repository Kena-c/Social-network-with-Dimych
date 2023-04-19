import React from 'react';
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyXl_ES0Jwg7dn_W559ya9pk8X_8B_e9IEQ&usqp=CAU' alt='girl' />
            </div>
            <div className={c.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;