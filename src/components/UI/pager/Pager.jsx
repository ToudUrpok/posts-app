import React from "react";
import classes from './Pager.module.css'

const Pager = ({pages, curPage, setCurPage}) => {
    return (
        <div className={classes.pageWrapper}>
            {pages.map(page =>
                <span
                    key={page} 
                    className={page === curPage ? [classes.page, classes.current].join(' ') : classes.page}
                    onClick={() => setCurPage(page)}
                >
                    {page}
                </span>
            )}
        </div>
    )
}

export default Pager;