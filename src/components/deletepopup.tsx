import React from "react";

const DeletePopup: React.FC<{
  isOpen: boolean;
  booking: any;
  onClose: () => void;
  onDelete: (bookingId: number) => void;
}> = ({ isOpen, booking, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(booking.id);
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? "" : "hidden"}`}>
      {isOpen && (
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Confirm Delete</h2>
          <p className="mb-4">
            Are you sure you want to cancel the booking for {booking?.carModel || ""}?
          </p>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleDelete}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeletePopup;
