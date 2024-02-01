
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
