import Rooms from "../models/Room.Model.js";
import multer from "multer";
import path from "path";

export const addRoom = async (req, res) => {

    let info = {
        image: req.file.path,
        type: req.body.type,
        price: req.body.price,
        sizes: req.body.sizes,
        description: req.body.description,
        capacity: req.body.capacity,
        published: req.body.published ? req.body.published : false
    }

    const rooms = await Rooms.create(info)
    res.status(200).send(rooms)
    console.log(rooms)

}


export const getRooms = async (req, res) => {
    try {   
        const rooms = await Rooms.findAll({})
        res.status(200).send(rooms);
    } catch (error) {
        console.log(error);
    }
}

export const getOneRoom = async (req, res) => {

    const id = req.params.id
    const room = await Rooms.findOne({ where: { id: id }})
    res.status(200).send(room)

}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
        storage: storage,
        limits: { fileSize: '2000000' },
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|gif/
            const mimeType = fileTypes.test(file.mimetype)  
            const extname = fileTypes.test(path.extname(file.originalname))

            if(mimeType && extname) {
                return cb(null, true)
            }
            cb('Give proper files formate to upload')
        }
}).single('image')
