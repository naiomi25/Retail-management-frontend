# 🗺️ Roadmap del Proyecto — Dashboard de Entradas

## 🎯 Objetivo General
Construir una aplicación web completa para la gestión y visualización de entradas diarias, con autenticación, dashboard interactivo, gráficos de análisis y funcionalidades de creación, edición ,eliminación de datos y no mmorir en el intento

---

## 🧩 Estructura Global

### 🧭 Navegación principal
- **Sidebar fijo y plegable** con las siguientes secciones:
  - 🏠 **Dashboard** → muestra las entradas filtradas por rango de fechas + estadísticas.
  - ✍️ **Nueva Entrada** → formulario para registrar una nueva entrada.
  - 🧰 **Editar/Eliminar Entradas** → vista con tabla o cards para modificar o eliminar entradas existentes.
  - (🔮 Más adelante) **Ajustes o Perfil** → avatar, configuración y logout.

---

## 🚀 Fases del Desarrollo

### **Fase 1: Creación de entradas**
- [x] Componente `EntryForm` con formulario controlado.
- [x] Página `CreateEntry` que gestiona el envío a la API (`/entries/create`).
- [x] Manejo de mensajes de confirmación o error tras crear una entrada.
- [x] Limpieza automática del formulario tras envío exitoso.

---

### **Fase 2: Visualización de datos**
- [ ] Crear componente `EntriesList`  para mostrar resultados.
- [ ] Implementar búsqueda por rango de fechas (desde-hasta).
- [ ] Integrar llamada a la API (`/entries?start=...&end=...`) para obtener datos filtrados.
- [ ] Mostrar resultados 

---

### **Fase 3: Edición y eliminación**
- [ ] Añadir botón “Editar” y “Eliminar” en cada entrada listada.
- [ ] Conectar ambos con la API (`PUT` y `DELETE`).
- [ ] Reutilizar `EntryForm` para la edición (con `initialData`).
- [ ] Confirmación visual (toast o mensaje) tras cada acción.

---

### **Fase 4: Dashboard con análisis**
- [ ] Mostrar gráficos:
  - Ventas totales por día o turno.
  - Comparativa semanal/mensual.
  - Distribución por tipo de producto.
- [ ] Implementar filtros dinámicos y actualizaciones en tiempo real.

---

### **Fase 5: Interfaz y experiencia de usuario**
- [ ] Sidebar fijo y colapsable.
- [ ] Diseño responsivo (desktop / móvil).
- [ ] Indicadores visuales de carga (spinners, skeletons).
- [ ] Notificaciones o toasts para feedback al usuario.
- [ ] Añadir iconos e identidad visual (lucide-react o similar).

---

### **Fase 6: 
- [ ] Paginación o scroll infinito para muchas entradas.
- [ ] Modo oscuro / claro.
- [ ] Test unitarios y de integración.

---

### **Fase 7: Opcional / Avanzado**
- [ ] Exportar datos (CSV / PDF).
- [ ] Control de acceso según rol (admin / usuario).


---


## 🧠 Consideraciones Técnicas
- Frontend con **React + Vite**.
- API con autenticación mediante token (JWT).
- Comunicación con backend mediante `apiUser` (wrapper de `fetch`).
- Uso de `useState`, `useEffect`,  cuando sea apropiado.
- Diseño con **mui**.

---

## 🪄 Próximos pasos inmediatos
1. Implementar el **componente de búsqueda por rango de fechas**.  
2. Mostrar los resultados en el dashboard principal.  
3. Añadir botones de edición y eliminación.  
4. Empezar el diseño del **sidebar fijo y colapsable**.

---

## 📅 Versión
**v0.1 — Octubre 2025**

---
✨ _Desarrollado con mimo, lógica,desesperación y una pizca de café por Naiomi._
