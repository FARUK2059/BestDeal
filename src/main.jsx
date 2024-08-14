

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import AuthProvider from './Authenication/AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from '@tanstack/react-query'
import Router from './Components/Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <AuthProvider> */}
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto open-sans-font '>
            <RouterProvider router={Router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    {/* </AuthProvider> */}

  </React.StrictMode>,
)