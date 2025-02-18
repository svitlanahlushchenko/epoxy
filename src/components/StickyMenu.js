import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const menuItems = [
  { label: 'O živici', id: 'section1' },
  { label: 'Využitie', id: 'section2' },
  { label: 'Materiály', id: 'section3' },
  { label: 'Pracovné povrchy', id: 'section4' },
  { label: 'Farbivá', id: 'section5' },
  { label: 'Bubliny', id: 'section6' },
  { label: 'Bezpečnosť', id: 'section7' },
  { label: 'Oprava chýb', id: 'section8' },
  { label: 'Údržba hotových výrobkov', id: 'section9' },
];

const StickyMenu = () => {
  return (
    <ul className='sticky-menu'>
      {menuItems.map(item => (
        <li className='sticky-menu__item' key={item.id}>
          <Link smooth to={`#${item.id}`}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StickyMenu;
