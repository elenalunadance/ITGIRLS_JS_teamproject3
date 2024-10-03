import {Form} from "../Form/Form";
import {List} from "../Form/formGet";
import './styles.sass';

export function App() {
  const app = document.createElement('div');

  app.className = 'app';

  app.appendChild(Form());
  app.appendChild(List());

  return app;
}