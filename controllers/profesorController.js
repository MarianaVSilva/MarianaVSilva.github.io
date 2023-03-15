import Profesores from "../models/Profesores"

//GET AGREGAR
export const renderProfesores = async (req, res) => {
    const profesores = await Profesores.find().lean();
    res.render("profesores", {profesores: profesores});
};

//POST AGREGAR
export const createProfesores = async (req, res) => {
    try {
        const profesores = Profesores(req.body);
        await profesores.save();
        res.redirect("/profesores/agregar");
    } catch (error) {
        console.log(error);
    }
};

//get update
export const renderEditProfesores = async (req, res) => {
    try {
        const profesores = await Profesores.findById(req.params.id).lean();
        res.render("editarProfesor", {profesores});
    } catch (error) {
        console.log(error.message);
    }
};

//post update
export const updateProfesores = async (req, res) => {
    const { id } = req.params;
    await Profesores.findByIdAndUpdate(id, req.body);

    res.redirect("/profesores/agregar");
};

//get delete
export const deleteProfesores = async (req, res) => {
    const { id } = req.params;
    await Profesores.findByIdAndDelete(id);

    res.redirect("/profesores/agregar");
};

//get status
export const statusProfesores = async (req, res) => {
    const { id } = req.params;
    const profesores = await Profesores.findById(id);
    //la propiedad opcion esta en Model
    profesores.opcion = !profesores.opcion;
    await profesores.save();
    res.redirect("/profesores/agregar");
};