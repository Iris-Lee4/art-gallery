import { useEffect, useState } from "react"
import { AdminViews } from "./AdminViews.jsx"
import { UserViews } from "./CustomerViews.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localShellUser = localStorage.getItem("activeUser")
    const shellUserObject = JSON.parse(localShellUser)

    setCurrentUser(shellUserObject)
  }, [])

  return currentUser.isStaff ? (
    <AdminViews currentUser={currentUser} />
    
  ) : (
    <UserViews currentUser={currentUser} />
  )
}
