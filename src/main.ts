import { environment } from './environments/environment';
import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
   loadRemoteEntry(
      { type: 'module', remoteEntry: environment.baseUrlGlobais + '/globais.js' }
   ),
   loadRemoteEntry(
      { type: 'module', remoteEntry: environment.baseUrlEdu + '/educacional.js' }
   )
])
   .catch(err => console.error('Error loading remote entries', err))
   .then(() => import('./bootstrap'))
   .catch(err => console.error(err));
