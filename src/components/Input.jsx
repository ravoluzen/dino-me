import {useState, useEffect} from "react"
import {useQuery} from "react-query";
import useData from "../hooks/useData";
import { Configuration, OpenAIApi } from "openai";
import Image from "./Image";
import dinos from "../assets/dinos.png"

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const [submitText, setSubmitText] = useState('');
    const [query, setQuery] = useState();

    /*const fetchGeneratedText = async () => {
      const configuration = new Configuration({
          apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      });

      const openai = new OpenAIApi(configuration);
          
      const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 50,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      });
      return response.json();
    }*/

    const { data, isPreviousData, isError, isLoading, refetch } = useData(submitText);

    useEffect(() => {
      if(data){
        setQuery((data.choices[0].text).substring(0, (data.choices[0].text).indexOf('-')))
        console.log(query)
      }
    }, [data]);

    const handleInput = (e) => {
      setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitText(inputValue)
      console.log(inputValue)
      console.log(data)
    }

    if(isLoading) return <div><h1 className="text-3xl text-white animate-pulse">Loading...</h1></div>

  
    return (
      <div className="transition ease-in delay-1000 lg:pt-24 pt-12 w-4/5 flex flex-col items-center justify-between gap-8 min-h-full overflow-hidden">
        <h2 className="text-4xl font-rubik font-bold">Dino-ME</h2>
        <img className="rounded w-64 h-64 lg:w-96 lg:h-96" src={dinos} alt="dinos in a rave"/>
        <form className="flex flex-col items-center justify-betweem w-full lg:w-2/5" onSubmit={handleSubmit}>
          <input type="text" placeholder="I am" className="p-2 rounded w-4/5 h-12 lg:h-16 text-xl text-black font-medium" value={inputValue} onChange={handleInput} />
          <button className="mt-4 rounded bg-white lg:text-xl text-black font-bold w-2/5 h-12 lg:h-16" onClick={() => refetch()}type='submit'>Dino Me!</button>
        </form>
        {data && 
        (<div className="w-full md:w-3/5">
          <h1 className="text-3xl font-bold">{query}</h1>
          <p className="text-xl lg:text-3xl break-normal">{data.choices[0].text}</p>
        </div>
        )}
        <div className=" min-h-[40%]">
          {query && <Image queryString={query}/>}
        </div>
      </div>
    );
}

export default Input