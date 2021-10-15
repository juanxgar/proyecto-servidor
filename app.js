const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const connectionString = "mongodb+srv://admin:2EqMko29L77gqkWe@cluster0.nnj4f.mongodb.net/inventario?retryWrites=true&w=majority"
const nombreDB='inventario'

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(connectionString, {
  dbName: nombreDB,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to mongoDB");
});
db.on("error", error => {
  console.log(error);
});

// import schema as model
let inventarioModel = require("./schema");
const { json } = require("body-parser")

// ROUTES

//app.get("/", (req, res) => {
//  res.send("hello");
//});

// add registro
app.post("/inventario/register", (req, res) => {
  let newInventario = new inventarioModel();
  newInventario.nombre = req.body.nombre;
  newInventario.precio = req.body.precio;
  newInventario.unidades = req.body.unidades;

  newInventario.save(err => {
    if (err) {
      console.log(err);
      res.send("Error while adding inventario\n"+JSON.stringify(err));
    } else {
      console.log(newInventario);
      res.send("inventario added\n"+JSON.stringify(newInventario));
    }
  });
});

// FETCH TO-DO

// Obtener todos los usuarios y contraseñas
app.get("/inventario", (req, res) => {
  inventarioModel.find({ },
  (err, inventarios) => {
    if (err) {
      res.send("Error while fetching inventarios");
    } else {
      res.json(inventarios);
    }
  });
});

//Obtener solo un elemento por id
app.get("/inventario/:id", (req, res) => {
  const _id = req.params.id;
  //Buscar un solo parametro
  inventarioModel.findOne(
  { 
    _id
  },
  (err, inventarios) => {
    if (err) {
      res.send("Error while fetching Todos");
    } else {
      res.json(inventarios);
    }
  });
});



// update nombre
app.post("/inventario/updatenombre/:id", (req, res) => {
  inventarioModel.findByIdAndUpdate(
    req.params.id,
    { 
      nombre: req.body.nombre,
    },
    (err, inventario) => {
      if (!err) {
        res.send("Good Work");
      }
    }
  );
});

app.post("/inventario/update/:id", (req, res) => {
  inventarioModel.findByIdAndUpdate(
    req.params.id,
    { 
      nombre: req.body.nombre,
      precio: req.body.precio,
      unidades: req.body.unidades
    },
    (err, inventario) => {
      if (!err) {
        res.send("Good Work");
      }
    }
  );
});

// update precio
app.post("/inventario/updateprecio/:id", (req, res) => {
  inventarioModel.findByIdAndUpdate(
    req.params.id,
    { 
      precio: req.body.precio,
    },
    (err, inventario) => {
      if (!err) {
        res.send("Good Work");
      }
    }
  );
});

//update unidades
app.post("/inventario/updateunidades/:id", (req, res) => {
  inventarioModel.findByIdAndUpdate(
    req.params.id,
    { 
      unidades: req.body.unidades,
    },
    (err, inventario) => {
      if (!err) {
        res.send("Good Work");
      }
    }
  );
});

// delete todo
app.delete("/inventario/delete/:id", (req, res) => {
  let query = { _id: req.params.id };
  inventarioModel.deleteOne(query, err => {
    if (err) {
      res.send("Error while deleting");
    } else {
      res.send("Deleted");
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});