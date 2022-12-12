import { useQuery } from "react-query";

export default function useData(submitText){

    let prompt = `Name a dinosaur that suits someone who's ${submitText}. Then describe it in one sentence after a hyphen.`;
    let queryString = '';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(import.meta.env.VITE_OPENAI_API_KEY)
      },
      body: JSON.stringify({
        'prompt': prompt,
        'temperature': 1,
        'max_tokens': 50,
        'top_p': 1,
        'frequency_penalty': 0,
        'presence_penalty': 0,
      })
    };
    const fetchData = async () => {
      const data = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions)
        .then(response => response.json());
      console.log((data.choices[0].text).substring(0, (data.choices[0].text).indexOf('-')));
      return data;
    }

    return useQuery('data', fetchData, {enabled: false, refetchOnMount: false});
}