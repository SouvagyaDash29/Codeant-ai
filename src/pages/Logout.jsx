import React, { useState } from 'react';
import ConfirmationDialog from './components/ConfirmationDialog';

const Logout = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="size-full flex flex-col items-center justify-center">
      You are in Logout page. if you want to log out 
      <button
        onClick={() => setIsDialogOpen(true)}
        className="px-4 py-2 text-blue-700 underline underline-offset-2 rounded "
      >
        CLick here
      </button>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        title="Logout"
        message="Are you sure you want to Logout."
        onCancel={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Logout;
