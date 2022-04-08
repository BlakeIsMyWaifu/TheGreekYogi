import ReactDOMClient from 'react-dom/client'

import App from './App'

const container = document.getElementById('app') as HTMLElement

const root = ReactDOMClient.createRoot(container)

root.render(<App />)