


import React, { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
};

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState({
    id: '1',
    name: 'My Team',
    description: 'Collaborate on projects together',
    members: [
      {
        id: '1',
        email: 'you@example.com',
        name: 'You',
        role: 'owner',
        joinedAt: new Date(),
        status: 'active'
      }
    ],
    createdAt: new Date(),
    ownerId: '1'
  });

  const inviteMember = (email, role) => {
    const newMember = {
      id: Date.now().toString(),
      email: email.trim(),
      name: email.split('@')[0],
      role,
      joinedAt: new Date(),
      status: 'pending'
    };

    setTeam(prev => ({
      ...prev,
      members: [...prev.members, newMember]
    }));
  };

  const removeMember = (memberId) => {
    setTeam(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== memberId)
    }));
  };

  const updateMemberRole = (memberId, newRole) => {
    setTeam(prev => ({
      ...prev,
      members: prev.members.map(member =>
        member.id === memberId ? { ...member, role: newRole } : member
      )
    }));
  };

  return (
    <TeamContext.Provider value={{
      team,
      inviteMember,
      removeMember,
      updateMemberRole
    }}>
      {children}
    </TeamContext.Provider>
  );
};
