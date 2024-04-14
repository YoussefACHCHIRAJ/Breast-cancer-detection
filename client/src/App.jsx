import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
