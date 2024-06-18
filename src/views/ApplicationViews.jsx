import { useEffect, useState } from "react"
import { AdminViews } from "./AdminViews.jsx"
import { CustomerViews } from "./CustomerViews.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    setCurrentUser(userObject)
  }, [])

  return currentUser.isStaff ? (
    <AdminViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser} />
  )
}
