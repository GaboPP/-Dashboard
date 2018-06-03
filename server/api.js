const express = require('express');
const router = express.Router();
const db = require('./config');

router.get('/', (req, res) =>{
    res.send('api works');
});

const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const sequelize = require('./config');
const reportes_fsm4 = sequelize.import('reportes', require("../modelos/reportes"));
const reports = sequelize.import('reports', require("../modelos/reports"));
const reportes_fsm1 = sequelize.import('reportes_fsm1', require("../modelos/reportes_fsm1"));  
const path = require('path');

//Test de conexi´on
sequelize.authenticate().then(() => {
console.log("Conexión establecida");
 }).catch(err => {
console.error("No te puedes conectar: ", err);
});


//select 'Fecha', 'Fuel_used_during_idle','Fuel_used_during_PTO' from reportes where fecha;

router.post('/getreportes_fsm4', (req, res) =>{
    reportes_fsm4.findAll({
                    attributes: ['Fecha', 'Asset_id', 'Ts', 'Dev_id', 'Duration_driving', 'Duration_cruise_active', 'Idling_time', 'Fuel_used_during_idle', 'Duration_PTO', 'Fuel_used_during_PTO', 'Number_brake_applications', 'Num_brake_apps', 'Num_clutch_presses', 'dle_duration', 'IDuration_engine_torque', 'Duration_speed', 'Duration_RPM', 'Duration_acceleration' ],
                    where:{
                        Fecha: {
                        $between:[req.body.Fecha,req.body.FechaF]
                    }}}).then(rows => {
    res.status(200).send(rows);
    });
});

//select * from reportes_fsm1 where fecha;
router.post('/getreportes_fsm1', (req, res) =>{
    reportes_fsm1.findAll({attributes: ['Fecha', 'Asset_id', 'Ts', 'Dev_id', 'Odometer', 'Total_fuel', 'Engine_hours', 'Actual_speed', 'Actual_engine_speed', 'Actual_engine_torque', 'Kick_down_switch', 'Accelerator_pedal_position', 'Brake_switch', 'Clutch_switch', 'Cruise_active', 'PTO_active_2', 'Fuel_level', 'Engine_Temperatura', 'Turbo_pressure', 'Axle_weight_0', 'Axle_weight_1', 'Axle_weight_2', 'Axle_weight_3', 'Service_distance'],
                            where:{
                                Fecha: {
                                $between:[req.body.Fecha,req.body.FechaF]
                                    }}}).then(rows => {
                                res.status(200).send(rows);
                            });
});

/*
router.get('/getentrada/:fecha', (req, res) =>{
    reportes_fsm4.findAll({attributes: ['Fecha', 'Fuel_used_during_idle','Fuel_used_during_PTO'],
                    where: { Fecha: req.params.Fecha} }).then(rows => {
    res.status(200).send(rows);
    });
});

router.post('/entrada',(req, res)=>{
    Entrada.create({
     titulo: req.body.titulo,
     contenido: req.body.contenido,
    }).then(rows => {
     res.status(200).send("1");
    }).catch(err => {
     console.log(err);
     res.status(200).send("0")
    });
});
    
*/



/*

router.get('/entradas', (req, res) =>{
    var query = "SELECT * FROM entrada";
    db.query(query, function(err, rows){
        if(err){
            console.log(err);
            res.status(500).send({
                data: "Ups, ha ocurrido algo"
            });
        }
        else{
            return res.status(200).send(rows);
        }
    });
});

router.post('/entrada',(req, res)=>{
    var query = "INSERT INTO entrada (titulo, contenido) VALUES('"+req.body.titulo+"', '"+req.body.contenido+"')";
    db.query(query, function(err, rows){
        if(err){
            res.status(500).send({
                body:{
                    result:"error"
                }
            });
        }
        else{
            return res.status(200).send({
                body:{
                    result:"OK"
                }
            });
        }
    });
});*/

module.exports = router;
