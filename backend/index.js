const express = require("express");
const app = express();
const router = express.Router();
const cors = require('cors')
require('./db/conn')

const User = require('./models/UserData')
const Track = require('./models/TrackData')
const Playlist = require('./models/PlaylistData')

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: '*'
}));

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        else {
            // Create a new user object based on the incoming data
            const newUser = new User({ firstName, lastName, email, password });

            // Save the new user object to the database
            const savedUser = await newUser.save();

            res.json({ savedUser });
        }


    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
});

app.listen(console.log(`Server started on port ${port}`));