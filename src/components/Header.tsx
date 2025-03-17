/**
 * @copyright 2025 Nhm Develop Solution
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import Logo from './Logo';

/**
 * Assets
 */
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className=''>
      <div className='container'>
        <Logo variant='icon' />
        <Button
          variant='outline'
          size='icon'
          className='lg:hidden'
        >
          <Menu />
        </Button>
      </div>
    </header>
  );
};

export default Header;
