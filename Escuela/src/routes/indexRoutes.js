import { Router } from "express";
import Asignatura from "../models/Asignatura";
import Alumno from "../models/Alumno";
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/asignatura/agregar", async (req, res) => {
  const asignatura = Asignatura(req.body);
  const asignaturaAlmacenada = await asignatura.save();
  console.log(asignaturaAlmacenada);
  res.send("Almacenado"); //para almacenar datos ir a app.js
});

router.get("/update", (req, res) => {
  res.render("editar");
});

router.post("/alumno/agregar", async (req, res) =>{
  const alumno = Alumno(req.body);
  const alumnoAlmacenando = await alumno.save();
  console.log(alumnoAlmacenando);
  res.send("Alumno Almacenado");
})

export default router;
