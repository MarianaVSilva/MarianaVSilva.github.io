import { Router } from "express"
import Productos from '../models/Productos';
import { createAsignaturas, deleteAsignaturas, renderAsignaturas, renderEditAsignaturas, statusAsignaturas, updateAsignaturas } from "../controllers/asignaturaController";
import { createProfesores, deleteProfesores, renderEditProfesores, renderProfesores, statusProfesores, updateProfesores } from "../controllers/profesorController";
import { createAlumnos, deleteAlumnos, renderAlumnos, renderEditAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnoController";


const router =Router();

//PRODUCTOS
router.get('/', async (req, res) => {
    const productos = await Productos.find().lean();
    res.render("index", {productos: productos});
});

//Agregar productos
router.post("/productos/agregar",  async (req, res) =>{
   try {
    const productos = Productos(req.body);
    await productos.save();
    res.redirect("/");
   } catch (error) {
    console.log(error);
   }
});

//A buscar por id
router.get("/update/:id", async (req, res) => {
    try {
        const productos = await Productos.findById(req.params.id).lean();
        res.render("editar", {productos});
    } catch (error) {
        console.log(error.message);
    }
});
//ACTUALIZA
router.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    await Productos.findByIdAndUpdate(id, req.body);

    res.redirect("/");
});
//eliminar
router.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Productos.findByIdAndDelete(id);

    res.redirect("/");
});

//ALUMNOS
router.get('/alumnos/agregar', renderAlumnos);

//Alumnos agregar
router.post("/alumnos/agregar", createAlumnos );

// BUSCAR POR ID
router.get("/update/alumnos/:id", renderEditAlumnos);

//ACTUALIZA
router.post("/update/alumnos/:id", updateAlumnos);

//ELIMINA
router.get("/delete/alumnos/:id", deleteAlumnos);

//status 
router.get("/status/alumnos/:id", statusAlumnos);

//ASIGNATURAS

router.get('/asignaturas/agregar', renderAsignaturas);

//agregar asignatura
router.post("/asignaturas/agregar", createAsignaturas);

//EDITAR ASIGANTURA  POR ID
router.get("/update/asignaturas/:id", renderEditAsignaturas);
//ACTUALIZA
router.post("/update/asignaturas/:id", updateAsignaturas);

//elimina
router.get("/delete/asignaturas/:id", deleteAsignaturas);

//status
router.get("/status/asignaturas/:id", statusAsignaturas);



//Profesores

router.get('/profesores/agregar', renderProfesores);

//agregar profesores
router.post("/profesores/agregar", createProfesores);

//EDITAR profesores  POR ID
router.get("/update/profesores/:id", renderEditProfesores);

//ACTUALIZA
router.post("/update/profesores/:id", updateProfesores);

//elimina
router.get("/delete/profesores/:id", deleteProfesores);

//status
router.get("/status/profesores/:id",statusProfesores);

export default router;