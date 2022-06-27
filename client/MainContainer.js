import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import EventBox from "./EventBox"
import { useState } from 'react';
import { getData } from "./fakedata";
import { useEffect } from 'react';


const data = getData();

//new get request, the req.params will 

export default function MainContainer (){
    const[data, setData] = useState([]);
    useEffect(() => {
            const url = 'http://localhost:3000/home'
            const fetchData = async () => {
                    try {
                            const response = await fetch(url);
                            const json = await response.json();
                            // console.log(json);
                               setData(json)
                        } catch (err) {
                                console.log("error", error);
                            }
        }
        fetchData();

    }, setData);
    return (
        <div className='mainContainer'>
          <h2>Search Bar</h2>
          <ul>{data.map(info => (
              
        <EventBox
        key={info.id}
        info={info}/>
        ))}
         </ul> 
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