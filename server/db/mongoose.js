var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

//  ES5
// module.exports = {
//   mongoose: mongoose
// };
//
// ES6
// module.exports = {
//   mongoose
// };

module.exports = {mongoose};
