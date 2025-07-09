import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaAngleUp,FaAngleDown, FaDAndD } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom'
import { useShareData } from '../DataContext'
import '../styles/global.css'
import '../styles/dashboard.css'


const ITEMS_PER_PAGE = 50
const TOTAL_PAGES = 500 / ITEMS_PER_PAGE

const generateDirection = (currentDir) => {
  if(currentDir === null) return 'asc'
  if(currentDir === 'asc') return 'desc'
  return null
}

const Dashboard = () => {
  const {commentsData} = useShareData()
  const [tableData,setCommentsData] = useState(commentsData)
  const [currentSort,setSort] = useState({column:null,direction:null})
  const [serachVal,setSearchVal] = useState('')
  const [page,setPage] = useState(1)
  const currentArr = tableData.slice((page - 1) * ITEMS_PER_PAGE,page * ITEMS_PER_PAGE)
  
  useEffect(() => {
    setCommentsData(commentsData)
  },[commentsData])

  const handlerSorting = value => {
    const direction = currentSort.column === value ? generateDirection(currentSort.direction) : 'asc'
    setSort({column:direction ? value : null,direction})

    if(!direction){
      setCommentsData(commentsData)
      return
    }

    const sorted = [...tableData].sort((a,b) => {
      if(a[value] < b[value]) return direction === 'asc' ? -1 : 1
      if(a[value] > b[value]) return direction === 'asc' ? 1 : -1
      return 0;
    })

    setCommentsData(sorted)
  }

  const handleEvent = () => {
    const filterSearch = commentsData.filter(each => {
      return (
        each.name.toLowerCase().includes(serachVal.toLowerCase())||
        each.email.toLowerCase().includes(serachVal.toLowerCase())||
        each.body.toLowerCase().includes(serachVal.toLowerCase())
      )
    }
  )
    setCommentsData(filterSearch)
  }

  // console.log(tableData)

  return (
    <div>
        <Header/>
        <div className='body-card'>
          <div className='dashboard-card'>
            <div className='triggers-card'>
              <div className='sorting-triggers'>

                <div className='sort-trig' onClick={() => handlerSorting('id')}>
                  <p>Sort ID</p>
                  <div>
                  <FaAngleUp size={'10px'}/><br/>
                  <FaAngleDown size={'10px'}/>
                  </div>
                </div>
                <div className='sort-trig' onClick={() => handlerSorting('name')}>
                  <p>Sort Name</p>
                  <div>
                    <FaAngleUp size={'10px'}/>
                    <br/>
                    <FaAngleDown size={'10px'}/>
                  </div>
                </div>
                <div className='sort-trig' onClick={() => handlerSorting('email')}>
                  <p>Sort Email</p>
                  <div>
                    <FaAngleUp size={'10px'}/>
                    <br/>
                    <FaAngleDown size={'10px'}/>
                  </div>
                </div>
              </div>
              <div className='search-card'>
                <input value={serachVal} onChange={(event) => {
                  setSearchVal(event.target.value);
                  handleEvent()
                }} 
                placeholder='Search here...'
                type='search'/>
              </div>
            </div>
            <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>Post Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {currentArr.length > 0 ? (
                  currentArr.map(each => (
                    <tr key={each.id}>
                      <td>{each.id}</td>
                      <td>{each.name}</td>
                      <td>{each.email.toLowerCase()}</td>
                      <td className='truncate'>{each.body}</td>
                    </tr>
                  ))
                ) : <tr><td>Loading</td></tr>}
              </tbody>
            </table>
            </div>
            <div className='pages'>
              <p>Pages:</p>
              {tableData.length && [...Array(TOTAL_PAGES)].map((idx,num) => (
              <div onClick={() => setPage(num+1)} key={num}>{num+1}</div>
              ))}
            </div>

          </div>
        </div>
    </div>
  )
}

export default Dashboard
