<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',sans-serif;color:#1E1B4B;background:#F8FAFC;line-height:1.7}
.cover{background:linear-gradient(135deg,#7C3AED 0%,#EC4899 100%);color:white;padding:70px 40px 50px;text-align:center;border-radius:0 0 40px 40px;margin-bottom:40px;position:relative;overflow:hidden}
.cover::before{content:'';position:absolute;top:-80px;left:-80px;width:300px;height:300px;background:rgba(255,255,255,0.08);border-radius:50%}
.cover::after{content:'';position:absolute;bottom:-60px;right:-60px;width:250px;height:250px;background:rgba(255,255,255,0.06);border-radius:50%}
.cover-logo{width:80px;height:80px;background:rgba(255,255,255,0.2);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:40px;backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3)}
.cover h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:3em;font-weight:800;letter-spacing:-2px;margin-bottom:10px;position:relative;z-index:1}
.cover-sub{font-size:1.1em;opacity:0.85;position:relative;z-index:1;margin-bottom:6px}
.cover-date{font-size:0.85em;opacity:0.6;position:relative;z-index:1}
.cover img{max-width:85%;margin:28px auto 0;border-radius:16px;box-shadow:0 24px 60px rgba(0,0,0,0.35);display:block;position:relative;z-index:1}
.container{max-width:780px;margin:0 auto;padding:0 28px 40px}
h2{font-family:'Plus Jakarta Sans',sans-serif;color:#7C3AED;font-size:1.5em;font-weight:800;margin:40px 0 16px;padding-bottom:10px;border-bottom:2px solid #EDE9FE;display:flex;align-items:center;gap:10px}
h2 span{font-size:1.1em}
h3{color:#5B21B6;font-size:1.05em;font-weight:700;margin:20px 0 10px}
p{color:#374151;margin-bottom:12px;font-size:0.95em}
.tech-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0}
.tech-card{background:white;border:1px solid #E5E7EB;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05)}
.tech-card h3{color:#3B82F6;margin-top:0;font-size:0.95em;border-left:3px solid #3B82F6;padding-left:10px}
.tech-card ul{padding-left:16px;margin:0}
.tech-card li{font-size:0.87em;color:#374151;margin-bottom:6px}
.feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0}
.feature-item{background:white;border:1px solid #E5E7EB;border-radius:10px;padding:14px 16px;display:flex;gap:10px;align-items:flex-start;box-shadow:0 1px 4px rgba(0,0,0,0.04)}
.feat-icon{font-size:1.4em;flex-shrink:0;margin-top:2px}
.feat-body strong{display:block;color:#5B21B6;font-size:0.88em;margin-bottom:4px}
.feat-body p{color:#6B7280;font-size:0.82em;margin:0}
.step{background:white;border:1px solid #E5E7EB;border-radius:10px;padding:16px 18px;margin-bottom:12px;display:flex;gap:14px;align-items:flex-start;box-shadow:0 1px 4px rgba(0,0,0,0.04)}
.step-num{width:32px;height:32px;background:linear-gradient(135deg,#7C3AED,#EC4899);color:white;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9em;flex-shrink:0}
.step-body h4{color:#1E1B4B;font-size:0.93em;font-weight:700;margin-bottom:6px}
.step-body ul{padding-left:16px;margin:0}
.step-body li{font-size:0.85em;color:#374151;margin-bottom:4px}
code{background:#1E293B;color:#38BDF8;padding:2px 7px;border-radius:4px;font-family:'Courier New',monospace;font-size:0.82em}
.code-block{background:#1E293B;color:#94D82D;padding:14px 18px;border-radius:10px;font-family:'Courier New',monospace;font-size:0.8em;margin:10px 0;line-height:1.8}
.hosting-card{background:linear-gradient(135deg,#EDE9FE,#FCE7F3);border:1px solid #DDD6FE;border-radius:12px;padding:20px;margin:14px 0}
.hosting-card h3{color:#7C3AED;margin-top:0}
.hosting-card ul{padding-left:16px}
.hosting-card li{font-size:0.87em;color:#374151;margin-bottom:6px}
.warning{background:#FFFBEB;border-left:4px solid #F59E0B;border-radius:8px;padding:12px 16px;margin:14px 0;font-size:0.87em;color:#92400E}
.note{background:#EFF6FF;border-left:4px solid #3B82F6;border-radius:8px;padding:12px 16px;margin:14px 0;font-size:0.87em;color:#1E40AF}
.footer{text-align:center;color:#9CA3AF;font-size:0.82em;margin-top:50px;padding-top:20px;border-top:1px solid #E5E7EB}
.badge-row{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}
.badge{background:#EDE9FE;color:#5B21B6;padding:4px 12px;border-radius:20px;font-size:0.78em;font-weight:600}
.badge.green{background:#D1FAE5;color:#065F46}
.badge.blue{background:#DBEAFE;color:#1E40AF}
.badge.pink{background:#FCE7F3;color:#9D174D}
</style>

<div class="cover">
  <div class="cover-logo">✈️</div>
  <h1>Viaje 360 CRM</h1>
  <p class="cover-sub">Manual Técnico y Guía de Implementación</p>
  <p class="cover-date">Sistema ERP para Agencia de Viajes · Versión 1.0 · 2026</p>
  <img src="file:///c:/CRMyERP/crm-viaje360/diseño.png" alt="Viaje 360 CRM Interface">
</div>

<div class="container">

## <span>⚙️</span> 1. Tecnología de Desarrollo

El sistema **Viaje 360 CRM** está desarrollado bajo una arquitectura moderna **SPA (Single Page Application)** con separación completa entre cliente y servidor, garantizando escalabilidad, seguridad y alto rendimiento.

<div class="tech-grid">
<div class="tech-card">
<h3>🖥️ Frontend (Cliente)</h3>
<ul>
<li><strong>React 19</strong> — Librería principal de interfaz</li>
<li><strong>Vite 8</strong> — Empaquetador ultrarrápido</li>
<li><strong>React Router DOM 7</strong> — Navegación SPA</li>
<li><strong>Zustand</strong> — Gestión global de estado</li>
<li><strong>Axios</strong> — Consumo de API REST</li>
<li><strong>Chart.js + react-chartjs-2</strong> — Gráficas dinámicas</li>
<li><strong>Lucide React</strong> — Iconografía moderna</li>
<li><strong>@dnd-kit</strong> — Drag & Drop (Pipeline Kanban)</li>
<li><strong>React Hook Form</strong> — Formularios optimizados</li>
<li><strong>CSS Nativo</strong> — Design system propio (Light Premium)</li>
</ul>
</div>
<div class="tech-card">
<h3>🗄️ Backend (Servidor) y BD</h3>
<ul>
<li><strong>Node.js 18+</strong> — Entorno de ejecución</li>
<li><strong>Express.js</strong> — Framework API REST</li>
<li><strong>Sequelize ORM</strong> — Mapeo objeto-relacional</li>
<li><strong>MySQL 8+</strong> — Base de datos relacional</li>
<li><strong>JWT (jsonwebtoken)</strong> — Autenticación por tokens</li>
<li><strong>bcryptjs</strong> — Cifrado de contraseñas</li>
<li><strong>Helmet + CORS</strong> — Seguridad HTTP</li>
<li><strong>Multer</strong> — Subida de archivos</li>
<li><strong>PDFKit</strong> — Generación de reportes PDF</li>
<li><strong>Nodemon</strong> — Recarga automática en desarrollo</li>
</ul>
</div>
</div>

<div class="badge-row">
<span class="badge">Node.js 18+</span>
<span class="badge blue">React 19</span>
<span class="badge green">MySQL 8</span>
<span class="badge">Sequelize ORM</span>
<span class="badge pink">JWT Auth</span>
<span class="badge blue">Vite 8</span>
<span class="badge green">Chart.js</span>
</div>

## <span>🧩</span> 2. Funcionalidades del Sistema

El CRM cubre el ciclo completo de operación de una agencia de viajes: desde la captación del cliente hasta el cierre de la venta y el análisis de resultados.

<div class="feature-grid">
<div class="feature-item">
<span class="feat-icon">📊</span>
<div class="feat-body"><strong>Dashboard Ejecutivo</strong><p>KPIs en tiempo real: reservas del mes, ingresos totales, margen de utilidad, pipeline activo y actividades recientes del equipo.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">👥</span>
<div class="feat-body"><strong>Gestión de Clientes</strong><p>Padrón completo con perfil 360°: historial de reservas, LTV (valor de vida), pipeline activo, interacciones y tareas pendientes por cliente.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">📋</span>
<div class="feat-body"><strong>Pipeline de Ventas (Kanban)</strong><p>Tablero visual tipo drag & drop para mover oportunidades entre etapas del embudo: Nuevo → Cotizado → Negociación → Ganado/Perdido.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">📦</span>
<div class="feat-body"><strong>Catálogo de Paquetes</strong><p>Administración de paquetes turísticos con destino, precio, costo neto, duración, cupo máximo e imagen representativa.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">🗺️</span>
<div class="feat-body"><strong>Destinos y Países</strong><p>Catálogo de destinos turísticos vinculados a países, con imagen y estado activo/inactivo para control del inventario de rutas.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">🏨</span>
<div class="feat-body"><strong>Proveedores</strong><p>Directorio de proveedores (aerolíneas, hoteles, transportistas) con tipo, contacto, comisión y calificación de servicio.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">🎫</span>
<div class="feat-body"><strong>Reservas</strong><p>Registro de reservas con paquete, cliente, agente asignado, fechas de viaje, número de pasajeros, costo neto y precio final.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">💰</span>
<div class="feat-body"><strong>Pagos y Cobranza</strong><p>Control de pagos por reserva: anticipos, saldos pendientes, método de pago y estado (pagado / pendiente / parcial).</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">✅</span>
<div class="feat-body"><strong>Tareas y Actividades</strong><p>Gestión de tareas del equipo: asignación de agente, fecha límite, prioridad y vinculación a cliente u oportunidad.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">📣</span>
<div class="feat-body"><strong>Campañas de Marketing</strong><p>Creación y seguimiento de campañas: tipo (email, WhatsApp, redes), segmento objetivo, métricas de apertura y conversión.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">📈</span>
<div class="feat-body"><strong>Reportes y Analíticas</strong><p>Informes de ventas por mes, rendimiento por agente, destinos más vendidos y exportación de datos con visualizaciones interactivas.</p></div>
</div>
<div class="feature-item">
<span class="feat-icon">⚙️</span>
<div class="feat-body"><strong>Configuración General</strong><p>Datos de la empresa, gestión de usuarios y roles (Administrador, Agente, Supervisor), y parámetros del sistema.</p></div>
</div>
</div>

## <span>💻</span> 3. Instalación en Computadora Nueva

### Programas a instalar previamente

<div class="step">
<div class="step-num">1</div>
<div class="step-body">
<h4>Descargar e instalar Node.js</h4>
<ul>
<li>Ir a <strong>https://nodejs.org</strong> y descargar la versión <strong>LTS 18</strong> o superior.</li>
<li>Instalar con todas las opciones por defecto (incluye npm automáticamente).</li>
<li>Verificar: abrir terminal y ejecutar <code>node -v</code> y <code>npm -v</code></li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-body">
<h4>Instalar MySQL Server (o XAMPP)</h4>
<ul>
<li>Opción A: Descargar <strong>MySQL Community Server 8.0</strong> desde https://dev.mysql.com/downloads/</li>
<li>Opción B (más fácil): Instalar <strong>XAMPP</strong> desde https://www.apachefriends.org — incluye MySQL y phpMyAdmin.</li>
<li>Anotar el usuario (<code>root</code>) y la contraseña que se configure durante la instalación.</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-body">
<h4>Crear la base de datos e importar datos</h4>
<ul>
<li>Abrir <strong>phpMyAdmin</strong> (http://localhost/phpmyadmin) o MySQL Workbench.</li>
<li>Crear una base de datos nueva llamada <code>viaje360</code>.</li>
<li>Importar el archivo <code>bk_basededatos.sql</code> que se encuentra en la raíz del proyecto.</li>
<li>Importar también <code>seed.sql</code> para cargar datos de ejemplo (opcional pero recomendado).</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">4</div>
<div class="step-body">
<h4>Configurar y arrancar el Backend (API)</h4>
<ul>
<li>Abrir una terminal y entrar a la carpeta: <code>cd crm-viaje360/backend</code></li>
<li>Instalar dependencias: <code>npm install</code></li>
<li>Editar el archivo <code>.env</code> con los datos de conexión MySQL:</li>
</ul>
<div class="code-block">
DB_HOST=localhost<br>
DB_PORT=3306<br>
DB_NAME=viaje360<br>
DB_USER=root<br>
DB_PASS=tu_contraseña<br>
JWT_SECRET=una_clave_secreta_larga<br>
PORT=3001
</div>
<ul>
<li>Iniciar el servidor: <code>npm run dev</code> (se ejecuta en http://localhost:3001)</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">5</div>
<div class="step-body">
<h4>Configurar y arrancar el Frontend (React)</h4>
<ul>
<li>Abrir <strong>otra</strong> terminal y entrar a: <code>cd crm-viaje360/frontend</code></li>
<li>Instalar dependencias: <code>npm install</code></li>
<li>Iniciar la interfaz: <code>npm run dev</code></li>
<li>El sistema se abrirá en el navegador en <strong>http://localhost:5173</strong></li>
<li>Credenciales por defecto: usuario <code>admin@viaje360.com</code> / contraseña <code>Viaje360@</code></li>
</ul>
</div>
</div>

<div class="note">💡 <strong>Tip:</strong> Mantén las dos terminales abiertas simultáneamente: una con el backend corriendo y otra con el frontend. Ambas deben estar activas para que el sistema funcione.</div>

## <span>☁️</span> 4. Hosting Web Recomendado

Para una aplicación que combina **Node.js + React + MySQL**, estas son las mejores opciones ordenadas por conveniencia:

<div class="hosting-card">
<h3>⭐ Opción 1 — Hostinger Business (Recomendado)</h3>
<ul>
<li><strong>Precio:</strong> ~$3–6 USD/mes (plan Business o Cloud)</li>
<li><strong>¿Por qué?</strong> Incluye gestor de Node.js en el panel hPanel, MySQL incluido, phpMyAdmin y SSL gratuito.</li>
<li><strong>Ideal para:</strong> Agencias pequeñas a medianas, hasta ~50 usuarios concurrentes.</li>
<li><strong>Dominio:</strong> Se puede incluir gratis el primer año.</li>
</ul>
</div>

<div class="hosting-card">
<h3>🥈 Opción 2 — Hostinger VPS (Mayor control)</h3>
<ul>
<li><strong>Precio:</strong> ~$8–15 USD/mes</li>
<li><strong>¿Por qué?</strong> Servidor Linux dedicado con acceso root total. Ideal si se espera crecimiento o alto tráfico.</li>
<li><strong>Instalar:</strong> Node.js, MySQL y Nginx/Apache con PM2 para mantener el servidor activo.</li>
</ul>
</div>

<div class="hosting-card">
<h3>🥉 Alternativas válidas</h3>
<ul>
<li><strong>Railway.app</strong> — Despliegue automático desde GitHub, muy fácil, tiene tier gratuito.</li>
<li><strong>Render.com</strong> — Similar a Railway, soporte nativo Node.js + bases de datos.</li>
<li><strong>DigitalOcean (Droplet $6)</strong> — VPS con 1-click Node.js, ideal para mayor control.</li>
</ul>
</div>

## <span>🚀</span> 5. Paso a Paso: Subir a Hostinger

<div class="step">
<div class="step-num">1</div>
<div class="step-body">
<h4>Crear la base de datos en Hostinger</h4>
<ul>
<li>Ingresar al panel <strong>hPanel</strong> de Hostinger.</li>
<li>Ir a <strong>Bases de datos MySQL</strong> → Crear nueva base de datos, usuario y contraseña.</li>
<li>Ir a <strong>phpMyAdmin</strong> → seleccionar la BD creada → <strong>Importar</strong> el archivo <code>bk_basededatos.sql</code>.</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-body">
<h4>Configurar la aplicación Node.js (Backend)</h4>
<ul>
<li>En hPanel ir a <strong>Avanzado → Node.js</strong> → Crear nueva aplicación.</li>
<li>Seleccionar versión Node.js 18+, configurar la ruta de la app (ej. <code>/api</code>) y el archivo de entrada <code>src/app.js</code>.</li>
<li>En el <strong>Administrador de Archivos</strong>, subir todo el contenido de la carpeta <code>backend</code> a la ruta de la app (sin incluir <code>node_modules</code>).</li>
<li>Editar el archivo <code>.env</code> en el servidor con los datos de conexión de producción (host, usuario, contraseña y nombre de BD de Hostinger).</li>
<li>Volver al gestor de Node.js → clic en <strong>Run NPM Install</strong> → luego <strong>Restart</strong>.</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-body">
<h4>Compilar y subir el Frontend (React)</h4>
<ul>
<li>En el código local del frontend, localizar donde se configura la URL base de Axios (generalmente en <code>src/services/api.js</code> o similar).</li>
<li>Cambiar <code>http://localhost:3001</code> por la URL de tu backend en producción (ej. <code>https://tudominio.com/api</code>).</li>
<li>En tu terminal local ejecutar: <code>npm run build</code> dentro de la carpeta <code>frontend</code>.</li>
<li>Se genera la carpeta <code>dist/</code>. Comprimir su contenido en un ZIP.</li>
<li>En el Administrador de Archivos de Hostinger, ir a <code>public_html</code> y subir el ZIP. Extraer ahí los archivos.</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">4</div>
<div class="step-body">
<h4>Crear archivo .htaccess para React Router</h4>
<ul>
<li>En la carpeta <code>public_html</code> de Hostinger, crear un archivo llamado <code>.htaccess</code> con el siguiente contenido:</li>
</ul>
<div class="code-block">
Options -MultiViews<br>
RewriteEngine On<br>
RewriteCond %{REQUEST_FILENAME} !-f<br>
RewriteCond %{REQUEST_FILENAME} !-d<br>
RewriteRule ^ index.html [QSA,L]
</div>
<ul>
<li>Esto es <strong>indispensable</strong> para que las rutas de React (como <code>/clientes</code> o <code>/pipeline</code>) funcionen al recargar la página.</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">5</div>
<div class="step-body">
<h4>Activar SSL y verificar</h4>
<ul>
<li>En hPanel ir a <strong>SSL</strong> → activar el certificado gratuito de Let's Encrypt para tu dominio.</li>
<li>Acceder desde el navegador a tu dominio y verificar el login del sistema.</li>
<li>Si hay error de conexión con la API, revisar las variables <code>.env</code> del backend y los CORS configurados en <code>src/app.js</code> (agregar tu dominio de producción en <code>allowedOrigins</code>).</li>
</ul>
</div>
</div>

<div class="warning">⚠️ <strong>Importante:</strong> Antes de subir a producción, asegúrate de cambiar el <code>JWT_SECRET</code> en el archivo <code>.env</code> del servidor por una cadena larga y aleatoria. Nunca uses el mismo secreto de desarrollo en producción.</div>

<div class="footer">
<p>📋 Manual Técnico — Viaje 360 CRM v1.0 | Sistema ERP para Agencias de Viaje</p>
<p>Generado el 23 de abril de 2026</p>
</div>

</div>
