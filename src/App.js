import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Remove BrowserRouter import
import './App.css';

// Import student components
import CGPA from './components/Students/Cgpa/Cgpa';
import FeesDues from './components/Students/Fees/DueFees/DueFees';
import FeesHome from './components/Students/Fees/HomeFees/HomeFees';
import PayFees from './components/Students/Fees/PayFees/PayFees';
import Navbar from './components/Students/Home/Elements/Navbar';
import Sidebar from './components/Students/Home/Elements/Sidebar';
import Home from './components/Students/Home/Home';
import Profile from './components/Students/Profile/Profile';
import ProgressPage from './components/Students/Progress/Progress';
import CIA1 from './components/Students/Result/CIA_1/CIA_1';
import CIA2 from './components/Students/Result/CIA_2/CIA_2';
import ResultHome from './components/Students/Result/ResultHome/ResultHome';
import UNIVERSITYRESULT from './components/Students/Result/UnivercityResult/UnivercityResult';

import StudentsLogin from './components/Students/StudentsLogin/StudentsLogin';
import AttendanceEntry from './components/Teachers/Attendance/AttendanceEntry';
import TeacherNavbar from './components/Teachers/Home/Elements/Navbar';
import TeachersSidebar from './components/Teachers/Home/Elements/Sidebar';
import TeachersHome from './components/Teachers/Home/Home';
import CIA1ENTRY from './components/Teachers/MarkEntry/CIA1_Entry/CIA1_Entry';
import CIA2ENTRY from './components/Teachers/MarkEntry/CIA2_Entry/CIA2_Entry';
import MarkEntryHome from './components/Teachers/MarkEntry/MarkEntryHome/MarkEntryHome';
import AddStudentForm from './components/Teachers/StudentsList/AddStudent/AddStudent';
import StudentList from './components/Teachers/StudentsList/StudentList';
import TeacherTimetable from './components/Teachers/TimeTable/TimeTable';
function App() {
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
    const location = useLocation();
    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            setSidebarOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Determine if the current route is for teachers
    const isTeacherRoute = location.pathname.startsWith('/teachers');
    const isLogin = location.pathname.startsWith('/login');
    return (
        <div className="app-container" >
            {isTeacherRoute ? (
                <>
                    <TeacherNavbar toggleSidebar={toggleSidebar} />
                    <div className="content-wrapper">
                        <TeachersSidebar isOpen={sidebarOpen} />
                        <div className={`main-content ${sidebarOpen ? 'shift-right' : 'full-width'}`}>
                            <Routes>
                                <Route path='/teachers/Attendance' element={<AttendanceEntry />} />
                                <Route path="/teachers/" element={<TeachersHome />} />
                                <Route path="/teachers/Students" element={<StudentList />} />
                                <Route path='/teachers/mark entry' element={<MarkEntryHome />} />
                                <Route path="/teachers/CIA-1" element={<CIA1ENTRY />} />
                                <Route path="/teachers/CIA-2" element={<CIA2ENTRY />} />
                                <Route path="/teachers/Teacher Time Table" element={<TeacherTimetable />} />
                                <Route path="/teachers/add-student" element={<AddStudentForm />} />

                            </Routes>
                        </div>
                    </div>
                </>
            )
                : isLogin ? (
                    <>
                        <div>
                            <Routes>
                            <Route path="/login/students" element={<StudentsLogin />} />

                            </Routes>

                        </div>
                    </>
                ):
                    (
                        <>
                            <Navbar toggleSidebar={toggleSidebar} />
                            <div className="content-wrapper">
                                <Sidebar isOpen={sidebarOpen} />
                                <div className={`main-content ${sidebarOpen ? 'shift-right' : 'full-width'}`}>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/profile" element={<Profile />} />
                                        <Route path="/cgpa" element={<CGPA />} />
                                        <Route path="/result" element={<ResultHome />} />
                                        <Route path="/CIA-1" element={<CIA1 />} />
                                        <Route path="/CIA-2" element={<CIA2 />} />
                                        <Route path="/UNIVERSITY RESULT" element={<UNIVERSITYRESULT />} />
                                        <Route path="/Fees" element={<FeesHome />} />
                                        <Route path="/due fees" element={<FeesDues />} />
                                        <Route path="/Pay fees" element={<PayFees />} />
                                        <Route path="/PROGRESS" element={<ProgressPage />} />

                                    </Routes>
                                </div>
                            </div>
                        </>
                    )

                
            }
        </div>
    );
}

export default App;
