
import React from "react";

export default function Portada() {
  return (
    <section
      id="portada"
      className="
        relative
        w-full
        min-h-screen
        bg-[#F8F3EA]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <picture className="block w-full">
        {/* IMAGEN HORIZONTAL - COMPUTADORA */}
        <source
          media="(min-width: 768px)"
          srcSet="/PortadaL.png"
        />

        {/* IMAGEN VERTICAL - CELULAR */}
        <img

          src="/PortadaC.png"
          alt="Emily - Mis XV Años - 19 de diciembre de 2026"
          className="
            block
            w-full
            h-auto
            max-w-full
            object-contain
          "
          loading="eager"
          fetchPriority="high"
          draggable={false}
        />
      </picture>
    </section>
  );
}
