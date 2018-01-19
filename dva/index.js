import dva from 'dva';
import models from './models'
import routers from './router'
import Home from './models/home'
const app = dva()

// Plugins
// app.use({});

models.forEach(model => app.model(model))

app.router(routers)

app.start('#root')
