import { QueryClientProvider, QueryClient } from 'react-query';
import Image from "./components/Image";
import Input from "./components/Input";
import bg from "./assets/bg.png"

const queryClient = new QueryClient();

export default function App() {


  return (
    <div className="w-full h-full flex justify-center items-center border-2 border-green-600 bg-[url('./assets/bg.png')] bg-no-repeat bg-cover text-white">
      <QueryClientProvider client={queryClient}>  
        <Input className="w-4/5" />
      </QueryClientProvider>
    </div>
  );
}