import React from "react";
import ReactDOM from "react-dom/client";
import Contenido from './Components/Contenido'
import "./index.css";
import ContextWrapper from "./Context/ContextWrapper";
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import client from "./query-hooks/client";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <ContextWrapper>      
      <Contenido/>
      <ReactQueryDevtools />
    </ContextWrapper>
    </QueryClientProvider>
</React.StrictMode>
);
