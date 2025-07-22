


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, Plus, User, Calendar } from 'lucide-react';
// import Navbar1 from '../components/Navbar1';
// import { useBoards } from '../context/BoardContext';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const { boards, createBoard } = useBoards();

//   const handleCreateBoard = (name, template) => {
//     const newBoard = createBoard(name, template);
//     navigate(`/board/${newBoard.id}`);
//   };

//   const handleSelectBoard = (boardId) => {
//     navigate(`/board/${boardId}`);
//   };
  

//   const handleNavigateToTeamCollaboration = () => {
//     navigate('/team');
//   };

//   const handleNavigateToCalendar = () => {
//     navigate('/calendar');
//   };

//   const handleNavigateToBrowseBoards = () => {
//     navigate('/boards');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Navigation Bar */}
//       <Navbar1 onCreateBoard={handleCreateBoard} />

//       {/* Main Content Area */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Welcome to TaskFlow
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Organize your projects and boost productivity
//           </p>

//           {/* Recent Boards */}
//           {boards.length > 0 && (
//             <div className="mb-12">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-900">Recent Boards</h2>
//                 <button
//                   onClick={handleNavigateToBrowseBoards}
//                   className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
//                 >
//                   View All Boards →
//                 </button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
//                 {boards.slice(-8).map((board) => (
//                   <button
//                     key={board.id}
//                     onClick={() => handleSelectBoard(board.id)}
//                     className="group text-left p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 bg-white"
//                   >
//                     <div
//                       className="w-full h-20 rounded-lg mb-3 flex items-center justify-center text-white font-medium"
//                       style={{ backgroundColor: board.color }}
//                     >
//                       {board.name}
//                     </div>
//                     <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
//                       {board.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 capitalize">
//                       {board.template.replace('-', ' ')}
//                     </p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Quick Actions */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             <button
//               onClick={() => document.querySelector('[data-create-button]')?.click()}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 text-left"
//             >
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Plus className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Board</h3>
//               <p className="text-gray-600 text-sm">Start organizing your tasks with a new board</p>
//             </button>

//             <button
//               onClick={handleNavigateToBrowseBoards}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 text-left"
//             >
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Search className="h-6 w-6 text-indigo-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Boards</h3>
//               <p className="text-gray-600 text-sm">Find and access your existing project boards</p>
//             </button>

//             <button
//               onClick={handleNavigateToTeamCollaboration}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 text-left"
//             >
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <User className="h-6 w-6 text-purple-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Collaboration</h3>
//               <p className="text-gray-600 text-sm">Invite team members and work together</p>
//             </button>

//             <button
//               onClick={handleNavigateToCalendar}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 text-left"
//             >
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Calendar className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendar</h3>
//               <p className="text-gray-600 text-sm">Schedule events and manage your time</p>
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, User, Calendar } from 'lucide-react';
import Navbar1 from '../components/Navbar1';
import { useBoards } from '../context/BoardContext';
import './HomePage.css'; // Import your custom CSS file

const HomePage = () => {
  const navigate = useNavigate();
  const { boards, createBoard } = useBoards();

  const handleCreateBoard = (name, template) => {
    const newBoard = createBoard(name, template);
    navigate(`/board/${newBoard.id}`);
  };

  const handleSelectBoard = (boardId) => {
    navigate(`/board/${boardId}`);
  };

  const handleNavigateToTeamCollaboration = () => {
    navigate('/team');
  };

  const handleNavigateToCalendar = () => {
    navigate('/calendar');
  };

  const handleNavigateToBrowseBoards = () => {
    navigate('/boards');
  };

  return (
    <div className="homepage-container">
      <Navbar1 onCreateBoard={handleCreateBoard} />

      <main className="homepage-main">
        <div className="homepage-center">
          <h1 className="homepage-title">Welcome to TaskFlow</h1>
          <p className="homepage-subtitle">Organize your projects and boost productivity</p>

          {boards.length > 0 && (
            <div className="recent-boards">
              <div className="recent-boards-header">
                <h2 className="recent-boards-title">Recent Boards</h2>
                <button onClick={handleNavigateToBrowseBoards} className="view-all-link">
                  View All Boards →
                </button>
              </div>
              <div className="boards-grid">
                {boards.slice(-8).map((board) => (
                  <button
                    key={board.id}
                    onClick={() => handleSelectBoard(board.id)}
                    className="board-card"
                  >
                    <div
                      className="board-preview"
                      style={{ backgroundColor: board.color }}
                    >
                      {board.name}
                    </div>
                    <h3 className="board-name">{board.name}</h3>
                    <p className="board-template">
                      {board.template.replace('-', ' ')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="quick-actions">
            <button
              onClick={() => document.querySelector('[data-create-button]')?.click()}
              className="action-card"
            >
              <div className="action-icon blue-bg">
                <Plus className="icon" />
              </div>
              <h3 className="action-title">Create Board</h3>
              <p className="action-desc">Start organizing your tasks with a new board</p>
            </button>

            <button onClick={handleNavigateToBrowseBoards} className="action-card">
              <div className="action-icon indigo-bg">
                <Search className="icon" />
              </div>
              <h3 className="action-title">Browse Boards</h3>
              <p className="action-desc">Find and access your existing project boards</p>
            </button>

            <button onClick={handleNavigateToTeamCollaboration} className="action-card">
              <div className="action-icon purple-bg">
                <User className="icon" />
              </div>
              <h3 className="action-title">Team Collaboration</h3>
              <p className="action-desc">Invite team members and work together</p>
            </button>

            <button onClick={handleNavigateToCalendar} className="action-card">
              <div className="action-icon green-bg">
                <Calendar className="icon" />
              </div>
              <h3 className="action-title">Calendar</h3>
              <p className="action-desc">Schedule events and manage your time</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
