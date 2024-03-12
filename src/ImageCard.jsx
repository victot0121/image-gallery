
// export default function ImageCard({ image }) {
//     const tags = image.tags ? image.tags.split(',') : [];

//     return (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg">
//             <img src={image.webformatURL} alt="Random" className="w-full"/>
//             <div className="px-6 py-4">
//                 <div className="font-bold text-red-600 text-xl mb-2"></div>
//                 <ul>
//                     <li><strong className="pr-2">VIEWS:</strong>{image.views}</li>
//                     <li><strong className="pr-2">DOWNLOADS:</strong>{image.downloads}</li>
//                     <li><strong className="pr-2">LIKES:</strong>{image.likes}</li>
//                 </ul>
//             </div>
//             <div className="px-6 py-4">
//                 {tags.map((tag, index) => (
//                     <span key={index} className="inline-block bg-gray-200 rounded-full
//                      px-3 py-1 text-sm font-semibold text-grey-700 mr-2">
//                         #{tag}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// }

import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="Random" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-red-600 text-xl mb-2">Photo by {image.user}</div>
                <ul>
                    <li><strong>Views: </strong>{image.views}</li>
                    <li><strong>Downloads: </strong>{image.downloads}</li>
                    <li><strong>Likes: </strong>{image.likes}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
            {tags.map((tag, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
            )}
            </div>
        </div>
    )
}

export default ImageCard