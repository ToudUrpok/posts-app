import React from "react";
import styleClasses from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const classes = [styleClasses.myModal];
    if (visible) {
        classes.push(styleClasses.active);
    }

    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)} >
            <div className={styleClasses.myModalContent} onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    )
}

export default MyModal;