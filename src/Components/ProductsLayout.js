import React from 'react';
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
export default function ProductsLayout() {
  return (
    <><ul >
    <li>
      <NavLink
        to="allProducts"
        
   
        end
      >
        All Events
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/events/new"
       
      >
        New Event
      </NavLink>
    </li>
  </ul>
    <Outlet />
    </>
  )
}
