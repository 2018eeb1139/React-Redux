import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
let Characters
const UserContainer = ({userData,fetchUsers}) => {
    useEffect(()=>{
        fetchUsers()
    },[])
    return userData.loading?(<h2>Loading...</h2>):userData.error?(<h2>{userData.error}</h2>):
    (<div>
        {/* <h2>User List</h2> */}
        <h2>Breaking Bad Characters</h2>
        <h3>Name Occupation Status</h3>
        <div>
            {
                userData && userData.users && userData.users.map(user=>(<p>{user.name} {user.occupation[0]} {user.status}</p>))
            }
        </div>
    </div>)
}

const mapStateToProps=(state)=>{
    return{
        userData:state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
