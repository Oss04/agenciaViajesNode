import express from "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaViajeDetalle
} from "../controllers/paginasControllers.js";
import {
    guardarTestimoniales
} from "../controllers/testimonialesControllers.js";

const router = express.Router();

router.get('/inicio', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viaje/:slug', paginaViajeDetalle);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimoniales);

export default router;