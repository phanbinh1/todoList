import React from 'react';
import SidebarItem from './SidebarItem';
import './styles.css';

function Sidebar() {
  const sidebarData = [
    { 
      title: 'Todo List',
      path: '/',
    },
    { 
      title: 'Products',
      path: '/products',
    }
  ];

  const sidebarMap = () => {
    return sidebarData.map((item, index) => {
      return (
        <SidebarItem key={index} itemSidebar={item} />
      );
    });
  }
  
  return (
    <div className="container-sidebar">
      {sidebarMap()}
    </div>
  );
}

export default Sidebar;
