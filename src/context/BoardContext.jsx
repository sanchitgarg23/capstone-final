
import React, { createContext, useContext, useState } from 'react';
import { boardTemplates } from '../data/templates'; // You might need this if used somewhere

const BoardContext = createContext();  //custom hook

export const useBoards = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoards must be used within a BoardProvider');
  }
  return context;
};

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  const createBoard = (name, template) => {
    const newBoard = {
      id: Date.now().toString(),
      name,
      color: template.color,
      template: template.id,
      createdAt: new Date(),
      lists: template.lists.map((listTitle, index) => ({
        id: `${Date.now()}-${index}`,
        title: listTitle,
        cards: []
      }))
    };

    setBoards(prev => [...prev, newBoard]);
    return newBoard;
  };

  const updateBoard = (updatedBoard) => {
    setBoards(prev => prev.map(board =>
      board.id === updatedBoard.id ? updatedBoard : board
    ));
  };

  const getBoardById = (id) => {
    return boards.find(board => board.id === id);
  };

  return (
    <BoardContext.Provider value={{
      boards,
      createBoard,
      updateBoard,
      getBoardById
    }}>
      {children}
    </BoardContext.Provider>
  );
};
