import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
<div className='Items' style={{ display: 'flex', justifyContent: 'center' }}>
  <img className='avatar' src="https://www.creativefabrica.com/wp-content/uploads/2022/03/09/Woman-Icon-Teen-Profile-Graphics-26722130-2-580x387.png" alt="" />
</div>

<div className='Items' style={{ display: 'flex', justifyContent: 'center' }}>
<nav>
        <ul>
          <Link className='sidebarTexts' to='/teachers'><li>HOME</li></Link>
          <Link className='sidebarTexts' to='/teachers/Students'><li>Students</li></Link>
          <Link className='sidebarTexts' to='/teachers/Attendance'><li>Attendance</li></Link>
          <Link className='sidebarTexts' to='/teachers/Mark Entry'><li>Mark Entry</li></Link>
          <Link className='sidebarTexts' to='/teachers/Teacher Time Table'><li>Teacher Time Table</li></Link>


        </ul>
      </nav>

    </div>

</div>
  );
};

export default Sidebar;
// <div className="profile-section">
//         <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
//         <h3>NAME</h3>
//       </div>