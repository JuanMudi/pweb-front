import { Routes } from '@angular/router';
import { CrearCelularComponent } from './components/crear-celular/crear-celular.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListarCelularesComponent } from './components/listar-celulares/listar-celulares.component';
import { TraerxidComponent } from './components/traerxid/traerxid.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

export const routes: Routes = [
    {path: '', redirectTo: 'create', pathMatch: 'full'},
    {path: 'create', component: CrearCelularComponent},
    {path: 'edit', component: EditarComponent },
    {path: 'listar', component: ListarCelularesComponent},
    {path: 'traerxid',  component:TraerxidComponent},
    {path: 'eliminar', component: EliminarComponent}


];
