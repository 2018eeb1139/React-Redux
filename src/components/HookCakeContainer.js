import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HookCakeContainer
