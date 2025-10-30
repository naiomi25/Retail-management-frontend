import React, { useState } from 'react';
import fondoPortada from '../assets/img_home.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer ,Legend} from 'recharts';
import { Login } from './Login';
import { Register } from './Register';
const data = [
  { name: 'Enero', Ventas: 12, Gastos: 8  },
  { name: 'Febrero', Ventas: 19, Gastos: 15  },
  { name: 'Marzo', Ventas: 7, Gastos: 5 },
];

export const Home = () => {

  const [showLogin,setShowLogin] = useState(true)

  return (
    <div className="home-container">
      {/* Lado izquierdo: imagen de fondo */}
      <div
        className="home-left"
        style={{ backgroundImage: `url(${fondoPortada})` }}
      >
        {/* Monitor con gráfico */}
        <div className="pantalla">
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 20, bottom: 40, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="Ventas" fill="rgba(187, 244, 202, 0.8)" animationDuration={2000} />
               <Bar dataKey="Gastos" fill="rgba(247, 153, 58, 0.8)" animationDuration={2000} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Lado derecho: login */}
      <div className="home-right">
        <div className="frase-monitor">
            Los datos son poder...<br />si sabes cómo organizarlos.
          </div>
          <div  className="form-container">
           {showLogin? ( <Login onSwitch={() => setShowLogin(false)} />
    ) : (
      <Register onSwitch={() => setShowLogin(true)} />
    )}
          </div>
        
      </div>
    </div>
  );
};


