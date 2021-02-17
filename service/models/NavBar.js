const mongoose = require('mongoose');

const NavSchema = new mongoose.Schema({
    search: String
});

const Nav = mongoose.model('Nav', NavSchema);

module.exports = Nav;