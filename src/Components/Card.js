import React from 'react'

export default function Card({payload}) {
    const cardStyle="transition duration-300 ease-in-out w-1/4 rounded-lg overflow-hidden m-5 p-6 shadow-lg bg-yellow-200 hover:padding-9";
    const imgStyle="w-full h-96 rounded transition duration-500 ease-in-out";
    const descStyle="px-6 py-4 transition duration-200 ease-in-out";
    const fontDescStyle="font-bold mb-2 text-yellow-700 text-xl transition duration-200 ease-in-out";
    const listStyle="pl-6 text-yellow-700 transition duration-200 ease-in-out ";
    const spanStyle="inline-block bg-gray-200 rounded-full px-3 py-1 m-2 text-sm font-semibold text-gray-700 transition duration-200 ease-in-out";
     const tags=payload.tags.split(',');
    //  console.log(tags);


    
    return (
        <div className={cardStyle}>
          
            <img src={payload.webformatURL} alt="" className={imgStyle}></img>
            <div className={descStyle}>
             <div className={fontDescStyle}>By {payload.user}</div>
            </div>
            <ul>
                <li className={listStyle}>
                    <strong>
                        Views: {payload.views}
                    </strong>
                </li>
                <li className={listStyle}>
                    <strong>
                        Downloads: {payload.downloads}
                    </strong>
                </li>
                <li className={listStyle}>
                    <strong>
                        Likes: {payload.likes}
                    </strong>
                </li>
            </ul>
            <div className={descStyle}>

               {
                   tags.map((el)=> <span className={spanStyle}>
                 #{el}
                </span>)
               
                } 
               
            </div>
        </div>
    )
}
