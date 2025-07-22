

import React, { useState } from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import TemplateSelector from './TemplateSelector';
import BoardNameModal from './BoardNameModal';

const TeamBoardCreation = ({ 
  onBack, 
  onCreateBoard, 
  teamMembers 
}) => {
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(true);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setIsTemplateModalOpen(false);
    setIsNameModalOpen(true);
  };

  const handleCreateBoard = (name) => {
    if (selectedTemplate) {
      onCreateBoard(name, selectedTemplate, selectedMembers);
    }
  };

  const toggleMemberSelection = (memberId) => {
    setSelectedMembers(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back to Team</span>
              </button>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold text-gray-900">Create Team Board</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create a Team Board</h2>
          <p className="text-gray-600">Choose a template and invite team members to collaborate</p>
        </div>

        {/* Team Members Selection */}
        {!isTemplateModalOpen && !isNameModalOpen && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assign Team Members</h3>
            <p className="text-sm text-gray-600 mb-4">Select which team members should have access to this board</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {teamMembers.map((member) => (
                <label
                  key={member.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedMembers.includes(member.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(member.id)}
                    onChange={() => toggleMemberSelection(member.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-xs">
                    {member.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                    <p className="text-xs text-gray-500 truncate">{member.email}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsTemplateModalOpen(true)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Back to Templates
              </button>
              <button
                onClick={() => setIsNameModalOpen(true)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Template Selection Modal */}
      <TemplateSelector
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSelectTemplate={handleTemplateSelect}
      />

      {/* Board Name Modal with Member Assignment */}
      {isNameModalOpen && selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <BoardNameModal
              isOpen={true}
              onClose={() => setIsNameModalOpen(false)}
              template={selectedTemplate}
              onCreateBoard={handleCreateBoard}
            />
            
            {/* Selected Members Preview */}
            {selectedMembers.length > 0 && (
              <div className="px-6 pb-6">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Board Members ({selectedMembers.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMembers.map(memberId => {
                      const member = teamMembers.find(m => m.id === memberId);
                      return member ? (
                        <div key={memberId} className="flex items-center space-x-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                            {member.name.charAt(0).toUpperCase()}
                          </div>
                          <span>{member.name}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamBoardCreation;
