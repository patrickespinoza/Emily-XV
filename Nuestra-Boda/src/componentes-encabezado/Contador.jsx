
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Heart } from "lucide-react";

const FECHA_EVENTO = "2026-12-19T17:00:00-06:00";

const calcularTiempo = (fecha) => {
  const diferencia = Math.max(
    0,
    new Date(fecha).getTime() - Date.now()
  );

  return {
    Días: Math.floor(diferencia / 86400000),
    Horas: Math.floor((diferencia / 3600000) % 24),
    Minutos: Math.floor((diferencia / 60000) % 60),
    Segundos: Math.floor((diferencia / 1000) % 60),
  };
};

export default function Contador({
  titulo = "¡Estás invitado!",
  texto = "Hay momentos que se sueñan toda la vida, y para mí será muy especial compartir este día contigo.",
  frase = "La magia está por comenzar",
  fecha = FECHA_EVENTO,
}) {
  const [tiempoRestante, setTiempoRestante] = useState(
    () => calcularTiempo(fecha)
  );

  useEffect(() => {
    setTiempoRestante(calcularTiempo(fecha));

    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempo(fecha));
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fecha]);

  const elementosContador = Object.entries(tiempoRestante);

  return (
    <section
      id="contador"
      className="
        contadorXV
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

      {/* DECORACIONES SUPERIORES */}
      <motion.div
        className="
          pointer-events-none
          absolute left-[7%] top-12
          text-[#B58A49]
        "
        animate={{
          rotate: [-10, 10, -10],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={29} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute right-[8%] top-24
          text-[#B58A49]
        "
        animate={{
          scale: [0.9, 1.15, 0.9],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Sparkles size={25} strokeWidth={1.2} />
      </motion.div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          {/* CORONA */}
          <motion.div
            className="
              mx-auto mb-7
              flex h-20 w-20
              items-center justify-center
              rounded-full
              border border-[#C5A46A]
              bg-[#F8F3EA]
              text-[#AD8647]
              shadow-[0_8px_25px_rgba(100,75,35,0.12)]
            "
            animate={{
              y: [0, -5, 0],
              rotate: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Crown size={38} strokeWidth={1.2} />
          </motion.div>

          {/* SUBTÍTULO */}
          <p
            className="
              mb-4
              text-[11px] uppercase
              tracking-[0.35em]
              text-[#886A3D]
              sm:text-sm
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Mis XV años
          </p>

          {/* TÍTULO */}
          <h2
            className="
              text-[55px] leading-[1.15]
              text-[#A47B3C]
              sm:text-[75px]
              md:text-[90px]
            "
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            {titulo}
          </h2>

          {/* TEXTO */}
          <p
            className="
              mx-auto mt-6 max-w-2xl
              px-3 text-[21px]
              leading-[1.7]
              text-[#27231F]
              sm:text-[26px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {texto}
          </p>

          {/* SEPARADOR */}
          <div
            className="
              mx-auto my-8
              flex items-center
              justify-center gap-4
            "
          >
            <span className="h-px w-16 bg-[#B99558]" />

            <Heart
              size={17}
              strokeWidth={1.3}
              fill="#B99558"
              className="text-[#B99558]"
            />

            <span className="h-px w-16 bg-[#B99558]" />
          </div>

          {/* FRASE */}
          <p
            className="
              text-[35px] leading-tight
              text-[#9D763D]
              sm:text-[46px]
            "
            style={{
              fontFamily: "'Allura', cursive",
            }}
          >
            {frase}
          </p>
        </motion.div>

        {/* CONTADOR */}
        <motion.div
          className="
            relative mx-auto mt-12
            max-w-4xl
            border border-[#C7A46A]
            bg-[#F8F3EA]
            p-3
            shadow-[0_20px_50px_rgba(95,70,35,0.12)]
            sm:mt-16 sm:p-7
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          {/* MARCO INTERIOR */}
          <div
            className="
              pointer-events-none
              absolute inset-[5px]
              border border-[#C7A46A]/30
              sm:inset-[9px]
            "
          />

          <div
            className="
              relative grid grid-cols-4
              gap-1.5
              sm:gap-4
            "
          >
            {elementosContador.map(
              ([etiqueta, valor], indice) => (
                <motion.div
                  key={etiqueta}
                  className="
                    flex min-w-0 flex-col
                    items-center justify-center
                    border border-[#D7C4A4]
                    bg-white
                    px-1 py-5
                    text-center
                    sm:min-h-[155px]
                    sm:px-4 sm:py-7
                  "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: indice * 0.1,
                  }}
                >
                  {/* NÚMERO */}
                  <span
                    className="
                      text-[clamp(1.6rem,5vw,4rem)]
                      font-semibold
                      leading-none
                      tabular-nums
                      text-[#A47B3C]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {String(valor).padStart(2, "0")}
                  </span>

                  {/* LÍNEA */}
                  <div
                    className="
                      my-3 h-px w-5
                      bg-[#C7A46A]
                      sm:my-5 sm:w-10
                    "
                  />

                  {/* ETIQUETA */}
                  <span
                    className="
                      text-[8px]
                      font-medium uppercase
                      tracking-[0.04em]
                      text-[#302920]
                      sm:text-xs
                      sm:tracking-[0.15em]
                    "
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    {etiqueta}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* FECHA INFERIOR */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >

          <div
            className="
              mt-5 flex items-center
              justify-center gap-3
              text-[#B58A49]
            "
          >
            <span className="h-px w-10 bg-[#B99558]" />
            <Sparkles size={18} strokeWidth={1.3} />
            <span className="h-px w-10 bg-[#B99558]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
