
import React from "react";
import { motion } from "framer-motion";

const PadresPadrinos = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="padres-padrinos"
      className="relative w-full overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      {/* Tarjeta principal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-2xl overflow-hidden border border-[#C7A46A] bg-[#FFFDF9] p-3 shadow-[0_12px_45px_rgba(80,60,30,0.08)] sm:p-4"
      >
        {/* Marco interior */}
        <div className="relative border border-[#D9C6A5] px-5 py-14 text-center sm:px-12 sm:py-20">

          {/* Decoración superior */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-xl tracking-[0.3em] text-[#A47B3C]"
          >
            ✦
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-xs uppercase tracking-[0.35em] text-[#A47B3C] sm:text-sm"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Mis XV Años
          </motion.p>

          {/* Título */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl leading-tight text-[#29251F] sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Con la bendición de
          </motion.h2>

          <div className="mx-auto my-9 h-px w-20 bg-[#C7A46A]" />

          {/* Padres */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="mb-6 text-sm uppercase tracking-[0.25em] text-[#A47B3C]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Mis Padres
            </p>

            <h3
              className="text-2xl leading-relaxed text-[#29251F] sm:text-3xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Victorino Garcia Lucero
            </h3>

            <p
              className="my-2 text-3xl text-[#A47B3C]"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              y
            </p>

            <h3
              className="text-2xl leading-relaxed text-[#29251F] sm:text-3xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Yuridia Reyes Alvarez
            </h3>
          </motion.div>

          {/* Separador */}
          <div className="my-12 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#C7A46A] sm:w-24" />
            <span className="text-xl text-[#A47B3C]">
              ✦
            </span>
            <div className="h-px w-16 bg-[#C7A46A] sm:w-24" />
          </div>

          {/* Padrinos */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="mb-6 text-sm uppercase tracking-[0.25em] text-[#A47B3C]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Mis Padrinos
            </p>

            <h3
              className="text-2xl leading-relaxed text-[#29251F] sm:text-3xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Maryeli Reyes Alvarez
            </h3>

            <p
              className="my-2 text-3xl text-[#A47B3C]"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              y
            </p>

            <h3
              className="text-2xl leading-relaxed text-[#29251F] sm:text-3xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Alfredo Macías Chavira
            </h3>
          </motion.div>

          {/* Mensaje final */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-12 max-w-md text-lg italic leading-relaxed text-[#876A43] sm:text-xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Gracias por acompañarme en este momento
            tan especial de mi vida.
          </motion.p>

          {/* Decoración inferior */}
          <div className="mt-9 text-xl text-[#A47B3C]">
            ✦
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PadresPadrinos;
