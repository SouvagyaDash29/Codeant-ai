import React from 'react';

const ConfirmationDialog = ({ isOpen, title, message, onCancel }) => {
  if (!isOpen) return null;
  const handleLogOut = () => {
	window.location.href = `/Signin`
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
