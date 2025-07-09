import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data,setData] = useState(null)
    const [commentsData,setCommentsData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(setData)
        .catch((err) => console.log('API Error'))

        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(setCommentsData)
        .catch(err => console.log('API Error'))
    },[])

    return (
        <DataContext.Provider value={{data,commentsData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useShareData = () => useContext(DataContext)