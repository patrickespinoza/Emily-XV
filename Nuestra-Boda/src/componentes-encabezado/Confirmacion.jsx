
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  X,
  Users,
  Baby,
  UserRound,
  MessageSquareText,
  Send,
  LoaderCircle,
} from "lucide-react";

// Coloca aquí la URL /exec de tu Apps Script.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHdbXgU981k2d-oM6EuMv7SnotNX5rIIYienLWEa611iKcqsfZGCg-w6nFPzfvXx1r7Q/exec";

const colores = {
  fondo: "#FFFDF9",
  beige: "#F8F3EA",
  dorado: "#A47B3C",
  borde: "#C7A46A",
  texto: "#29251F",
};

const esEnteroValido = (valor) =>
  /^\d+$/.test(String(valor).trim()) &&
  Number.isSafeInteger(Number(valor));

export default function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [adultos, setAdultos] = useState("");
  const [ninos, setNinos] = useState("0");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const seleccionarAsistencia = (valor) => {
    setAsistencia(valor);
    setError("");
    setEnviado(false);

    if (valor === "No asistiré") {
      setAdultos("");
      setNinos("0");
    }
  };

  const enviarConfirmacion = async (e) => {
    e.preventDefault();
    if (enviando || enviado) return;

    if (!nombre.trim()) {
      setError("Por favor, escribe tu nombre.");
      return;
    }

    if (!asistencia) {
      setError("Selecciona si asistirás al evento.");
      return;
    }

    let cantidadAdultos = 0;
    let cantidadNinos = 0;

    if (asistencia === "Sí asistiré") {
      if (
        !esEnteroValido(adultos) ||
        !esEnteroValido(ninos)
      ) {
        setError(
          "Escribe cantidades válidas de adultos y niños. Si no asistirán niños, coloca 0."
        );
        return;
      }

      cantidadAdultos = Number(adultos);
      cantidadNinos = Number(ninos);

      if (cantidadAdultos + cantidadNinos < 1) {
        setError(
          "Debe asistir al menos una persona."
        );
        return;
      }
    }

    if (
      !SCRIPT_URL.startsWith("https://script.google.com/")
    ) {
      setError("Configura primero la URL de Apps Script.");
      return;
    }

    setError("");
    setEnviando(true);

    const datos = {
      tipo: "confirmacion",
      nombre: nombre.trim(),
      asistencia,
      adultos: cantidadAdultos,
      ninos: cantidadNinos,
      invitados: cantidadAdultos + cantidadNinos,
      mensaje: mensaje.trim(),
    };

    try {
      // Apps Script puede requerir no-cors para
      // recibir solicitudes desde Vercel.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(datos),
      });

      // no-cors no permite comprobar si el
      // servidor realmente guardó los datos.
      setEnviado(true);
    } catch (err) {
      console.error(err);
      setError(
        "No se pudo enviar la solicitud. Inténtalo de nuevo."
      );
    } finally {
      setEnviando(false);
    }
  };

  const campoNumero = (titulo, icono, valor, cambiar) => (
    <div className="min-w-0 flex-1">
      <label className="mb-3 flex items-center justify-center gap-2 text-sm text-[#876A43]">
        {icono}
        {titulo}
      </label>

      <input
        type="number"
        inputMode="numeric"
        min="0"
        step="1"
        value={valor}
        onChange={(e) => {
          cambiar(e.target.value);
          setError("");
        }}
        placeholder="0"
        className="w-full rounded-lg border border-[#D9C6A5] bg-white px-4 py-3 text-center text-xl text-[#29251F] outline-none transition focus:border-[#A47B3C] focus:ring-1 focus:ring-[#A47B3C]"
      />
    </div>
  );

  return (
    <section
      id="confirmacion"
      className="w-full bg-[#FFFDF9] px-4 py-20 sm:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-xl"
      >
        <div className="border border-[#C7A46A] bg-[#F8F3EA] p-3 shadow-lg sm:p-4">
          <div className="border border-[#D9C6A5] px-5 py-12 text-center sm:px-10 sm:py-16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A47B3C]">
              ✦ Mis XV Años ✦
            </p>

            <h2
              className="text-5xl text-[#29251F] sm:text-6xl"
              style={{
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Confirmación
            </h2>

            <p
              className="mt-4 text-xl text-[#876A43]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Tu presencia hará este día aún más especial.
            </p>

            <div className="mx-auto my-8 h-px w-20 bg-[#C7A46A]" />

            <AnimatePresence mode="wait">
              {enviado ? (
                <motion.div
                  key="exito"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8"
                >
                  <Check
                    size={46}
                    className="mx-auto mb-5 text-[#A47B3C]"
                  />

                  <h3
                    className="text-3xl text-[#29251F]"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    ¡Gracias por responder!
                  </h3>

                  <p className="mt-4 text-[#876A43]">
                    Hemos enviado tu respuesta para su
                    registro.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="formulario"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={enviarConfirmacion}
                  className="space-y-7"
                >
                  {/* Nombre */}
                  <div className="text-left">
                    <label className="mb-2 flex items-center gap-2 text-sm text-[#876A43]">
                      <UserRound size={17} />
                      Nombre completo
                    </label>

                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) =>
                        setNombre(e.target.value)
                      }
                      maxLength={120}
                      placeholder="Escribe tu nombre"
                      className="w-full rounded-lg border border-[#D9C6A5] bg-white px-4 py-3 text-[#29251F] outline-none focus:border-[#A47B3C]"
                    />
                  </div>

                  {/* Asistencia */}
                  <div>
                    <p className="mb-4 text-sm text-[#876A43]">
                      ¿Nos acompañarás?
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          texto: "Sí asistiré",
                          icono: <Check size={19} />,
                        },
                        {
                          texto: "No asistiré",
                          icono: <X size={19} />,
                        },
                      ].map((opcion) => {
                        const activo =
                          asistencia === opcion.texto;

                        return (
                          <button
                            key={opcion.texto}
                            type="button"
                            onClick={() =>
                              seleccionarAsistencia(
                                opcion.texto
                              )
                            }
                            className={`flex min-h-14 items-center justify-center gap-2 rounded-lg border px-2 py-3 text-sm transition ${
                              activo
                                ? "border-[#A47B3C] bg-[#A47B3C] text-white"
                                : "border-[#D9C6A5] bg-white text-[#29251F]"
                            }`}
                          >
                            {opcion.icono}
                            {opcion.texto}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Adultos y niños */}
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
                        className="overflow-hidden"
                      >
                        <div className="rounded-xl border border-[#D9C6A5] bg-[#FFFDF9] p-5">
                          <p
                            className="mb-5 text-2xl text-[#29251F]"
                            style={{
                              fontFamily:
                                "'Cormorant Garamond', serif",
                            }}
                          >
                            ¿Cuántas personas asistirán?
                          </p>

                          <div className="flex gap-4">
                            {campoNumero(
                              "Adultos",
                              <Users size={17} />,
                              adultos,
                              setAdultos
                            )}

                            {campoNumero(
                              "Niños",
                              <Baby size={17} />,
                              ninos,
                              setNinos
                            )}
                          </div>

                          <p className="mt-4 text-xs leading-relaxed text-[#876A43]">
                            Escribe la cantidad de adultos
                            y niños. Si no asistirán niños,
                            deja el valor en 0.
                          </p>

                          <div className="mt-5 border-t border-[#D9C6A5] pt-4 text-sm text-[#876A43]">
                            Total de asistentes:{" "}
                            <strong className="text-[#A47B3C]">
                              {(esEnteroValido(adultos)
                                ? Number(adultos)
                                : 0) +
                                (esEnteroValido(ninos)
                                  ? Number(ninos)
                                  : 0)}
                            </strong>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mensaje */}
                  <div className="text-left">
                    <label className="mb-2 flex items-center gap-2 text-sm text-[#876A43]">
                      <MessageSquareText size={17} />
                      Mensaje para Emily (opcional)
                    </label>

                    <textarea
                      value={mensaje}
                      onChange={(e) =>
                        setMensaje(e.target.value)
                      }
                      rows={3}
                      maxLength={500}
                      placeholder="Escribe un mensaje especial..."
                      className="w-full resize-none rounded-lg border border-[#D9C6A5] bg-white px-4 py-3 text-[#29251F] outline-none focus:border-[#A47B3C]"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="text-sm text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={enviando}
                    className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#A47B3C] px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#87632F] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {enviando ? (
                      <>
                        <LoaderCircle
                          size={18}
                          className="animate-spin"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar confirmación
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
