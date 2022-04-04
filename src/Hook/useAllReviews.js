import { useEffect, useState } from "react"

const useAllReviews = () =>{
    const [allReviews, setAllReviews] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllReviews(data))
    } , [])
    return[allReviews, setAllReviews]
}
 export default useAllReviews