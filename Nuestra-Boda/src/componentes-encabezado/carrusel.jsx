
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Sparkles,
  Heart,
} from "lucide-react";

// FOTOGRAFÍAS
const images = [
  {
    src: "/Carrusel01v.jpeg",
    alt: "Fotografía especial 1 de Emily",
    position: "center",
  },
  {
    src: "/Carrusel02.jpeg",
    alt: "Fotografía especial 2 de Emily",
    position: "center",
  },
  {
    src: "/Carrusel03.jpeg",
    alt: "Fotografía especial 3 de Emily",
    position: "center",
  },
  {
    src: "/Carrusel04.jpeg",
    alt: "Fotografía especial 4 de Emily",
    position: "center",
  },
   {
    src: "/Carrusel05.jpeg",
    alt: "Fotografía especial 4 de Emily",
    position: "center",
  },
   {
    src: "/Carrusel06.jpeg",
    alt: "Fotografía especial 4 de Emily",
    position: "center",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [imagenesListas, setImagenesListas] =
    useState(false);

  const pausaTimeout = useRef(null);
  const imagenesCargadas = useRef(new Set());

  // PRECARGAR TODAS LAS FOTOGRAFÍAS
  useEffect(() => {
    let activo = true;

    const precargar = images.map((imagen) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
          if (activo) {
            imagenesCargadas.current.add(imagen.src);
          }
          resolve();
        };

        img.onerror = () => {
          resolve();
        };

        img.src = imagen.src;

        if (img.complete) {
          resolve();
        }
      });
    });

    Promise.all(precargar).then(() => {
      if (activo) {
        setImagenesListas(true);
      }
    });

    return () => {
      activo = false;
    };
  }, []);

  // CAMBIO AUTOMÁTICO
  useEffect(() => {
    if (pausado || !imagenesListas) return;

    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(intervalo);
  }, [pausado, imagenesListas]);

  // LIMPIAR TEMPORIZADOR
  useEffect(() => {
    return () => {
      if (pausaTimeout.current) {
        clearTimeout(pausaTimeout.current);
      }
    };
  }, []);

  // PAUSA TEMPORAL DESPUÉS DE INTERACTUAR
  const pausarTemporalmente = () => {
    setPausado(true);

    if (pausaTimeout.current) {
      clearTimeout(pausaTimeout.current);
    }

    pausaTimeout.current = setTimeout(() => {
      setPausado(false);
    }, 7000);
  };

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
    pausarTemporalmente();
  };

  const prevImage = () => {
    setIndex(
      (prev) =>
        (prev - 1 + images.length) % images.length
    );
    pausarTemporalmente();
  };

  const seleccionarImagen = (nuevoIndex) => {
    setIndex(nuevoIndex);
    pausarTemporalmente();
  };

  return (
    <section
      id="carousel"
      className="
        carouselXV
        relative isolate
        w-full overflow-hidden
        bg-[#EDE0CC]
        px-4 py-20
        sm:px-8 sm:py-28
      "
    >
      {/* MARCOS DECORATIVOS */}
      <div
        className="
          pointer-events-none
          absolute inset-3
          border border-[#B99558]/35
          sm:inset-6
        "
      />

      <div
        className="
          pointer-events-none
          absolute inset-[18px]
          border border-[#B99558]/20
          sm:inset-[30px]
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          pointer-events-none
          absolute left-[7%] top-16
          text-[#B58A49]
        "
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Sparkles size={29} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute right-[8%] top-36
          text-[#B58A49]
        "
        animate={{
          opacity: [0.25, 0.9, 0.25],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        <Sparkles size={32} strokeWidth={1.2} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="
              mx-auto mb-6
              flex h-20 w-20
              items-center justify-center
              rounded-full
              border border-[#C7A46A]
              bg-[#F8F3EA]
              text-[#A47B3C]
            "
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <Camera size={35} strokeWidth={1.2} />
          </motion.div>

          <p
            className="
              text-xs uppercase
              tracking-[0.3em]
              text-[#86683D]
              sm:text-sm
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Recuerdos especiales
          </p>

          <h2
            className="
              mt-4 text-[65px]
              leading-tight
              text-[#A47B3C]
              sm:text-[85px]
            "
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Mis Momentos
          </h2>

          <div
            className="
              mx-auto my-6
              flex items-center
              justify-center gap-3
            "
          >
            <span className="h-px w-16 bg-[#B99558]" />

            <Heart
              size={17}
              fill="#B99558"
              className="text-[#B99558]"
            />

            <span className="h-px w-16 bg-[#B99558]" />
          </div>

          <p
            className="
              mx-auto max-w-xl
              text-[21px]
              leading-relaxed
              text-[#29251F]
              sm:text-[25px]
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
          >
            Cada fotografía guarda un instante
            especial de esta hermosa etapa de mi vida.
          </p>
        </motion.div>

        {/* TARJETA PRINCIPAL */}
        <motion.div
          className="
            mx-auto max-w-5xl
            border border-[#C7A46A]
            bg-[#F8F3EA]
            p-3
            shadow-[0_20px_60px_rgba(100,75,35,0.12)]
            sm:p-5
          "
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* VISOR DE IMÁGENES */}
          <div
            className="
              relative w-full
              h-[430px]
              overflow-hidden
              bg-[#E5D8C4]
              sm:h-[570px]
              md:h-[680px]
              lg:h-[720px]
            "
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
          >
            {/* TODAS LAS IMÁGENES PERMANECEN MONTADAS */}
            {images.map((imagen, i) => (
              <div
                key={imagen.src}
                className="
                  absolute inset-0
                  transition-opacity
                  duration-700
                  ease-in-out
                "
                style={{
                  opacity: index === i ? 1 : 0,
                  zIndex: index === i ? 2 : 1,
                  pointerEvents:
                    index === i ? "auto" : "none",
                }}
                aria-hidden={index !== i}
              >
                {/* FONDO SUAVE */}
                <img
                  src={imagen.src}
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  decoding="async"
                  className="
                    absolute inset-0
                    h-full w-full
                    scale-110
                    object-cover
                    opacity-25
                    blur-2xl
                  "
                  style={{
                    objectPosition: imagen.position,
                  }}
                />

                {/* FOTOGRAFÍA COMPLETA */}
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  loading="eager"
                  decoding="async"
                  className="
                    relative z-10
                    h-full w-full
                    object-contain
                  "
                  style={{
                    objectPosition: imagen.position,
                  }}
                  draggable={false}
                />
              </div>
            ))}

            {/* INDICADOR SUPERIOR */}
            <div
              className="
                absolute right-4 top-4 z-20
                border border-[#C7A46A]
                bg-[#FFFDF9]/95
                px-4 py-2
                text-sm tracking-[0.15em]
                text-[#29251F]
                shadow-md
              "
              style={{
                fontFamily:
                  "'Playfair Display', serif",
              }}
            >
              {String(index + 1).padStart(2, "0")}
              <span className="mx-2 text-[#A47B3C]">
                /
              </span>
              {String(images.length).padStart(2, "0")}
            </div>

            {/* CARGA INICIAL */}
            {!imagenesListas && (
              <div
                className="
                  absolute inset-0 z-30
                  flex items-center justify-center
                  bg-[#E5D8C4]
                "
              >
                <div className="text-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles
                      size={34}
                      className="
                        mx-auto text-[#A47B3C]
                      "
                    />
                  </motion.div>

                  <p
                    className="
                      mt-4 text-sm
                      text-[#6D5534]
                    "
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    Preparando recuerdos...
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* CONTROLES DEBAJO DE LA IMAGEN */}
          <div
            className="
              mt-6 flex
              items-center justify-center
              gap-5
              sm:gap-8
            "
          >
            {/* ANTERIOR */}
            <motion.button
              type="button"
              onClick={prevImage}
              disabled={!imagenesListas}
              aria-label="Fotografía anterior"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#C7A46A]
                bg-[#A47B3C]
                text-white
                shadow-md
                transition-colors
                hover:bg-[#87612D]
                disabled:opacity-50
                sm:h-14 sm:w-14
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <ChevronLeft size={24} strokeWidth={1.7} />
            </motion.button>

            {/* INDICADORES */}
            <div
              className="
                flex items-center
                justify-center gap-2
              "
            >
              {images.map((imagen, i) => (
                <button
                  key={imagen.src}
                  type="button"
                  disabled={!imagenesListas}
                  onClick={() => seleccionarImagen(i)}
                  aria-label={`Ver fotografía ${i + 1}`}
                  aria-current={index === i ? "true" : undefined}
                  className="
                    flex h-9
                    items-center justify-center
                    disabled:opacity-50
                  "
                >
                  <span
                    className={`
                      block h-2
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        index === i
                          ? "w-8 bg-[#A47B3C]"
                          : "w-2 bg-[#C7A46A]/60"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            {/* SIGUIENTE */}
            <motion.button
              type="button"
              onClick={nextImage}
              disabled={!imagenesListas}
              aria-label="Fotografía siguiente"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#C7A46A]
                bg-[#A47B3C]
                text-white
                shadow-md
                transition-colors
                hover:bg-[#87612D]
                disabled:opacity-50
                sm:h-14 sm:w-14
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <ChevronRight size={24} strokeWidth={1.7} />
            </motion.button>
          </div>

          {/* MINIATURAS */}
          <div
            className="
              mt-6 flex
              items-center justify-center
              gap-3
              overflow-x-auto
              px-2 pb-3
            "
          >
            {images.map((imagen, i) => (
              <motion.button
                key={imagen.src}
                type="button"
                disabled={!imagenesListas}
                onClick={() => seleccionarImagen(i)}
                aria-label={`Seleccionar fotografía ${i + 1}`}
                className={`
                  relative h-16 w-14
                  flex-shrink-0
                  overflow-hidden
                  border-2
                  shadow-sm
                  transition-all
                  duration-300
                  sm:h-20 sm:w-16
                  ${
                    index === i
                      ? "border-[#A47B3C] opacity-100"
                      : "border-[#D7C4A4] opacity-60"
                  }
                `}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <img
                  src={imagen.src}
                  alt=""
                  loading="eager"
                  className="
                    h-full w-full
                    object-cover
                  "
                  style={{
                    objectPosition: imagen.position,
                  }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FRASE FINAL */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              text-[40px] leading-tight
              text-[#A47B3C]
              sm:text-[52px]
            "
            style={{
              fontFamily: "'Allura', cursive",
            }}
          >
            Recuerdos que vivirán por siempre
          </p>
        </motion.div>
      </div>
    </section>
  );
}
