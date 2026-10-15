
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Crown,
  Heart,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

// PEGA AQUÍ LA URL DE TU NUEVA IMPLEMENTACIÓN
// DE GOOGLE APPS SCRIPT
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHdbXgU981k2d-oM6EuMv7SnotNX5rIIYienLWEa611iKcqsfZGCg-w6nFPzfvXx1r7Q/exec";

export default function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const bloqueoEnvio = useRef(false);

  const cambiarAsistencia = (valor) => {
    setAsistencia(valor);
    setError("");
    setEnviado(false);

    if (valor === "No podré asistir") {
      setInvitados("");
    }
  };

  const enviarConfirmacion = async (event) => {
    event.preventDefault();

    if (bloqueoEnvio.current) return;

    if (!nombre.trim() || !asistencia) {
      setError(
        "Escribe tu nombre y selecciona si podrás asistir."
      );
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (
        !invitados ||
        !Number.isInteger(Number(invitados)) ||
        Number(invitados) < 1
      )
    ) {
      setError("Indica un número válido de invitados.");
      return;
    }

    if (!SCRIPT_URL.startsWith("https://script.google.com/")) {
      setError(
        "Falta configurar la conexión con Google Sheets."
      );
      return;
    }

    const datos = {
      nombre: nombre.trim(),
      asistencia,
      invitados:
        asistencia === "Sí asistiré"
          ? Number(invitados)
          : 0,
      mensaje: mensaje.trim(),
    };

    bloqueoEnvio.current = true;
    setEnviando(true);
    setError("");
    setEnviado(false);

    try {
      const respuesta = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error("No fue posible conectar.");
      }

      const resultado = await respuesta.json();

      if (!resultado.ok) {
        throw new Error(
          resultado.error || "No se pudo guardar."
        );
      }

      setEnviado(true);
      setNombre("");
      setAsistencia("");
      setInvitados("");
      setMensaje("");
    } catch (err) {
      console.error("Error al confirmar:", err);

      setError(
        "No se pudo guardar tu confirmación. " +
        "Verifica tu conexión e intenta nuevamente."
      );
    } finally {
      bloqueoEnvio.current = false;
      setEnviando(false);
    }
  };

  const inputClass = `
    w-full border border-[#C7A46A]/60
    bg-white px-4 py-4
    text-[#29251F]
    outline-none transition
    placeholder:text-[#82776A]
    focus:border-[#A47B3C]
    focus:ring-2 focus:ring-[#C7A46A]/20
    disabled:opacity-60
  `;

  return (
    <section
      id="confirmacion"
      className="
        relative isolate w-full overflow-hidden
        bg-[#EDE0CC]
        px-4 py-20 sm:px-8 sm:py-28
      "
    >
      {/* MARCOS */}
      <div className="
        pointer-events-none absolute inset-3
        border border-[#B99558]/35 sm:inset-6
      " />

      <div className="
        pointer-events-none absolute inset-[18px]
        border border-[#B99558]/20 sm:inset-[30px]
      " />

      {/* DESTELLOS */}
      <motion.div
        className="
          pointer-events-none absolute left-[7%]
          top-16 text-[#A47B3C]
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
        <Sparkles size={28} strokeWidth={1.2} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 mx-auto max-w-4xl
          border border-[#C7A46A]
          bg-[#F8F3EA]
          px-5 py-12
          shadow-[0_20px_60px_rgba(100,75,35,0.12)]
          sm:px-12 sm:py-16
        "
      >
        <div className="
          pointer-events-none absolute inset-[7px]
          border border-[#C7A46A]/25
        " />

        <div className="relative z-10">
          {/* CORONA */}
          <motion.div
            className="
              mx-auto flex h-20 w-20
              items-center justify-center
              rounded-full border border-[#C7A46A]
              bg-white text-[#A47B3C]
            "
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <Crown size={36} strokeWidth={1.2} />
          </motion.div>

          {/* ENCABEZADO */}
          <div className="mt-7 text-center">
            <p
              className="
                text-xs uppercase tracking-[0.3em]
                text-[#86683D]
              "
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              RSVP
            </p>

            <h2
              className="
                mt-4 text-[clamp(3rem,8vw,5.3rem)]
                leading-tight text-[#A47B3C]
              "
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Confirma tu asistencia
            </h2>

            <div className="
              my-7 flex items-center justify-center gap-3
            ">
              <span className="h-px w-14 bg-[#C7A46A]" />
              <Heart
                size={17}
                fill="#B99558"
                className="text-[#B99558]"
              />
              <span className="h-px w-14 bg-[#C7A46A]" />
            </div>

            <p
              className="
                mx-auto max-w-xl text-[21px]
                leading-relaxed text-[#29251F]
                sm:text-[25px]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
              }}
            >
              Tu presencia hará de mis XV años
              un recuerdo todavía más especial.
              Por favor, confirma si podrás acompañarme.
            </p>
          </div>

          {/* FORMULARIO */}
          <form
            onSubmit={enviarConfirmacion}
            className="mx-auto mt-10 max-w-xl space-y-7"
          >
            {/* NOMBRE */}
            <div>
              <label
                htmlFor="nombre"
                className="
                  mb-2 block text-sm font-semibold
                  text-[#72552C]
                "
              >
                Nombre completo
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="
                    pointer-events-none absolute
                    left-4 top-1/2
                    -translate-y-1/2 text-[#A47B3C]
                  "
                />

                <input
                  id="nombre"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Nombre y apellido"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    setError("");
                  }}
                  disabled={enviando || enviado}
                  className={`${inputClass} pl-12`}
                />
              </div>
            </div>

            {/* ASISTENCIA */}
            <fieldset>
              <legend
                className="
                  mb-3 text-sm font-semibold
                  text-[#72552C]
                "
              >
                ¿Podrás acompañarme?
              </legend>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    valor: "Sí asistiré",
                    Icono: Check,
                  },
                  {
                    valor: "No podré asistir",
                    Icono: X,
                  },
                ].map(({ valor, Icono }) => (
                  <button
                    key={valor}
                    type="button"
                    disabled={enviando || enviado}
                    onClick={() => cambiarAsistencia(valor)}
                    aria-pressed={asistencia === valor}
                    className={`
                      flex min-h-[65px]
                      items-center justify-center gap-2
                      border px-4 py-3
                      font-medium transition
                      disabled:opacity-60
                      ${
                        asistencia === valor
                          ? "border-[#A47B3C] bg-[#A47B3C] text-white"
                          : "border-[#C7A46A] bg-white text-[#72552C] hover:bg-[#F3E9D8]"
                      }
                    `}
                  >
                    <Icono size={20} />
                    {valor}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* INVITADOS */}
            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <label
                    htmlFor="invitados"
                    className="
                      mb-2 block text-sm font-semibold
                      text-[#72552C]
                    "
                  >
                    Número de invitados
                  </label>

                  <div className="relative">
                    <UsersRound
                      size={19}
                      className="
                        pointer-events-none absolute
                        left-4 top-1/2
                        -translate-y-1/2 text-[#A47B3C]
                      "
                    />

                    <input
                      id="invitados"
                      type="number"
                      min="1"
                      step="1"
                      required
                      inputMode="numeric"
                      placeholder="Ejemplo: 2"
                      value={invitados}
                      onChange={(e) => {
                        setInvitados(e.target.value);
                        setError("");
                      }}
                      disabled={enviando || enviado}
                      className={`${inputClass} pl-12`}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}
            <div>
              <label
                htmlFor="mensaje"
                className="
                  mb-2 block text-sm font-semibold
                  text-[#72552C]
                "
              >
                Mensaje para Emily (opcional)
              </label>

              <div className="relative">
                <MessageCircle
                  size={19}
                  className="
                    pointer-events-none absolute
                    left-4 top-5 text-[#A47B3C]
                  "
                />

                <textarea
                  id="mensaje"
                  rows={4}
                  maxLength={1000}
                  placeholder="Escribe un mensaje especial..."
                  value={mensaje}
                  onChange={(e) =>
                    setMensaje(e.target.value)
                  }
                  disabled={enviando || enviado}
                  className={`
                    ${inputClass} resize-none pl-12
                  `}
                />
              </div>
            </div>

            {/* ERROR */}
            <AnimatePresence>
              {error && (
                <motion.div
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="
                    border border-red-300
                    bg-red-50 px-4 py-3
                    text-sm text-red-800
                  "
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ÉXITO */}
            <AnimatePresence>
              {enviado && (
                <motion.div
                  role="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    border border-[#C7A46A]
                    bg-white px-5 py-5
                    text-center text-[#72552C]
                  "
                >
                  <Check
                    size={30}
                    className="mx-auto mb-3"
                  />
                  <p className="font-semibold">
                    ¡Confirmación registrada!
                  </p>
                  <p className="mt-2 text-sm">
                    Gracias por responder.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ENVIAR */}
            <motion.button
              type="submit"
              disabled={enviando || enviado}
              whileHover={
                enviando || enviado ? {} : { scale: 1.02 }
              }
              whileTap={
                enviando || enviado ? {} : { scale: 0.98 }
              }
              className="
                flex w-full items-center
                justify-center gap-3
                bg-[#A47B3C]
                px-6 py-4
                font-semibold uppercase
                tracking-[0.1em] text-white
                shadow-[0_12px_30px_rgba(100,75,35,0.2)]
                transition hover:bg-[#87612D]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {enviando ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Enviando...
                </>
              ) : enviado ? (
                <>
                  <Check size={20} />
                  Confirmación registrada
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar confirmación
                </>
              )}
            </motion.button>
          </form>

          <p
            className="
              mt-9 text-center text-[37px]
              text-[#A47B3C]
              sm:text-[47px]
            "
            style={{
              fontFamily: "'Allura', cursive",
            }}
          >
            ¡Será una noche inolvidable!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
