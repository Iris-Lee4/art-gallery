import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerNav } from "../components/nav/CustomerNav.jsx"
import { ArtList } from "../components/art/ArtList.jsx"
import { UserDetails } from "../components/profile/ProfileDetails.jsx"
import { ArtDetail } from "../components/art/ArtDetail.jsx"
import { LikedList } from "../components/liked/LikedList.jsx"
import { PurchasedList } from "../components/purchase/PurchasedList.jsx"
import { ArtListCarousel } from "../components/art/ArtListCarousel.jsx"

export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <CustomerNav />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<ArtListCarousel currentUser={currentUser}/>} />
                <Route path="all">
                    <Route index
                        element={<ArtList currentUser={currentUser}/>} />
                        <Route path=":artPieceId" 
                            element={<ArtDetail currentUser={currentUser}/>} />
                </Route>
                <Route path="liked"
                    element={<LikedList currentUser={currentUser} />} />
                <Route path="purchased"
                    element={<PurchasedList currentUser={currentUser} />} />
                <Route path="profile"
                    element={<UserDetails currentUser={currentUser} />} />
            </Route>
        </Routes>
    )
}