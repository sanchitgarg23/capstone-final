
export const boardTemplates = [
  {
    id: 'kanban',
    name: 'Kanban Board',
    description: 'Organize tasks with To Do, Doing, and Done columns',
    color: '#3B82F6',
    icon: 'Columns3',
    lists: ['To Do', 'In Progress', 'Done']
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Track project phases from planning to completion',
    color: '#8B5CF6',
    icon: 'FolderKanban',
    lists: ['Backlog', 'Planning', 'In Progress', 'Review', 'Complete']
  },
  {
    id: 'sprint-planning',
    name: 'Sprint Planning',
    description: 'Agile sprint board for development teams',
    color: '#10B981',
    icon: 'Zap',
    lists: ['Sprint Backlog', 'In Development', 'Testing', 'Done']
  },
  {
    id: 'content-calendar',
    name: 'Content Calendar',
    description: 'Plan and track content creation workflow',
    color: '#F59E0B',
    icon: 'Calendar',
    lists: ['Ideas', 'Writing', 'Review', 'Scheduled', 'Published']
  },
  {
    id: 'bug-tracking',
    name: 'Bug Tracking',
    description: 'Track and resolve software bugs efficiently',
    color: '#EF4444',
    icon: 'Bug',
    lists: ['Reported', 'Investigating', 'In Progress', 'Testing', 'Resolved']
  },
  {
    id: 'personal-tasks',
    name: 'Personal Tasks',
    description: 'Simple personal task management',
    color: '#EC4899',
    icon: 'User',
    lists: ['Today', 'This Week', 'Later', 'Completed']
  }
];
