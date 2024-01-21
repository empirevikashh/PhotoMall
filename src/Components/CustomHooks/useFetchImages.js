import { useDispatch } from "react-redux";
import { addAllImageData } from "../../Utils/appSlice";

export const useFetchImages = ()=> {
  const dispatch = useDispatch();
  
  const getImages = async (apiKey,textData) => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${textData}&image_type=photo`)
      // fetch(
      //   `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      //     textData
      //   )}&image_type=photo`
      // );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // console.log(data);
      
      dispatch(addAllImageData(data.hits))
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return getImages;
}
