
import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Shirt,
  Sparkles,
  Heart,
} from "lucide-react";

const coloresReservados = [
  {
    nombre: "Dorado",
    color: "#C7A46A",
  },
  {
    nombre: "Blanco",
    color: "#FFFFFF",
  },
  {
    nombre: "Beige",
    color: "#E8D9BF",
  },
];

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      className="
        vestimentaXV
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
          absolute left-[7%] top-16
          text-[#B99558]
        "
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.85, 1.15, 0.85],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={29} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute right-[8%] bottom-20
          text-[#B99558]
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

      {/* TARJETA PRINCIPAL */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative z-10
          mx-auto max-w-4xl
          border border-[#C7A46A]
          bg-[#F8F3EA]
          px-5 py-12
          text-center
          shadow-[0_20px_60px_rgba(100,75,35,0.1)]
          sm:px-12 sm:py-16
        "
      >
        {/* MARCO INTERIOR */}
        <div
          className="
            pointer-events-none
            absolute inset-[7px]
            border border-[#C7A46A]/30
          "
        />

        {/* CORONA */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative mx-auto mb-6
            flex h-20 w-20
            items-center justify-center
            rounded-full
            border border-[#C7A46A]
            bg-white
            text-[#A47B3C]
          "
        >
          <Crown size={36} strokeWidth={1.2} />
        </motion.div>


        {/* TÍTULO */}
        <h2
          className="
            relative mx-auto mt-5
            max-w-2xl
            text-[clamp(2.8rem,7vw,5.3rem)]
            leading-[1.15]
            text-[#A47B3C]
          "
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Código de Vestimenta
        </h2>

        {/* SEPARADOR */}
        <div
          className="
            relative my-8
            flex items-center
            justify-center gap-4
          "
        >
          <span className="h-px w-14 bg-[#C7A46A] sm:w-24" />

          <Shirt
            size={23}
            strokeWidth={1.3}
            className="text-[#A47B3C]"
          />

          <span className="h-px w-14 bg-[#C7A46A] sm:w-24" />
        </div>

        {/* VESTIMENTA FORMAL */}
        <p
          className="
            relative text-[42px]
            leading-tight text-[#29251F]
            sm:text-[56px]
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Formal
        </p>

        {/* DESCRIPCIÓN */}
        <p
          className="
            relative mx-auto mt-6
            max-w-xl
            text-[20px] leading-[1.8]
            text-[#39332B]
            sm:text-[24px]
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Me encantará compartir este día contigo.
          Te invito a vestir de manera formal
          para hacer de esta celebración
          un recuerdo inolvidable.
        </p>

        {/* DIVISOR */}
        <div
          className="
            relative mx-auto my-10
            h-px w-24 bg-[#C7A46A]
          "
        />

        {/* COLORES RESERVADOS */}
        <div className="relative">
          <h3
            className="
              text-[42px] leading-tight
              text-[#A47B3C]
              sm:text-[55px]
            "
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Colores reservados
          </h3>

          <p
            className="
              mx-auto mt-4 max-w-xl
              text-[19px] leading-relaxed
              text-[#39332B]
              sm:text-[22px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Los siguientes colores están reservados
            para la quinceañera y su celebración.
            Agradecemos que evites utilizarlos
            en tu vestimenta.
          </p>

          {/* MUESTRAS DE COLORES */}
          <div
            className="
              mt-9 flex flex-wrap
              items-start justify-center
              gap-6 sm:gap-12
            "
          >
            {coloresReservados.map((color, index) => (
              <motion.div
                key={color.nombre}
                className="
                  flex flex-col
                  items-center gap-3
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >
                <div
                  className="
                    flex h-[74px] w-[74px]
                    items-center justify-center
                    rounded-full
                    border border-[#C7A46A]
                    bg-white
                    p-[5px]
                    shadow-[0_7px_20px_rgba(100,75,35,0.1)]
                    sm:h-[88px] sm:w-[88px]
                  "
                >
                  <div
                    className="
                      h-full w-full
                      rounded-full
                      border border-[#D9C9AE]/60
                    "
                    style={{
                      backgroundColor: color.color,
                    }}
                  />
                </div>

                <span
                  className="
                    text-sm font-medium
                    text-[#29251F]
                    sm:text-base
                  "
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {color.nombre}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MENSAJE FINAL */}
        <div
          className="
            relative mx-auto mt-12
            flex items-center justify-center gap-3
          "
        >
          <span className="h-px w-12 bg-[#C7A46A]" />

          <Heart
            size={18}
            strokeWidth={1.2}
            fill="#B99558"
            className="text-[#B99558]"
          />

          <span className="h-px w-12 bg-[#C7A46A]" />
        </div>

        <p
          className="
            relative mt-5 text-[35px]
            leading-tight text-[#A47B3C]
            sm:text-[45px]
          "
          style={{
            fontFamily: "'Allura', cursive",
          }}
        >
          Gracias por ser parte de este día especial
        </p>
      </motion.div>
    </section>
  );
}
