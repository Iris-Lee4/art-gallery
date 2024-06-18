import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.jsx"

export const UserDetails = ({ currentUser }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(currentUser?.id)
        .then((data) => {
            setUser(data)
        })
    }, [currentUser])

    return (
        <section>
            <header>
                My Profile
            </header>
            <div> 
                <span>
                {user.firstName} {user.lastName}

                </span>
            </div>
            <div>
                <span>
                    {user.email}
                </span>
            </div>
        </section>
    )
}

// export const UserDetails = () => {

//     const [user, setUser] = useState({})
//     const { userId } = useParams()

//     useEffect(() => {
//         getUserById(userId)
//         .then((data) => {
//             const userObj = data[0]
//             setUser(userObj)
//         })
//     }, [userId])

//     return (
//         <section>
//             <header>
//                 {user?.firstName} {user?.lastName}
//             </header>
//             <div>
//                 <span>
//                     {user?.email}
//                 </span>
//             </div>
//         </section>
//     )
// }