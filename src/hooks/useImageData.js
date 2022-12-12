import { useState, useEffect } from "react";
import { useQuery } from "react-query";

export default function useImageData({queryString}) {
    //const [imageData, setImageData] = useState();
    //const { data } = useQuery('data', {enabled:false, refetchOnMount:false});

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': String(import.meta.env.VITE_RAPID_API_KEY),
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    };

    const fetchImageData = async () => {
        const imageData = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${queryString}`, options)
            .then(response => response.json()).then(res => console.log(res))
            //.catch(err => console.error(err));
        return imageData;
    }

    return useQuery('imageData', fetchImageData, {enabled: false, refetchOnMount: false});
}