

import React from 'react';
import { X, Columns3, FolderKanban, Zap, Calendar, Bug, User } from 'lucide-react';
import { boardTemplates } from '../data/templates';

const iconMap = {
  Columns3,
  FolderKanban,
  Zap,
  Calendar,
  Bug,
  User
};

const TemplateSelector = ({ isOpen, onClose, onSelectTemplate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Choose a Template</h2>
            <p className="text-gray-600 mt-1">Start with a pre-built board or create from scratch</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Templates Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {boardTemplates.map((template) => {
              const IconComponent = iconMap[template.icon];

              return (
                <button
                  key={template.id}
                  onClick={() => onSelectTemplate(template)}
                  className="group text-left p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {/* Template Preview */}
                  <div 
                    className="w-full h-24 rounded-lg mb-4 flex items-center justify-center"
                    style={{ backgroundColor: template.color }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Template Info */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {template.description}
                  </p>

                  {/* Lists Preview */}
                  <div className="flex flex-wrap gap-1">
                    {template.lists.slice(0, 3).map((list, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
                      >
                        {list}
                      </span>
                    ))}
                    {template.lists.length > 3 && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                        +{template.lists.length - 3} more
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
