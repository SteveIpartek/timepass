function horaMiddleware(req, res, next) {
    const now = new Date();
    req.currentTime = now.toLocaleTimeString();
    next();
  }
  
  module.exports = horaMiddleware;