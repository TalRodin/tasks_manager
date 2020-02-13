import React, {useEffect} from 'react'
import * as actions from '../../../store/actions'

const Logout = ({logout}) => {
    useEffect(()=>{
        
    })
    return (
        <div>

        </div>
    )
}

const mapDispatchToProps ={
    logout: actions.signOut
}


export default connect(null, mapDispatchToProps)(Logout)