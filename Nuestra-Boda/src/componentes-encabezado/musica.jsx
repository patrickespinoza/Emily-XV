
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Crown,
  Music2,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function MusicaXV() {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;

    const alReproducir = () => setReproduciendo(true);
    const alPausar = () => setReproduciendo(false);

    audio.addEventListener("play", alReproducir);
    audio.addEventListener("pause", alPausar);
    audio.addEventListener("ended", alPausar);

    return () => {
      audio.removeEventListener("play", alReproducir);
      audio.removeEventListener("pause", alPausar);
      audio.removeEventListener("ended", alPausar);
    };
  }, []);

  const iniciarConMusica = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    setSilenciado(false);
    setMostrarModal(false);

    try {
      await audio.play();
    } catch (error) {
      console.warn("No se pudo iniciar la música:", error);
      setReproduciendo(false);
    }
  };

  const continuarSinMusica = () => {
    audioRef.current?.pause();
    setReproduciendo(false);
    setMostrarModal(false);
  };

  const alternarReproduccion = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.warn("Error al reproducir:", error);
    }
  };

  const alternarSilencio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setSilenciado(audio.muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="metadata"
        loop
      />

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              overflow-y-auto
              bg-[#17140F]/75
              px-4 py-6
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="
                relative w-full max-w-[410px]
                overflow-hidden
                rounded-[28px]
                border border-[#D5BD91]
                bg-[#F8F3EA]
                px-5 py-8
                text-center
                shadow-[0_25px_80px_rgba(0,0,0,0.3)]
                sm:px-9 sm:py-11
              "
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* MARCO DECORATIVO */}
              <div
                className="
                  pointer-events-none
                  absolute inset-[9px]
                  rounded-[21px]
                  border border-[#C7A46A]/45
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-[14px]
                  rounded-[17px]
                  border border-[#C7A46A]/20
                "
              />

              {/* DESTELLOS */}
              <motion.div
                className="
                  pointer-events-none
                  absolute left-7 top-8
                  text-[#C7A46A]
                "
                animate={{
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 20, 0],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={25} strokeWidth={1.2} />
              </motion.div>

              <motion.div
                className="
                  pointer-events-none
                  absolute bottom-8 right-7
                  text-[#C7A46A]
                "
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  rotate: [0, -20, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={24} strokeWidth={1.2} />
              </motion.div>

              {/* CORONA */}
              <motion.div
                className="
                  relative mx-auto mb-5
                  flex h-[82px] w-[82px]
                  items-center justify-center
                  rounded-full
                  border border-[#C7A46A]/40
                  bg-white/65
                  text-[#AD8647]
                  shadow-[0_10px_30px_rgba(167,130,67,0.12)]
                "
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Crown size={39} strokeWidth={1.25} />
              </motion.div>

              {/* ENCABEZADO */}
              <p
                className="
                  relative mb-3
                  text-[11px] uppercase
                  tracking-[0.32em]
                  text-[#7B6648]
                "
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Mis XV años
              </p>

              <h2
                className="
                  relative text-[76px]
                  leading-[1.2]
                  text-[#AD8647]
                  sm:text-[90px]
                "
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Emily
              </h2>

              {/* SEPARADOR */}
              <div
                className="
                  relative mx-auto my-5
                  flex items-center justify-center
                  gap-3
                "
              >
                <span className="h-px w-14 bg-[#C7A46A]/60" />

                <Music2
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#AD8647]"
                />

                <span className="h-px w-14 bg-[#C7A46A]/60" />
              </div>


              {/* DESCRIPCIÓN */}
              <p
                className="
                  relative mx-auto max-w-[300px]
                  text-[17px] leading-[1.8]
                  text-[#29251F]
                  sm:text-[19px]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Cada momento especial tiene una melodía
                que lo hace inolvidable.
                <br />
                <span className="italic">
                  Acompáñame a celebrar mis XV años.
                </span>
              </p>

              {/* BOTONES */}
              <div className="relative mt-8 flex flex-col gap-3">
                <motion.button
                  type="button"
                  onClick={iniciarConMusica}
                  className="
                    flex w-full items-center
                    justify-center gap-3
                    rounded-full
                    bg-[#AD8647]
                    px-5 py-4
                    text-[12px] font-medium
                    uppercase tracking-[0.13em]
                    text-white
                    shadow-[0_10px_25px_rgba(173,134,71,0.25)]
                    transition-colors
                    hover:bg-[#94703A]
                  "
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play size={17} fill="currentColor" />
                  Entrar con música
                </motion.button>

                <motion.button
                  type="button"
                  onClick={continuarSinMusica}
                  className="
                    flex w-full items-center
                    justify-center gap-3
                    rounded-full
                    border border-[#C7A46A]/55
                    bg-white/65
                    px-5 py-3.5
                    text-[12px] font-medium
                    uppercase tracking-[0.12em]
                    text-[#745A36]
                    transition-colors
                    hover:bg-white
                  "
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <VolumeX size={17} />
                  Continuar sin música
                </motion.button>
              </div>

              {/* DETALLE INFERIOR */}
              <div
                className="
                  relative mt-7 flex
                  items-center justify-center gap-3
                  text-[#B18B4F]
                "
              >
                <span className="h-px w-9 bg-[#C7A46A]/50" />
                <span className="text-sm">♥</span>
                <span className="h-px w-9 bg-[#C7A46A]/50" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTROLES FLOTANTES */}
      <AnimatePresence>
        {!mostrarModal && (
          <motion.div
            className="
              fixed bottom-5 right-4 z-[9998]
              flex items-center gap-2
              sm:bottom-7 sm:right-7
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.85,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* SILENCIAR */}
            <motion.button
              type="button"
              onClick={alternarSilencio}
              aria-label={
                silenciado
                  ? "Activar sonido"
                  : "Silenciar música"
              }
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                border border-[#C7A46A]/45
                bg-[#F8F3EA]/95
                text-[#AD8647]
                shadow-[0_7px_22px_rgba(0,0,0,0.16)]
                backdrop-blur-md
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {silenciado ? (
                <VolumeX size={19} />
              ) : (
                <Volume2 size={19} />
              )}
            </motion.button>

            {/* REPRODUCIR / PAUSAR */}
            <motion.button
              type="button"
              onClick={alternarReproduccion}
              aria-label={
                reproduciendo
                  ? "Pausar música"
                  : "Reproducir música"
              }
              className="
                relative flex h-14 w-14
                items-center justify-center
                rounded-full
                border border-[#E8D9BF]
                bg-[#AD8647]
                text-white
                shadow-[0_10px_28px_rgba(173,134,71,0.35)]
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {reproduciendo && (
                <motion.span
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-full
                    border border-[#C7A46A]
                  "
                  animate={{
                    scale: [1, 1.55],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              <span className="relative z-10">
                {reproduciendo ? (
                  <Pause size={21} fill="currentColor" />
                ) : (
                  <Play
                    size={21}
                    fill="currentColor"
                    className="translate-x-[1px]"
                  />
                )}
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
