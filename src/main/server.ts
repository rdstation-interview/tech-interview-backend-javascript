import { setupApp } from './config/app';
import envConfig from './config/env';

const app = setupApp()

app.listen(envConfig.port, () => console.log(`Server running at http://localhost:${envConfig.port}`))