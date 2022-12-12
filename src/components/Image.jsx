import { useState, useEffect } from "react";
const Image = ({queryString}) => {
    const [images, setImages] = useState();
    //const { imageData } = useImageData(queryString);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': String(import.meta.env.VITE_RAPID_API_KEY),
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    };
    const query = String(queryString);
    const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${query}&count=6`
    const fetchImageData = async () => {
        const imageData = await fetch(url, options)
            .then(response => response.json());
            //.catch(err => console.error(err));
        setImages(imageData);
        return imageData;
    }

    useEffect(() => {
        fetchImageData();
        console.log('images',images)
    }, [queryString]);
    //console.log("image", imageData)
    return (
    <div className="flex flex-col items-center justify-around lg:flex-row flex-wrap gap-4 w-full border-none">
        {images ? images.value.map((image) => (
            <a key={image.name} href={image.hostPageUrl} className="">
                <img src={image.contentUrl} alt={queryString} className="mb-8 w-72 h-72 items-center rounded object-fill" />
            </a>
        )) :  <div><h1 className="text-3xl text-white">Loading...</h1></div>}
    </div>
    )
}

export default Image