
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  PartyPopper,
  Crown,
  Sparkles,
  Heart,
  Clock3,
} from "lucide-react";

const eventos = [
  {
    hora: "5:00 PM",
    titulo: "Misa",
    descripcion:
      "Acompáñame a dar gracias a Dios por estos quince años de vida.",
    icono: Church,
  },
  {
    hora: "7:00 PM",
    titulo: "Recepción",
    descripcion:
      "Celebremos juntos una noche llena de alegría y momentos inolvidables.",
    icono: PartyPopper,
  },
];

export default function Itinerario() {
  return (
    <section
      id="itinerario"
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#EDE0CC]
        px-4 py-20
        sm:px-8 sm:py-28
      "
    >
      {/* MARCOS DECORATIVOS */}
      <div className="
        pointer-events-none absolute inset-3
        border border-[#B99558]/35
        sm:inset-6
      " />

      <div className="
        pointer-events-none absolute inset-[18px]
        border border-[#B99558]/20
        sm:inset-[30px]
      " />

      {/* DESTELLOS */}
      <motion.div
        className="
          pointer-events-none absolute
          left-[7%] top-14 text-[#B58A49]
        "
        animate={{
          opacity: [0.3, 1, 0.3],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Sparkles size={28} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none absolute
          right-[8%] bottom-20 text-[#B58A49]
        "
        animate={{
          opacity: [0.3, 0.9, 0.3],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        <Sparkles size={30} strokeWidth={1.2} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ENCABEZADO */}
        <motion.div
          className="mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="
              mx-auto mb-6 flex h-20 w-20
              items-center justify-center
              rounded-full
              border border-[#C7A46A]
              bg-[#F8F3EA]
              text-[#A47B3C]
            "
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Crown size={37} strokeWidth={1.2} />
          </motion.div>


          <h2
            className="
              mt-4 text-[65px] leading-tight
              text-[#A47B3C] sm:text-[85px]
            "
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Itinerario
          </h2>

          <div className="
            mx-auto my-6 flex items-center
            justify-center gap-3
          ">
            <span className="h-px w-16 bg-[#B99558]" />

            <Heart
              size={17}
              fill="#B99558"
              className="text-[#B99558]"
            />

            <span className="h-px w-16 bg-[#B99558]" />
          </div>

        </motion.div>

        {/* LÍNEA DEL TIEMPO */}
        <div className="relative mx-auto max-w-4xl">

          {/* LÍNEA VERTICAL */}
          <div
            className="
              absolute bottom-10 left-6 top-10
              w-px bg-[#B99558]/60
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-12 md:space-y-16">
            {eventos.map((evento, index) => {
              const Icono = evento.icono;
              const izquierda = index % 2 === 0;

              return (
                <motion.div
                  key={evento.titulo}
                  className="
                    relative grid
                    grid-cols-[48px_minmax(0,1fr)]
                    items-center gap-4
                    md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]
                    md:gap-5
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                >
                  {/* ICONO CENTRAL */}
                  <div
                    className="
                      relative z-10
                      col-start-1 row-start-1
                      flex h-12 w-12
                      items-center justify-center
                      rounded-full
                      border-[3px] border-[#F8F3EA]
                      bg-[#A47B3C]
                      text-white
                      shadow-[0_6px_20px_rgba(100,75,35,0.2)]
                      md:col-start-2
                      md:mx-auto
                      md:h-16 md:w-16
                    "
                  >
                    <Icono
                      size={23}
                      strokeWidth={1.5}
                      className="md:h-7 md:w-7"
                    />
                  </div>

                  {/* TARJETA */}
                  <motion.article
                    className={`
                      relative min-w-0
                      col-start-2 row-start-1
                      border border-[#C7A46A]
                      bg-[#FFFDF9]
                      px-4 py-7
                      shadow-[0_12px_35px_rgba(100,75,35,0.1)]
                      sm:px-7 sm:py-9
                      ${
                        izquierda
                          ? "md:col-start-1 md:text-right"
                          : "md:col-start-3 md:text-left"
                      }
                    `}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* MARCO INTERIOR */}
                    <div
                      className="
                        pointer-events-none
                        absolute inset-[6px]
                        border border-[#C7A46A]/25
                      "
                    />

                    {/* HORA */}
                    <div
                      className={`
                        relative flex items-center gap-2
                        text-[#A47B3C]
                        ${
                          izquierda
                            ? "md:justify-end"
                            : "md:justify-start"
                        }
                      `}
                    >
                      <Clock3 size={18} strokeWidth={1.5} />

                      <span
                        className="
                          text-sm font-semibold
                          uppercase tracking-[0.12em]
                        "
                        style={{
                          fontFamily:
                            "'Playfair Display', serif",
                        }}
                      >
                        {evento.hora}
                      </span>
                    </div>

                    {/* TÍTULO */}
                    <h3
                      className="
                        relative mt-4
                        text-[43px] leading-tight
                        text-[#A47B3C]
                        sm:text-[53px]
                      "
                      style={{
                        fontFamily: "'Great Vibes', cursive",
                      }}
                    >
                      {evento.titulo}
                    </h3>

                    {/* SEPARADOR */}
                    <div
                      className={`
                        relative my-4 flex items-center gap-2
                        ${
                          izquierda
                            ? "md:justify-end"
                            : "md:justify-start"
                        }
                      `}
                    >
                      <span className="h-px w-12 bg-[#C7A46A]" />
                      <Sparkles
                        size={15}
                        className="text-[#A47B3C]"
                      />
                    </div>

                    {/* LUGAR */}
                    <p
                      className="
                        relative text-[19px]
                        font-semibold leading-snug
                        text-[#29251F]
                        sm:text-[22px]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {evento.lugar}
                    </p>

                    {/* DESCRIPCIÓN */}
                    <p
                      className="
                        relative mt-3 text-[17px]
                        leading-relaxed text-[#50473D]
                        sm:text-[19px]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                      }}
                    >
                      {evento.descripcion}
                    </p>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MENSAJE FINAL */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles
            size={24}
            strokeWidth={1.3}
            className="mx-auto text-[#A47B3C]"
          />

          <p
            className="
              mt-5 text-[40px]
              leading-tight text-[#A47B3C]
              sm:text-[52px]
            "
            style={{
              fontFamily: "'Allura', cursive",
            }}
          >
            ¡Disfrutemos juntos cada momento!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
