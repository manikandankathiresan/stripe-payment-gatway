import React from 'react';

const Success = () => {
    // const history = useHistory();

    // useEffect(() => {
    //     dispatch(clearCart());
    // }, [dispatch])

    return (
        <>
            <div className='__message'><h2>Payment Scucess..!</h2></div>
            <div class="o-circle c-container__circle o-circle__sign--success">
                <div class="o-circle__sign"></div>
            </div>
            {/* <div className='back_to_home'>
                <button onClick={() => history.push("/")}>Back to Home</button>
            </div> */}

        </>
    )
}

export default Success
