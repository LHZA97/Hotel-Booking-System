import express from "express";
import { getGuests, register, login, logout } from "../controllers/Guests.js";
import { getRooms, upload, addRoom, getOneRoom } from "../controllers/Rooms.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/Refresh.Token.js";

const router = express.Router();

router.get('/guests', verifyToken, getGuests);
router.post('/guests', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);

router.get('/rooms', getRooms);
router.get('/:id', getOneRoom)
router.post('/addRoom', upload, addRoom)

export default router;