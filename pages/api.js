import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configura el transporte del correo electrónico
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'desumma.gianfranco@gmail.com',
        pass: 'ueyv rsjj iwrh pgwx',
      },
    });

    // Configura el correo electrónico que se enviará
    const mailOptions = {
      from: 'tucorreogmail@gmail.com',
      to: 'desumma.gianfranco@gmail.com', // Tu dirección de correo electrónico
      subject: `Nuevo mensaje de ${name} (${email})`,
      text: message,
    };

    try {
      // Envía el correo electrónico
      await transporter.sendMail(mailOptions);

      // Responde con un mensaje de éxito
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};
