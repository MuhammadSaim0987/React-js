import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

const{user} = useContext(UserContext)

if (!user) return <h3>No user found</h3>

return (
    <div>
    <h3>Profile : {user.username}</h3>
    </div>
)
}

export default Profile