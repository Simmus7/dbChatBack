const express = require ('express')

const router = express.Router ();

let Mensaje = require('../modelos/mensaje')

router.post('/', async (req, res) => {
    const mensaje = req.body.mensaje;
    const codigo = req.body.codigo;
  
    const newMessage = new Mensaje({
      mensaje,
      codigo
    });
  
    await newMessage.save()
    .then(() => {
      res.json('Product added!')
      console.log('Producto Agregado')
    })
    .catch(() => {
      res.json('Cannot add, please correct the fields')
      console.log('Intento de agregar producto malardo')
    });
  });

  router.get ('/', async (req, res) => {
    let code = req.query.codigo;
    console.log(req.query.codigo)
    if (isNaN(code)){
      res.status(400).send('Ingresar un código válido (numérico)')
      console.log('No hubo código válido')
    }
    else {
      await Mensaje.find({codigo: code})
      .then(mensajes => {
        if (mensajes[0] === undefined) {
          res.send('No hay mensajes bajo ese código')
          console.log('No hay mensajes bajo ese código')
        }
        else{
          res.json(mensajes);
          console.log('Mensajes entregados')
        }
      })
      .catch((err) => {
        res.status(400).json('Error: '+err)
        console.log('Error entregando mensajes')
      })
    }
  });

module.exports = router;