const sequelize = require('./src/config/database');
const { Usuario } = require('./src/models');
const bcrypt = require('bcryptjs'); // Cambia a 'bcrypt' si tu proyecto usa bcrypt en vez de bcryptjs

async function resetPassword() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión establecida a la BD.');

    // 1. Hashear la nueva contraseña 'Admin123'
    const newPassword = 'Admin123';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // 2. Actualizar el usuario en la base de datos
    const [updatedRows] = await Usuario.update(
      { password_hash: hashedPassword },
      { where: { email: 'admin@viaje360.com' } }
    );

    if (updatedRows > 0) {
      console.log(`✅ Contraseña actualizada con éxito para admin@viaje360.com`);
      console.log(`🔑 Nueva contraseña en texto plano: ${newPassword}`);
    } else {
      console.log('⚠️ No se encontró el usuario admin@viaje360.com para actualizar.');
    }

  } catch (error) {
    console.error('❌ Error al actualizar la contraseña:', error.message);
  } finally {
    await sequelize.close();
  }
}

resetPassword();