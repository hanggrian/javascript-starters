import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AnotherView from './another-view';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AnotherView/>
    </StrictMode>
);
