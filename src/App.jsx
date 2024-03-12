import { useState, useEffect } from "react"
import ImageCard from "./ImageCard"
import ImageSearch from "./ImageSearch"

function App() {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')



  useEffect(() => {
    const API_KEY = '42821287-4de5b1195e86c07237c6bb31f';
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);


  return (
    <div className="container mx-auto">
      
      <ImageSearch searchText={(text)=>setTerm(text)}/>
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">NO IMAGE FOUND</h1>}
      {isLoading ?
        <h1 className="text-6xl text-center mx-auto mt-22">LOADING..................</h1> :
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => <ImageCard key={image.id} image={image} />)}
        </div>
      }
    </div>
  )
}

export default App
