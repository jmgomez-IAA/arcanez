import { CommunityPost } from '../types';

export const initialCommunityPosts: CommunityPost[] = [
  {
    id: "post-1",
    author: "Elena M.",
    country: "España",
    countryCode: "ES",
    flag: "🇪🇸",
    topic: "desahogo",
    title: "El nudo en la garganta antes de tomar una decisión que cambia todo",
    content: "Llevo tres meses dudando si dejar un trabajo que me apaga por dentro. Todos a mi alrededor dicen que es seguro, pero mi cuerpo siente una pesadez insoportable cada mañana. Siento que si doy el salto decepcionaré a mi familia, pero si me quedo me estoy traicionando a mí misma.",
    date: "Ayer a las 21:15",
    supportCount: 14,
    replies: [
      {
        id: "rep-1-1",
        author: "Gabriel (Arcanez)",
        isGuide: true,
        country: "España",
        content: "Elena, la pesadez en el cuerpo no es casualidad; es la señal más honesta de tu sabiduría intuitiva. La seguridad externa comprada a cambio de tu fuego interior es la prisión más cara del mundo. En nuestra próxima sesión hablaremos de cómo trazar ese puente sin culpa. No estás sola.",
        date: "Ayer a las 22:40",
      },
      {
        id: "rep-1-2",
        author: "Matías",
        country: "Argentina",
        content: "Pasé exactamente por lo mismo el año pasado, Elena. El miedo al principio te corta el aliento, pero el primer día que despiertas libre no tiene precio. Te mando un abrazo enorme desde Córdoba.",
        date: "Hoy a las 02:10",
      }
    ]
  },
  {
    id: "post-2",
    author: "Julien R.",
    country: "Francia",
    countryCode: "FR",
    flag: "🇫🇷",
    topic: "suenos",
    title: "Sueños recurrentes con agua clara y una llave dorada suspendida",
    content: "Desde hace semanas tengo el mismo sueño: camino hacia una cascada de agua cristalina y en el aire flota una llave antigua dorada que vibra con un zumbido sutil, como si la mente pudiera atraerla con solo mirarla fijamente. ¿Alguien en el círculo ha experimentado algo similar?",
    date: "Hace 2 días",
    supportCount: 9,
    replies: [
      {
        id: "rep-2-1",
        author: "Gabriel (Arcanez)",
        isGuide: true,
        country: "España",
        content: "La llave suspendida que vibra con tu foco mental es el arquetipo puro de Arcanez: el poder de la concentración sutil y la telequinesis intuitiva. El agua clara representa tus emociones purificadas listas para abrir un umbral que tenías cerrado desde niño.",
        date: "Hace 1 día",
      }
    ]
  },
  {
    id: "post-3",
    author: "Sofía V.",
    country: "México",
    countryCode: "MX",
    flag: "🇲🇽",
    topic: "telequinesis",
    title: "La práctica del foco mental y cómo me ayudó con la ansiedad severa",
    content: "Solía tener ataques de pánico donde sentía que no controlaba nada. Cuando empecé a practicar el ejercicio de la Esfera de concentración y quietud mental que nos enseñó Gabriel, algo cambió. Entendí que la energía no se fuerza: se aquieta. Cuando calmas la mente, el exterior deja de abrumarte.",
    date: "Hace 3 días",
    supportCount: 22,
    replies: [
      {
        id: "rep-3-1",
        author: "Chiara L.",
        country: "Italia",
        content: "Grazie Sofía! Per me questo esercizio è stato una rivelazione. La concentrazione pura è davvero una forma di guarigione spirituale.",
        date: "Hace 2 días",
      }
    ]
  },
  {
    id: "post-4",
    author: "Ignacio P.",
    country: "Chile",
    countryCode: "CL",
    flag: "🇨🇱",
    topic: "intuicion",
    title: "La sincronicidad del arcano de La Templanza en mi sesión de ayer",
    content: "Ayer en mi tirada de tarot previa a mi cita con Gabriel salió La Templanza. Yo pensaba que necesitaba una revolución drástica, pero Gabriel me ayudó a ver que lo que mi alma pedía era reconciliar mis dos partes: el deseo de volar y la necesidad de enraizarme. Quería dejar constancia de mi gratitud a este refugio.",
    date: "Hace 4 días",
    supportCount: 18,
    replies: []
  }
];
