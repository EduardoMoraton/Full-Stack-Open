
sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant Database

    User->Browser: Abre la página https://studies.cs.helsinki.fi/exampleapp/notes
    Browser->Server: Realiza una solicitud GET a /notes
    Server->Database: Consulta todas las notas almacenadas
    Database-->Server: Devuelve las notas almacenadas

    User->Browser: Escribe un nuevo mensaje en el campo de texto
    User->Browser: Hace clic en el botón "Save"
    Browser->Server: Realiza una solicitud POST a /new_note con el nuevo mensaje
    Server->Database: Almacena el nuevo mensaje en la base de datos
    Database-->Server: Confirma que se ha almacenado el mensaje

    Server->Browser: Redirige a /notes
    Browser->Server: Realiza una solicitud GET a /notes nuevamente
    Server->Database: Consulta todas las notas almacenadas
    Database-->Server: Devuelve las notas almacenadas actualizadas

    Browser->User: Muestra la página de notas con el nuevo mensaje
