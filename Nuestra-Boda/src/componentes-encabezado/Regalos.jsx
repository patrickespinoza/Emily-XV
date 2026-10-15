
import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  Sparkles,
  Mail,
} from "lucide-react";

export default function Regalos() {
  return (
    <section
      id="regalos"
      className="
        regalosXV
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
        className="
          relative z-10
          mx-auto max-w-4xl
          border border-[#C7A46A]
          bg-[#F8F3EA]
          px-5 py-14
          text-center
          shadow-[0_20px_60px_rgba(100,75,35,0.1)]
          sm:px-12 sm:py-16
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.85,
          ease: "easeOut",
        }}
      >
        {/* MARCO INTERIOR */}
        <div
          className="
            pointer-events-none
            absolute inset-[7px]
            border border-[#C7A46A]/30
          "
        />

        <div className="relative z-10">


          {/* SEPARADOR */}
          <div
            className="
              mx-auto my-8
              flex items-center
              justify-center gap-3
            "
          >
            <span className="h-px w-16 bg-[#C7A46A]" />

            <Heart
              size={17}
              fill="#B99558"
              className="text-[#B99558]"
            />

            <span className="h-px w-16 bg-[#C7A46A]" />
          </div>

          {/* MENSAJE PRINCIPAL */}
          <p
            className="
              mx-auto max-w-2xl
              text-[22px]
              leading-[1.8]
              text-[#29251F]
              sm:text-[27px]
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
            }}
          >
            Tu presencia es el regalo más importante
            para mí. Compartir contigo este día
            tan especial es algo que guardaré
            siempre en mi corazón.
          </p>

          {/* OPCIÓN LLUVIA DE SOBRES */}
          <motion.div
            className="
              relative mx-auto mt-12
              max-w-xl
              overflow-hidden
              border border-[#C7A46A]
              bg-[#FFFDF9]
              px-5 py-10
              shadow-[0_12px_35px_rgba(100,75,35,0.08)]
              sm:px-10 sm:py-12
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            {/* MARCO INTERIOR */}
            <div
              className="
                pointer-events-none
                absolute inset-[6px]
                border border-[#C7A46A]/20
              "
            />

            {/* SOBRE ANIMADO */}
            <motion.div
              className="
                relative mx-auto mb-7
                flex h-28 w-36
                items-center justify-center
              "
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* DESTELLOS DEL SOBRE */}
              <motion.div
                className="
                  absolute -left-3 top-1
                  text-[#B99558]
                "
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.7, 1.2, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={22} strokeWidth={1.2} />
              </motion.div>

              <motion.div
                className="
                  absolute -right-2 bottom-2
                  text-[#B99558]
                "
                animate={{
                  opacity: [1, 0.2, 1],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={19} strokeWidth={1.2} />
              </motion.div>

              {/* FONDO DEL SOBRE */}
              <div
                className="
                  absolute inset-x-3
                  bottom-3 top-5
                  border border-[#C7A46A]
                  bg-[#E8D9BF]
                  shadow-[0_12px_25px_rgba(100,75,35,0.12)]
                "
              />

              {/* ICONO DEL SOBRE */}
              <Mail
                size={105}
                strokeWidth={0.8}
                className="
                  relative z-10
                  text-[#A47B3C]
                "
              />

              {/* CORAZÓN CENTRAL */}
              <div
                className="
                  absolute left-1/2 top-[53%]
                  z-20
                  flex h-8 w-8
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-[#C7A46A]
                  bg-[#FFFDF9]
                "
              >
                <Heart
                  size={16}
                  fill="#A47B3C"
                  className="text-[#A47B3C]"
                />
              </div>
            </motion.div>

            {/* TÍTULO DE OPCIÓN */}
            <h3
              className="
                relative text-[47px]
                leading-tight
                text-[#A47B3C]
                sm:text-[60px]
              "
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Lluvia de Sobres
            </h3>

            {/* TEXTO EXPLICATIVO */}
            <p
              className="
                relative mx-auto mt-5
                max-w-md
                text-[20px]
                leading-[1.8]
                text-[#39332B]
                sm:text-[23px]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Si deseas tener un detalle conmigo,
              puedes hacerlo mediante un sobre
              con tu regalo en efectivo,
              el cual podrás entregar
              el día de la celebración.
            </p>

            {/* SEPARADOR */}
            <div
              className="
                relative mx-auto mt-8
                flex items-center
                justify-center gap-3
              "
            >
              <span className="h-px w-12 bg-[#C7A46A]" />

              <Sparkles
                size={18}
                strokeWidth={1.2}
                className="text-[#A47B3C]"
              />

              <span className="h-px w-12 bg-[#C7A46A]" />
            </div>
          </motion.div>

          {/* FRASE FINAL */}
          <motion.p
            className="
              mx-auto mt-10
              max-w-xl
              text-[38px]
              leading-tight
              text-[#A47B3C]
              sm:text-[48px]
            "
            style={{
              fontFamily: "'Allura', cursive",
            }}
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            ¡Gracias por acompañarme en este sueño!
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
