const error = (err) => {
    if ((err.name = "MongoServerError")) {
      if (err.code == 11000) {
        return "The phone number is already registered please try a different one";
      }
    }
  
    if ((err.name = "ValidatorError")) {
      console.log(err.message);
      let str = err.message;
      var str2 = str.substring(str.indexOf(":") + 1, str.lastIndexOf(":"));
      console.log(str2);
      return str2;
    }
  };

  module.exports = error;