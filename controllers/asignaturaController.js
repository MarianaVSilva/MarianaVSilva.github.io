import Asignaturas from "../models/Asignaturas";


//GET-AGREGAR
export const renderAsignaturas = async (req, res) => {
    const asignaturas = await Asignaturas.find().lean();
    res.render("asignatura", {asignaturas: asignaturas});
};

//POST-AGREGAR
export const createAsignaturas = async (req, res) => {
    try {
        const asignaturas = Asignaturas(req.body);
        await asignaturas.save();
        res.redirect("/asignaturas/agregar");
    } catch (error) {
        console.log(error);
    }
};

//GET-EDITAR
export const renderEditAsignaturas = async (req, res) => {
    try {
        const asignaturas = await Asignaturas.findById(req.params.id).lean();
        res.render("editarAsignatura", {asignaturas});
    } catch (error) {
        console.log(error.message);
    }
};

//POST-actualiza
export const updateAsignaturas = async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndUpdate(id, req.body);

    res.redirect("/asignaturas/agregar");
};

//eliminar-get
export const deleteAsignaturas = async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndDelete(id);

    res.redirect("/asignaturas/agregar");
};

//status-get
export const statusAsignaturas = async (req, res) => {
    const { id } = req.params;
    const asignaturas = await Asignaturas.findById(id);
    //la propiedad opcion esta en Model
    asignaturas.opcion = !asignaturas.opcion;
    await asignaturas.save();
    res.redirect("/asignaturas/agregar");
};