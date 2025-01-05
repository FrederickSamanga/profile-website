// utils/keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8181/auth',
  realm: 'taskup-realm',
  clientId: 'taskup-frontend',
});

export default keycloak;