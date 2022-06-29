import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import EventBox from "./EventBox"
import { useState } from 'react';
import { getData } from "./fakedata";
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';


const data = getData();



//new get request, the req.params will 

export default function MainContainer (){
    const[data, setData] = useState([]);
    const[sortType, setSortType] = useState('title');

    //fetch data
    useEffect(() => {
        const url = 'http://localhost:3000/home'
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json)
            } catch (err) {
                    console.log("error", error);
            }
        }
        fetchData();
    }, [setData]); //only re render if setData is being called

    useEffect(() => {
        const sortArray = type => {
            const types = {
               title: 'title',
               date: 'date',
               activity_type: 'activity_type' 
            };
            const sortProperty = types[type];
            console.log(types[type])
            const sorted = [...data].sort((a,b) => a[sortProperty].localeCompare(b[sortProperty]));
            console.log(sorted)
            setData(sorted);
        };
        sortArray(sortType)
    }, [sortType]); //only run if sortType changes
  

    return (
        <div className='mainContainer'>
            {/* <NavBar/> */}
            <label id = "sortText">Sort By: &nbsp;</label>
        <select id="dropDown" onChange={(e) => setSortType(e.target.value)}>
            <option value="title">Title</option>
            <option value="date">Date</option>
            <option value="activity_type">Activity</option>
        </select>
          <ul>{data.map(info => (<EventBox key={info.id} info={info}/>))}</ul> 
       </div>
    )}




    // const info = fetchData();
    // console.log(info)
    // const [listItems, setListItems] = useState(Array.from(Arr))
    //  const [eventBox, setEventBox] = useState(data[0]);

// export default function MainContainer (){
//         const [event, setEvent] = useState([]);

// //   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3000/home`)
//       .then((res) => res.json())
//       .then((data) => setEvent(data));
//   }, []);

//   if (event === undefined) {
//     return <>Still loading...</>;
//   }

//   return (
//     <div className='mainContainer'>
//     <h2>Search Bar</h2>
//     <ul>{data.map(item => (
//   <EventBox
//   key={item.id}
//   item={data}/>
//    </ul> ))}
//  </div>
// }
    // const url = 'http://localhost:3000/home'
    
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const info = await response.json();
    //         return info;
    //     }catch (err) {
    //         console.log("error", error);
    //     }
    // }
    // const moveData = async () => {
    //     const info = await fetchData();
    //     console.log(info)
    //     const eventBoxFeed = info.map(el => 
    //     <EventBox 
    //             // onComment={}
    //             key={el.id}
    //             info={el} />
    //         )
    //     return (
    //         <div className='mainContainer'>
    //           <h2>Search Bar</h2>
    //           <ul>{eventBoxFeed}</ul>
    //         </div>
    //     )
    // }
    // moveData();
    // }



    //infinite scroll set up
// const useInfiniteLoading = (props) => {
//     const { getItems } = props;
//     const [items, setItems] = useState([]);
//     const pageToLoad = useRef (new URLSearchParams(window.location.search).get('page') || 1);
//     const initialPageLoaded = useRef(false);
//     const [hasMore, setHasMore] = useState(true);

//     const loadItems = async () => {
//         const data = await getItems({
//             page: pageToLoad.current
//         });
//         setHasMore(data.totalPages > pageToLoad.current);
//         setItems(prevItems => [...prevItems, ...data]);
//     };
//     useEffect(() => {
//         if (initialPageLoaded.current) {
//             return;
//         }
//         loadItems();
//         initialPageLoaded.current = true;
//     }, [loadItems])

//     return {
//         items,
//         hasMore,
//         loadItems
//     };
// }
// export default MyList = () => {
//    const { items, hasMore, loadItems } = useInfiniteLoading ({ 
//      getItems: ({ call api endpoint })
//})
//return (
//     <div>
//         <ul>
//             {items.map (item => (
//                 <li key={item.id}>
//                     {item.name}
//                 </li>
//             ))}
//         </ul>
//         {hasMore && 
//         <button onClick={() => loadItems()}>Load More</button>
//         }
//     </div>
//   );
// }

// const DropDownSort = () => {
//     const dropdownRef = useRef(null);
//     const [isActive, setIsActive] = useState(false);
//     const onClick = () => setIsActive(!isActive);
//     return (
//         <div className='menu-container'>
//             <button onClick={onClick} className="menu-trigger">
//                 <span>Sort By?</span>
//             </button>
//             <nav ref={dropdovnRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
//                 <ul>
//                     <li>Alphabet</li>
//                     <li>Date</li>
//                     <li>Activity</li>
//                 </ul>
//             </nav>
//         </div>
//     )

// }