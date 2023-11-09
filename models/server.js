const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    //Rutas de la app
    this.routes();
  }

  middlewares() {
    //Permitir JSON
    this.app.use(express.json());
    //Cors
    this.app.use(cors());
    //Directorio Publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/users", require("../routes/userRoutes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en: http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
