sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->Browser: Abre la página https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->Server: Realiza una solicitud GET a /exampleapp/spa
    Server-->Browser: Devuelve la página SPA
    Browser->Browser: Renderiza la página y muestra la lista de notas vacía
