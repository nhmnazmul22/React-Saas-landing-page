/**
 * @copyright 2025 Nhm Develop Solution
 * @license Apache-2.0
 */

import { ReactLenis } from 'lenis/react';

/**
 * Components
 */
import Brand from './components/Brand';
import Feature from './components/Feature';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';

const App = () => {
  return (
    <ReactLenis root>
      <div className='isolate overflow-hidden relative'>
        <Header />
        <main>
          <Hero />
          <Brand />
          <Feature />
          <Process />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;
