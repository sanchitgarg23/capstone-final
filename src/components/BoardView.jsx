
import React, { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import './BoardView.css'; // Import the new CSS file

const BoardView = ({ board, onUpdateBoard }) => {
  const [newListTitle, setNewListTitle] = useState('');
  const [isAddingList, setIsAddingList] = useState(false);

  const addNewList = () => {
    if (newListTitle.trim()) {
      const newList = {
        id: Date.now().toString(),
        title: newListTitle.trim(),
        cards: [],
      };
      
      const updatedBoard = {
        ...board,
        lists: [...board.lists, newList],
      };
      
      onUpdateBoard(updatedBoard);
      setNewListTitle('');
      setIsAddingList(false);
    }
  };

  const addCard = (listId, cardTitle) => {
    if (cardTitle.trim()) {
      const newCard = {
        id: Date.now().toString(),
        title: cardTitle.trim(),
      };

      const updatedBoard = {
        ...board,
        lists: board.lists.map(list =>
          list.id === listId
            ? { ...list, cards: [...list.cards, newCard] }
            : list
        ),
      };

      onUpdateBoard(updatedBoard);
    }
  };

  return (
    <div 
      className="board-view-container"
      style={{ backgroundColor: board.color + '20' }}
    >
      <div className="board-view-content">
        {/* Board Header */}
        <div className="board-header">
          <h1 className="board-title">{board.name}</h1>
          <div className="board-meta">
            <span className="board-meta-template">{board.template.replace('-', ' ')} Template</span>
            <span>•</span>
            <span>{board.lists.length} lists</span>
            <span>•</span>
            <span>{board.lists.reduce((acc, list) => acc + list.cards.length, 0)} cards</span>
          </div>
        </div>

        {/* Lists Container */}
        <div className="lists-container">
          {/* Existing Lists */}
          {board.lists.map((list) => (
            <ListComponent
              key={list.id}
              list={list}
              onAddCard={(cardTitle) => addCard(list.id, cardTitle)}
            />
          ))}

          {/* Add New List */}
          <div className="list-wrapper">
            {isAddingList ? (
              <div className="add-form">
                <input
                  type="text"
                  value={newListTitle}
                  onChange={(e) => setNewListTitle(e.target.value)}
                  placeholder="Enter list title..."
                  className="add-item-input"
                  autoFocus
                  onKeyPress={(e) => e.key === 'Enter' && addNewList()}
                />
                <div className="add-item-actions">
                  <button onClick={addNewList} className="btn btn-sm btn-primary">
                    Add List
                  </button>
                  <button
                    onClick={() => {
                      setIsAddingList(false);
                      setNewListTitle('');
                    }}
                    className="btn btn-sm btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingList(true)}
                className="add-list-button"
              >
                <Plus />
                <span className="add-list-button-text">Add another list</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ListComponent = ({ list, onAddCard }) => {
  const [newCardTitle, setNewCardTitle] = useState('');
  const [isAddingCard, setIsAddingCard] = useState(false);

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      onAddCard(newCardTitle.trim());
      setNewCardTitle('');
      setIsAddingCard(false);
    }
  };

  return (
    <div className="list-wrapper">
      <div className="list-component">
        {/* List Header */}
        <div className="list-header">
          <h3 className="list-title">{list.title}</h3>
          <button className="list-options-button">
            <MoreHorizontal />
          </button>
        </div>

        {/* Cards */}
        <div className="cards-container">
          {list.cards.map((card) => (
            <div key={card.id} className="card-item">
              <p className="card-title">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Add Card */}
        {isAddingCard ? (
          <div className="add-card-form">
            <textarea
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              placeholder="Enter a title for this card..."
              className="add-item-input add-item-textarea"
              rows={3}
              autoFocus
            />
            <div className="add-item-actions">
              <button onClick={handleAddCard} className="btn btn-sm btn-primary">
                Add Card
              </button>
              <button
                onClick={() => {
                  setIsAddingCard(false);
                  setNewCardTitle('');
                }}
                className="btn btn-sm btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setIsAddingCard(true)} className="add-card-button">
            <Plus />
            <span>Add a card</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default BoardView;