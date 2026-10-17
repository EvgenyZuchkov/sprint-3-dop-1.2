import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux';
import {RootStateOrAny, store} from 'store';
import {App} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store as RootStateOrAny }>
    <App/>
  </Provider>
)
