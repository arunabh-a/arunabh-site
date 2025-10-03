'use client';

import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/lib/constants';

const Header = () => {
  const pathname = usePathname();
  
  // Find current route and get its header
  const currentRoute = NAVIGATION_LINKS.find(link => link.href === pathname);
  const headerText = currentRoute?.header || currentRoute?.name || 'Page';

  return (
    <header className='z-50 w-full h-20 sticky top-0 bg-gray-400 rounded-b-2xl border-4 border-t-0 border-dotted flex items-center justify-center flex-shrink-0'>
      <div>
        <h1 className='text-white font-semibold text-4xl'>{headerText}</h1>
      </div>
    </header>
  );
};

export default Header;