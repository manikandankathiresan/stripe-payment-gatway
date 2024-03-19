import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Failure = () => {
    const history = useHistory();
    return (
        <div>
            <div className='__message'><h2>Payment Failed..!</h2></div>
            <div class="o-circle c-container__circle o-circle__sign--failure">
                <div class="o-circle__sign"></div>
            </div>
            <div className='back_to_home'>
                <button onClick={() => history.push("/")}>Back to Home</button>
            </div>
        </div>
    )
}

export default Failure
