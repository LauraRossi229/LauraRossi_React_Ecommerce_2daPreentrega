// asyncMock.js

const products = [
    {
      id: 1,
      name: "Construcción de Piscinas",
      price: 1200,
      category: "Oficios",
      img: '/src/assets/images/piscinas.png',
      stock: 10,
      description: "Diseña, construye y climatiza. Manual técnico con todo lo necesario para la construcción de piscinas.",
      link: "https://mega.nz/file/NcRigTCJ#d9AECnzhgtrf4mn9Rspk2YxewyNNo0JKFWzy9J69rcc",
    },
    {
      id: 2,
      name: "Curso de Albanilería y estructuras",
      price: 1800,
      category: "Oficios",
      img: '/src/assets/images/albanileria.png',
      description: "Conviértete en un albañil confiado y capacitado. Descubre cómo construir estructuras sólidas y duraderas.",
      link: "https://drive.google.com/drive/folders/1HkOj2K1KtvOOY7lZGLfmWotbwZXYzhxO?hl=es",
    },
    {
        id: 3,
        name: "Curso de Ajedrez. Domina el tablero",
        price: 1400,
        category: "Juegos",
        img: '/src/assets/images/ajedrez.png',
        stock: 23,
        description: "Aprende desde conceptos básicos hasta técnicas avanzadas para convertirte en un jugador mas sólido.",
        link: "https://drive.google.com/drive/folders/1HkOj2K1KtvOOY7lZGLfmWotbwZXYzhxO?hl=es",
    },

    {
        id: 4,
        name: "Curso de adiestramiento canino",
        price: 1600,
        category: "Oficios",
        img: '/src/assets/images/adiestramiento.png',
        stock: 18,
        description: "Aprende técnicas de entrenamiento efectivas y conprensión de la conducta del perro.",
        link: "https://drive.google.com/drive/folders/1HkOj2K1KtvOOY7lZGLfmWotbwZXYzhxO?hl=es",
    },

    {
        id: 5,
        name: "Curso de Agente Inmobiliario",
        price: 1200,
        category: "Oficios",
        img: '/src/assets/images/inmobiliario.png',
        stock: 12,
        description: "Aprende las mejores prácticas de negociación, cómo manejar transacciones y cómo desarrollar una una carrera exitosa.",
        link: "https://drive.google.com/drive/folders/1HkOj2K1KtvOOY7lZGLfmWotbwZXYzhxO?hl=es",
    },

    {
        id: 6,
        name: "Curso de Alemán Rápido y fácil",
        price: 1800,
        category: "Idiomas",
        img: '/src/assets/images/aleman.png',
        stock:18,
        description: "Aprende Alemán de manera eficiente, con un enfoque en la lectura, práctica y conversación.",
        link: "https://drive.google.com/drive/folders/1HkOj2K1KtvOOY7lZGLfmWotbwZXYzhxO?hl=es",
    },

    {
        id: 7,
        name: "Curso de alimentación saludable",
        price: 1500,
        category: "Salud",
        img: '/src/assets/images/alimentacion.png',
        stock: 19,
        description: "Mejora tu salud, aprende a equilibrar tu alimentación y mejora tu calidad de vida.",
        link: 'https://drive.google.com/drive/folders/1HkOj2K1KtvOOY7lZGLfmWotbwZXYzhxO?hl=es',
    },

    {
        id: 8,
        name: "Curso de Android Desarrollo de apps",
        price: 1950,
        category: "Tecnología",
        img: '/src/assets/images/android.png',
        stock:22,
        description: "Aprende a desarrollar apliaciones móviles y a crear apps para smartphones y tablets.",
        link: "https://drive.google.com/drive/folders/1HkOj2K1KtvOOY7lZGLfmWotbwZXYzhxO?hl=es",
    }
];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === parseInt(productId)));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(
          (prod) => prod.category.toLowerCase() === category.toLowerCase()
        );
        resolve(filteredProducts);
      }, 500);
    });
  };
  

