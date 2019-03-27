import React from 'react';

// const pageBuffer = [p1,p2,p3]

const PageBrowser = () => {
    return (
        <div style={styles.container}>
            <div style={styles.rightPane}
                onClick={() => nextPage()}/>
            <div style={styles.leftPane} 
                onClick={() => prevPage()} />
            {/* <CurrentPage/> */}
        </div>
    )
}

const nextPage = () => { }
const prevPage = () => { }
const CurrentPage = () => { }

const styles = {
    container: {
        height: '100%',
        width: '100%',
        display: 'flex'
    },
    rightPane: {
        flex: 1,
        backgroundColor: 'aqua'
    },
    leftPane: {
        flex: 1,
        backgroundColor: 'red'
    }
}



export default PageBrowser;