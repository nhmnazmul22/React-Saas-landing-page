/**
 * @copyright 2025 Nhm Develop Solution
 * @license Apache-2.0
 */

import { ReactLenis } from 'lenis/react';

/**
 * Components
 */
import Brand from './components/Brand';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <ReactLenis root>
      <div className='isolate overflow-hidden relative'>
        <Header />
        <main>
          <Hero />
          <Brand />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;
