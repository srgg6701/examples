/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/sharedProcessMain.nls.es",{"vs/base/common/errors":["{0}. Código de error: {1}","Permiso denegado (HTTP {0})","Permiso denegado","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Error de conexión desconocido ({0})","Error de conexión desconocido. Es posible que ya no esté conectado a Internet o que el servidor al que se había conectado esté sin conexión.","{0}:{1}","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","Se produjo un error del sistema ({0})","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","{0} ({1} errores en total)","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","Sin implementar","Argumento no válido: {0}","Argumento no válido","Estado no válido: {0}","Estado no válido","No se pudo cargar un archivo necesario. O bien no está conectado a Internet o el servidor al que se había conectado está sin conexión. Actualice el explorador y vuelva a intentarlo.","No se pudo cargar un archivo requerido. Reinicie la aplicación para intentarlo de nuevo. Detalles: {0}"],"vs/base/common/json":["Símbolo no válido","Formato de número no válido","Se esperaba el nombre de la propiedad","Se esperaba un valor","Se esperaban dos puntos","Se esperaba una coma","Se esperaba una llave de cierre","Se esperaba un corchete de cierre","Se esperaba un fin de archivo"],"vs/base/common/severity":["Error","Advertencia","Información"],"vs/base/node/zip":["{0} no se encontró dentro del archivo zip."],"vs/code/node/argv":["Arguments in `--goto` mode should be in the format of `FILE(:LINE(:COLUMN))`.","Abra un editor de diferencias. Necesita pasar dos rutas de acceso a archivos como argumentos.","Deshabilite todas las extensiones instaladas.","Abra el archivo en la ruta de acceso en la línea y columna (agregue :line[:column] a la ruta de acceso).","La configuración regional que se usará (por ejemplo, en-US o zh-TW).","Fuerce una nueva instancia de Code.","Comience con el comando 'Developer: Startup Performance' habilitado.","Fuerce la apertura de un archivo o carpeta en la última ventana activa.","Especifica el directorio en que se conservan los datos de usuario; es útil cuando se ejecuta como raíz.","Imprima salidas detalladas (implica --wait).","Espere que se cierre la ventana antes de volver.","Establezca la ruta de acceso raíz para las extensiones.","Enumere las extensiones instaladas.","Instala una extensión.","Desinstala una extensión.","Versión de impresión.","Imprima el uso.","Usage","options","paths","Options"],"vs/platform/configuration/common/configurationRegistry":["Aporta opciones de configuración.","Resumen de la configuración. Esta etiqueta se usará en el archivo de configuración como comentario divisor.","Descripción de las propiedades de configuración.",'si se establece, "configuration.type" debe establecerse en "object"',"configuration.title debe ser una cadena","configuration.properties debe ser un objeto"],"vs/platform/extensionManagement/common/extensionManagement":["Extensiones"],"vs/platform/extensionManagement/node/extensionGalleryService":["Extension not found","No se encontró una versión de {0} compatible con esta versión de Code."],"vs/platform/extensionManagement/node/extensionManagementService":["Extensión no válida: package.json no es un archivo JSON.","Extensión no válida: el nombre del manifiesto no coincide.","Extensión no válida: el publicador del manifiesto no coincide.","Extensión no válida: la versión del manifiesto no coincide.","Reinicie Code antes de volver a instalar {0}.","Reinicie Code antes de volver a instalar {0}.","No se encontró la extensión."],"vs/platform/extensions/common/extensionsRegistry":["Se obtuvo una descripción vacía de la extensión.",'la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "object"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente",'la propiedad `{0}` se puede omitir o debe ser de tipo "string"','Se esperaba que "main" ({0}) se hubiera incluido en la carpeta de la extensión ({1}). Esto puede hacer que la extensión no sea portátil.',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente","Nombre para mostrar de la extensión que se usa en la galería de VS Code.","Categorías que usa la galería de VS Code para clasificar la extensión.","Banner usado en VS Code Marketplace.","Color del banner en el encabezado de página de VS Code Marketplace.","Tema de color de la fuente que se usa en el banner.","El publicador de la extensión VS Code.","Eventos de activación de la extensión VS Code.","Dependencias a otras extensiones. El identificador de una extensión siempre es ${publisher}.${name}. Por ejemplo: vscode.csharp.","Script que se ejecuta antes de publicar el paquete como extensión VS Code.","Todas las contribuciones de la extensión VS Code representadas por este paquete."],"vs/platform/extensions/node/extensionValidator":['No se pudo analizar el valor {0} de "engines.vscode". Por ejemplo, use: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x, etc.','La versión indicada en "engines.vscode" ({0}) no es suficientemente específica. Para las versiones de vscode anteriores a la 1.0.0, defina como mínimo la versión principal y secundaria deseadas. Por ejemplo: ^0.10.0, 0.10.x, 0.11.0, etc.','La versión indicada en "engines.vscode" ({0}) no es suficientemente específica. Para las versiones de vscode posteriores a la 1.0.0, defina como mínimo la versión principal deseada. Por ejemplo: ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.',"La extensión no es compatible con {0} de Code y requiere: {1}.","La versión de la extensión no es compatible con semver."],"vs/platform/request/common/request":["HTTP","El valor del proxy que se debe utilizar. Si no se establece, se tomará de las variables de entorno http_proxy y https_proxy","Indica si el certificado del servidor proxy debe comprobarse en la lista de entidades de certificación proporcionada.","The value to send as the 'Proxy-Authorization' header for every network request."],"vs/platform/telemetry/common/telemetryService":["Telemetría","Habilite los datos de uso y los errores para enviarlos a Microsoft."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs\code\node\sharedProcessMain.nls.es.js.map
