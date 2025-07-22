

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamCollaboration from '../components/TeamCollaboration';

const TeamCollaborationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/homepage');
  };

  const handleCreateTeamBoard = () => {
    navigate('/team/create-board');
  };

  return (
    <TeamCollaboration
      onBack={handleBack}
      onCreateTeamBoard={handleCreateTeamBoard}
    />
  );
};

export default TeamCollaborationPage;
