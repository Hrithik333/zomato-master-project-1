import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// redux actions
import { googleAuth } from '../Redux/Reducers/Auth/auth.action';

const GoogleAuth = () => {
    const { token } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (token) {
            dispatch(googleAuth(token)).then(() => history.push("/delivery"))
        }
    }, [token])

    return (
        <>
            Loading..... Please Wait.
        </>
    )
}

export default GoogleAuth
