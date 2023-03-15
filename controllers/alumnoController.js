import Alumnos from "../models/Alumnos";

//GET-ALUMNOS
export const renderAlumnos = async (req, res) => {
    const alumnos = await Alumnos.find().lean();
    res.render("alumno", {alumnos: alumnos});
};

//POST-AGREGAR
export const createAlumnos = async (req, res) => {
    try {
        const alumnos = Alumnos(req.body);
        await alumnos.save();
        res.redirect("/alumnos/agregar");
    } catch (error) {
       console.log(error);
    }
};

//get-update
export const renderEditAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumnos.findById(req.params.id).lean();
        res.render("editarAlumno", {alumnos});
    } catch (error) {
        console.log(error.message);
    }
};

//post-update
export const updateAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);

    res.redirect("/alumnos/agregar");
};

//get-delete
export const deleteAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndDelete(id);

    res.redirect("/alumnos/agregar");
};

//get-status
export const statusAlumnos = async (req, res) => {
    const { id } = req.params;
    const alumnos = await Alumnos.findById(id);
    //la propiedad opcion esta en Model
    alumnos.opcion = !alumnos.opcion;
    await alumnos.save();
    res.redirect("/alumnos/agregar");
};