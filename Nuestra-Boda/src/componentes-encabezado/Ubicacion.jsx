
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  MapPin,
  Clock3,
  CalendarDays,
  Crown,
  Sparkles,
  PartyPopper,
  Heart,
  Navigation,
} from "lucide-react";

const ubicaciones = [
  {
    id: "ceremonia",
    tipo: "Ceremonia religiosa",
    lugar: "Parroquia de San Pedro Apóstol",
    hora: "5:00 PM",
    direccion:
      "Av. 5 de Mayo & Avenida 4 Poniente, Av. 5 de Mayo, Centro, 72760 San Pedro Cholula, Pue.",
    maps: "https://maps.app.goo.gl/ZpVV2qs9L2jPDHE17",
    icono: Church,
  },
  {
    id: "recepcion",
    tipo: "Recepción",
    lugar: "Salón Zerezotla",
    hora: "7:00 PM",
    direccion:
      "C. 15 Sur 1509, Barrio de Sta. María Xixitla, 72764 San Pedro Cholula, Pue.",
    maps: "https://maps.app.goo.gl/74bubNFvaXBFAGdc9",
    icono: PartyPopper,
  },
];

const animacionEntrada = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Celebracion() {
  return (
    <section
      id="celebracion"
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#FFFDF9]
        px-4 py-20
        sm:px-8 sm:py-28
      "
    >
      {/* MARCOS DECORATIVOS */}
      <div
        className="
          pointer-events-none
          absolute inset-3
          border border-[#C7A46A]/30
          sm:inset-6
        "
      />

      <div
        className="
          pointer-events-none
          absolute inset-[18px]
          border border-[#C7A46A]/15
          sm:inset-[30px]
        "
      />

      {/* DESTELLOS */}
      <motion.div
        className="
          pointer-events-none
          absolute left-[7%] top-14
          text-[#B99558]
        "
        animate={{
          opacity: [0.3, 1, 0.3],
          rotate: [0, 20, 0],
          scale: [0.85, 1.1, 0.85],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={28} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute right-[8%] top-32
          text-[#B99558]
        "
        animate={{
          opacity: [0.25, 0.9, 0.25],
          rotate: [0, -15, 0],
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
          className="mx-auto mb-14 text-center"
          initial="hidden"
          whileInView="visible"
          variants={animacionEntrada}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* CORONA */}
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
              ease: "easeInOut",
            }}
          >
            <Crown size={36} strokeWidth={1.2} />
          </motion.div>

          <h2
            className="
              text-[65px] leading-tight
              text-[#A47B3C]
              sm:text-[85px]
            "
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Celebración
          </h2>

          <div
            className="
              mx-auto mt-3 flex
              items-center justify-center gap-3
            "
          >
            <span className="h-px w-16 bg-[#C7A46A]" />

            <Heart
              size={16}
              fill="#B99558"
              className="text-[#B99558]"
            />

            <span className="h-px w-16 bg-[#C7A46A]" />
          </div>

          <p
            className="
              mx-auto mt-7 max-w-2xl
              text-[21px] leading-relaxed
              text-[#29251F]
              sm:text-[26px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Con mucha alegría quiero compartir contigo
            uno de los días más especiales de mi vida.
            Tu presencia hará que esta celebración
            sea aún más inolvidable.
          </p>

          {/* FECHA */}
          <div
            className="
              mx-auto mt-9
              flex max-w-fit
              items-center justify-center gap-3
              border-y border-[#C7A46A]/60
              px-5 py-4
            "
          >
            <CalendarDays
              size={20}
              className="text-[#A47B3C]"
              strokeWidth={1.4}
            />

            <span
              className="
                text-sm uppercase
                tracking-[0.13em]
                text-[#29251F]
                sm:text-base
              "
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Sábado 19 de diciembre de 2026
            </span>
          </div>
        </motion.div>

        {/* TARJETAS DE UBICACIONES */}
        <div
          className="
            grid grid-cols-1
            gap-8
            lg:grid-cols-2
            lg:gap-10
          "
        >
          {ubicaciones.map((ubicacion, index) => {
            const Icono = ubicacion.icono;

            return (
              <motion.article
                key={ubicacion.id}
                className="
                  relative flex h-full
                  flex-col items-center
                  border border-[#C7A46A]
                  bg-[#F8F3EA]
                  px-5 py-10
                  text-center
                  shadow-[0_15px_45px_rgba(100,75,35,0.09)]
                  sm:px-9 sm:py-12
                "
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.75,
                  delay: index * 0.15,
                }}
              >
                {/* MARCO INTERIOR */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-[7px]
                    border border-[#C7A46A]/25
                  "
                />

                {/* ICONO */}
                <div
                  className="
                    relative mb-7
                    flex h-[76px] w-[76px]
                    items-center justify-center
                    rounded-full
                    border border-[#C7A46A]
                    bg-white
                    text-[#A47B3C]
                  "
                >
                  <Icono size={34} strokeWidth={1.2} />
                </div>

                {/* TIPO DE EVENTO */}
                <p
                  className="
                    relative mb-3
                    text-[11px] uppercase
                    tracking-[0.2em]
                    text-[#86683D]
                    sm:text-xs
                  "
                  style={{
                    fontFamily:
                      "'Playfair Display', serif",
                  }}
                >
                  {ubicacion.tipo}
                </p>

                {/* LUGAR */}
                <h3
                  className="
                    relative min-h-[75px]
                    text-[32px] leading-tight
                    text-[#29251F]
                    sm:text-[39px]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                  }}
                >
                  {ubicacion.lugar}
                </h3>

                {/* SEPARADOR */}
                <div
                  className="
                    relative my-6 flex
                    items-center justify-center gap-3
                  "
                >
                  <span className="h-px w-12 bg-[#C7A46A]" />
                  <Sparkles
                    size={16}
                    className="text-[#A47B3C]"
                  />
                  <span className="h-px w-12 bg-[#C7A46A]" />
                </div>

                {/* HORARIO */}
                <div
                  className="
                    relative mb-6
                    flex items-center
                    justify-center gap-3
                  "
                >
                  <Clock3
                    size={23}
                    strokeWidth={1.4}
                    className="text-[#A47B3C]"
                  />

                  <span
                    className="
                      text-[29px]
                      font-semibold
                      text-[#A47B3C]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {ubicacion.hora}
                  </span>
                </div>

                {/* DIRECCIÓN */}
                <div className="relative mb-9 flex-1">
                  <MapPin
                    size={23}
                    strokeWidth={1.3}
                    className="mx-auto mb-3 text-[#A47B3C]"
                  />

                  <p
                    className="
                      mx-auto max-w-sm
                      text-[17px] leading-[1.8]
                      text-[#39332B]
                      sm:text-[19px]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {ubicacion.direccion}
                  </p>
                </div>

                {/* BOTÓN GOOGLE MAPS */}
                <motion.a
                  href={ubicacion.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative inline-flex
                    w-full max-w-[270px]
                    items-center justify-center
                    gap-3
                    rounded-full
                    bg-[#A47B3C]
                    px-5 py-4
                    text-xs font-medium
                    uppercase tracking-[0.12em]
                    text-white
                    shadow-[0_8px_22px_rgba(164,123,60,0.2)]
                    transition-colors
                    hover:bg-[#87612D]
                    sm:text-sm
                  "
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Navigation
                    size={18}
                    strokeWidth={1.5}
                  />
                  Ver ubicación
                </motion.a>
              </motion.article>
            );
          })}
        </div>

        {/* MENSAJE INFERIOR */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              text-[38px] leading-tight
              text-[#A47B3C]
              sm:text-[48px]
            "
            style={{
              fontFamily: "'Allura', cursive",
            }}
          >
            ¡Te espero para celebrar juntos!
          </p>

          <div
            className="
              mt-4 flex items-center
              justify-center gap-3
            "
          >
            <span className="h-px w-12 bg-[#C7A46A]" />
            <Crown
              size={20}
              strokeWidth={1.2}
              className="text-[#A47B3C]"
            />
            <span className="h-px w-12 bg-[#C7A46A]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
