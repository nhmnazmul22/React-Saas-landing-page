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
 * Constants
 */
import { navMenu } from '@/constants';

/**
 * Assets
 */
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const Header = () => {
  return (
    <header className='h-16 grid grid-cols-1 items-center md:h-20 lg:24'>
      <div className='container flex justify-between'>
        <Logo variant='icon' />
        <Popover>
          <PopoverTrigger>
            <Button
              variant='outline'
              size='icon'
              className='lg:hidden cursor-pointer'
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='end'
            className='bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden'
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
