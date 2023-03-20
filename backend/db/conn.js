const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yourmusic_tracker:yourmusictracker123@cluster1.rysthp9.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));
