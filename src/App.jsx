import { QueryClientProvider, QueryClient } from 'react-query';
import Input from "./components/Input";

const queryClient = new QueryClient();

export default function App() {


  return (
    <div className="lg:p-16 w-full min-h-screen flex justify-evenly items-center bg-gradient-to-r from-[#f6d365] to-[#fda085] bg-no-repeat bg-cover text-black overflow-hidden">
      <QueryClientProvider client={queryClient}>  
        <Input className="w-4/5" />
      </QueryClientProvider>
    </div>
  );
}