import React, {useState} from 'react'

// Constant Declarations
const CLOSED = 0
const OPEN = 1

// Component
const Contents = () => {
    const [state, setState] = useState(OPEN)

    const openComponent = (
        <div
            onClick={() => setState(CLOSED)}
            style={styles.open}>
        </div>
    )

    const closedComponent = (
        <div
            onClick={() => setState(OPEN)}
            style={styles.closed}>
        </div>
    )

    if (state === OPEN) {
        return openComponent
    } else {
        return closedComponent
    }
}

// Styles
const styles = {
    open: {
        position: 'absolute',
        top: 20,
        bottom: 20,
        left: 20,
        width: 200,
        backgroundColor:'yellow'
    },
    closed: {
        position: 'absolute',        
        top: 20,
        left: 20,
        width: 20,
        height: 20,
        backgroundColor: 'brown'

    }
}

export default Contents;