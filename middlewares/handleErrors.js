const handleErrors = (req, res, next) => {
  return res.redirect("/users/login");
};
module.exports = handleErrors;
