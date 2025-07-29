

import React, { useState } from 'react';
import { Search, Plus, User, Home,CheckCircle } from 'lucide-react';
import TemplateSelector from './TemplateSelector';
import BoardNameModal from './BoardNameModal';

import { useNavigate } from 'react-router-dom';

const Navbar = ({ 
  
  onCreateBoard, 
  onNavigateHome, 
  showHomeButton = false 
}) => {
  const navigate = useNavigate();
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setIsTemplateModalOpen(false);
    setIsNameModalOpen(true);
  };
  function hi (){
    navigate("/homepage")
  }
  const handleCreateBoard = (name) => {
    if (selectedTemplate && onCreateBoard) {
      onCreateBoard(name, selectedTemplate);
    }
    setIsNameModalOpen(false);
    setSelectedTemplate(null);
  };
  function home(){
    navigate("/")
  }

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section - Logo/Brand */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  TaskFlow
                </span>
              </div>

              {/* Home Button (shown on board pages) */}
              {showHomeButton && onNavigateHome && (
                <button
                  onClick={hi}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <Home className="h-4 w-4" />
                  <span className="text-sm font-medium">Home</span>
                </button>
              )}
            </div>

            {/* Center section - Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search boards, cards, and more..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 text-sm placeholder-gray-500"
                />
              </div>
            </div>

            {/* Right section - Actions and Profile */}
            <div className="flex items-center space-x-3">
              {/* Create Button */}
              <button 
                onClick={() => setIsTemplateModalOpen(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                data-create-button
              >
                <Plus className="h-4 w-4 mr-2" />
                Create
              </button>

              {/* Profile Button */}
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2" onClick ={home}>
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Template Selection Modal */}
      <TemplateSelector
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSelectTemplate={handleTemplateSelect}
      />

      {/* Board Name Modal */}
      <BoardNameModal
        isOpen={isNameModalOpen}
        onClose={() => setIsNameModalOpen(false)}
        template={selectedTemplate}
        onCreateBoard={handleCreateBoard}
      />
    </>
  );
};

export default Navbar;
