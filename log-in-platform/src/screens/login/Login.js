import React from "react";

export const Login = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>img</div>
      <div style={{ padding: "5rem 6rem", width: "50%" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button>Soy fundación</button>
          <button>Quiero Adoptar</button>
        </div>
        <div className="login">
          <form onSubmit="">
            <h2>¡Comencemos!</h2>
            <div style={{ marginBottom: "1.4rem" }}>
              <input placeholder="Nombre de Usuario" />
            </div>
            <div style={{ marginBottom: "1.4rem" }}>
              <input placeholder="Contraseña" />
            </div>
            <div>
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
