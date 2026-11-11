async function testApi() {
  try {
    console.log('--- Intentando Login ---');
    
    // 1. Petición de Login con las credenciales exactas (Admin123)
    const loginRes = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@viaje360.com',
        password: 'Viaje360@'
      })
    });

    const loginData = await loginRes.json();

    if (!loginRes.ok) {
      console.error('❌ Error en Login:', loginRes.status, loginData);
      return;
    }

    // Extraer Token (soporta tanto response.token como response.data.token)
    const token = loginData.token || (loginData.data && loginData.data.token);
    console.log('✅ Login exitoso. Token obtenido:', token ? token.substring(0, 20) + '...' : 'No encontrado');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    // 2. Fetching Paquetes
    console.log('\n--- Fetching Paquetes ---');
    const paquetesRes = await fetch('http://localhost:3001/api/paquetes', { headers });
    const paquetesData = await paquetesRes.json();

    if (paquetesRes.ok) {
      const listaPaquetes = paquetesData.data || paquetesData;
      console.log('✅ Paquetes recibidos:', listaPaquetes.length);
      console.log('Muestras:', listaPaquetes.slice(0, 2).map(p => p.nombre));
    } else {
      console.error('❌ Error Paquetes:', paquetesRes.status, paquetesData);
    }

    // 3. Fetching Clientes
    console.log('\n--- Fetching Clientes ---');
    const clientesRes = await fetch('http://localhost:3001/api/clientes', { headers });
    const clientesData = await clientesRes.json();

    if (clientesRes.ok) {
      const listaClientes = clientesData.data || clientesData;
      console.log('✅ Clientes recibidos:', listaClientes.length);
    } else {
      console.error('❌ Error Clientes:', clientesRes.status, clientesData);
    }

  } catch (error) {
    console.error('❌ Error de Conexión (¿Backend encendido?):', error.message);
  }
}

testApi();