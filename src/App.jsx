import { QueryClientProvider, QueryClient } from 'react-query';
import Image from "./components/Image";
import Input from "./components/Input";
import bg from "./assets/bg.png"

const queryClient = new QueryClient();

export default function App() {


  return (
    <div className="lg:p-16 w-full min-h-screen flex justify-evenly items-center bg-[url('./assets/bg.png')] bg-no-repeat bg-cover text-white overflow-hidden">
      <QueryClientProvider client={queryClient}>  
        <Input className="w-4/5" />
      </QueryClientProvider>
    </div>
  );
}