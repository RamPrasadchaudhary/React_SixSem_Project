import React, { useState } from "react";
import "../Style/RoomManagement.css"; // Import the CSS file
import Heading from "./Heading";
const RoomManagement = () => {
  const [rooms, setRooms] = useState([
    { id: 1, roomNo: "101", status: "vacant", occupant: "" },
    { id: 2, roomNo: "102", status: "filled", occupant: "Ashish Raj" },
    { id: 3, roomNo: "103", status: "vacant", occupant: "" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "add", "allocate"
  const [currentRoom, setCurrentRoom] = useState(null);
  const [roomData, setRoomData] = useState({ roomNo: "", occupant: "" });

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleFilterChange = (e) => setFilterStatus(e.target.value);

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch = searchQuery === "" ||
      room.roomNo.includes(searchQuery) ||
      room.occupant.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || room.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleOpenModal = (type, room = null) => {
    setModalType(type);
    setCurrentRoom(room);
    setRoomData(room || { roomNo: "", occupant: "" });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRoomData({ roomNo: "", occupant: "" });
  };

  const handleAddRoom = () => {
    if (roomData.roomNo.trim() === "") {
      alert("Room number is required!");
      return;
    }
    setRooms([
      ...rooms,
      { id: Date.now(), roomNo: roomData.roomNo, status: "vacant", occupant: "" },
    ]);
    handleCloseModal();
  };

  const handleAllocateRoom = () => {
    if (currentRoom && roomData.occupant.trim() === "") {
      alert("Occupant name is required!");
      return;
    }
    setRooms(
      rooms.map((room) =>
        room.id === currentRoom.id
          ? { ...room, status: "filled", occupant: roomData.occupant }
          : room
      )
    );
    handleCloseModal();
  };

  const handleDeleteRoom = (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  return (



    <>
    <div>
      <Heading
        title="Room Management Details"
        subtitle="Manage all your Room Management data in one place"
      />
    </div>
    <div className="room-management">
      <h1>Room Management</h1>

      {/* Search and Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by room number or occupant"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={filterStatus} onChange={handleFilterChange}>
          <option value="all">All Rooms</option>
          <option value="vacant">Vacant Rooms</option>
          <option value="filled">Filled Rooms</option>
        </select>
        <button
          className="add-room-button"
          onClick={() => handleOpenModal("add")}
        >
          Add Room
        </button>
      </div>

      {/* Room List */}
      <div className="room-list">
        {filteredRooms.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Status</th>
                <th>Occupant</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms.map((room) => (
                <tr key={room.id}>
                  <td>{room.roomNo}</td>
                  <td>{room.status}</td>
                  <td>{room.occupant || "N/A"}</td>
                  <td>
                    {room.status === "vacant" && (
                      <button
                        className="allocate-button"
                        onClick={() => handleOpenModal("allocate", room)}
                      >
                        Allocate
                      </button>
                    )}
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteRoom(room.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No rooms found.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>
              {modalType === "add"
                ? "Add New Room"
                : modalType === "allocate"
                ? "Allocate Room"
                : ""}
            </h3>
            <div className="form-group">
              <label>Room Number</label>
              <input
                type="text"
                name="roomNo"
                value={roomData.roomNo}
                onChange={(e) =>
                  setRoomData({ ...roomData, roomNo: e.target.value })
                }
                disabled={modalType === "allocate"}
              />
            </div>
            {modalType === "allocate" && (
              <div className="form-group">
                <label>Occupant Name</label>
                <input
                  type="text"
                  name="occupant"
                  value={roomData.occupant}
                  onChange={(e) =>
                    setRoomData({ ...roomData, occupant: e.target.value })
                  }
                />
              </div>
            )}
            <div className="modal-buttons">
              {modalType === "add" && (
                <button className="add-btn" onClick={handleAddRoom}>
                  Add Room
                </button>
              )}
              {modalType === "allocate" && (
                <button className="allocate-btn" onClick={handleAllocateRoom}>
                  Allocate Room
                </button>
              )}
              <button className="cancel-btn" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    </>
  );
};

export default RoomManagement;
