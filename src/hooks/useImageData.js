import { useState, useEffect } from "react";
import { useQuery } from "react-query";

export default function useImageData({queryString}) {
    //const [imageData, setImageData] = useState();
    //const { data } = useQuery('data', {enabled:false, refetchOnMount:false});



    return useQuery('imageData', fetchImageData, {enabled: false, refetchOnMount: false});
}