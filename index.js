import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
import './src/database/db.js'
import usuariosRouter from './src/routes/usuarios.routes.js';
import turnosRouter from './src/routes/turnos.routes.js';


const app = express()

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log(`Puerto ${app.get('port')}`);
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '/public')))

app.use('/api', usuariosRouter)
app.use('/api', turnosRouter)