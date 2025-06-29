// --- ui/Modal.tsx ---
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-full max-w-md">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-black">&times;</button>
        {children}
      </div>
    </div>
  );
};