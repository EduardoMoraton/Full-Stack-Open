sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant Database

    User->Browser: Abre la página https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->Server: Realiza una solicitud GET a /exampleapp/spa
    Server->Database: Consulta las notas almacenadas
    Database-->Server: Devuelve las notas almacenadas

    User->Browser: Escribe un nuevo mensaje en el formulario y hace clic en "Save"
    Browser->Browser: Agrega la nueva nota localmente
    Browser->Server: Realiza una solicitud POST a /exampleapp/new_note_spa con la nueva nota
    Server->Database: Almacena la nueva nota en la base de datos
    Database-->Server: Confirma que se ha almacenado la nueva nota
    Server->Server: Responde con un estado HTTP 201 (Created)
    Server-->Browser: Confirma la creación exitosa

    Browser->Browser: Actualiza la lista de notas en la página sin recargar
    Browser->Server: Realiza una solicitud GET a /exampleapp/data.json para obtener las notas actualizadas
    Server->Database: Consulta las notas almacenadas en formato JSON
    Database-->Server: Devuelve las notas actualizadas en formato JSON
    Server-->Browser: Devuelve las notas actualizadas al navegador

    Browser->User: Muestra la lista de notas actualizada en la página
