import { Testimonial } from "../model/Testimoniales.js";
const guardarTestimoniales = async (req, res) => {

    const { nombre, correo, mensaje } = req.body;

    const errores = [];
    //validar

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacio' });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio' });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' });
    }

    if (errores.length > 0) {

        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //almacenar la base de datos
        try {

            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales') //redirecciona a la pagina testimoniales
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimoniales
}