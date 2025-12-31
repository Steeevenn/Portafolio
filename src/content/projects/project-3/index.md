---
title: "VialApp – Sistema de Gestión Logística de Recolecciones"
summary: "Aplicación web para gestionar recolecciones de forma integral: asignación a domiciliarios, control de estados, trazabilidad, evidencias y reportes. Diseñada para optimizar la operación logística y el seguimiento end-to-end."
date: "Dec 31 2025"
draft: false
tags:
  - Java
  - Spring Boot
  - JPA / Hibernate
  - PostgreSQL
  - Docker
  - MapStruct
  - Lombok
  - JUnit
  - Mockito
  - REST API
repoUrl: https://github.com/Steeevenn/VialApp.git
---

🚚 **VialApp – Gestión de Recolecciones con Trazabilidad y Control Operativo**

**VialApp** es una aplicación enfocada en la operación logística de **recolecciones**: centraliza el registro, asignación, seguimiento y cierre de cada recolección, permitiendo tener **control del tiempo** del flujo operativo y un historial claro para auditoría y servicio al cliente.

La idea base del sistema es simple pero poderosa: **cada recolección vive un ciclo de vida** (estados) y cada cambio queda registrado con contexto (quién lo hizo, cuándo, y por qué). Eso baja los “¿qué pasó con esto?” y sube la capacidad de respuesta.

🔹 **Características clave**

✅ **Gestión completa de recolecciones**  
Creación y administración de recolecciones con datos operativos (cliente, dirección, observaciones, prioridad/ventana, etc.) y estructura lista para crecer con reglas del negocio.

✅ **Asignación de recolecciones a domiciliarios**  
Flujo para asignar responsables, validar usuarios y asegurar que la recolección quede en manos del actor correcto (operación → domiciliario), evitando asignaciones inconsistentes.

✅ **Control de estados + reglas de transición**  
Modelo de estados (por ejemplo: creada → asignada → en ruta → recolectada → finalizada / cancelada) con validaciones para prevenir transiciones no permitidas y mantener coherencia operativa.

✅ **Historial/auditoría de cambios**  
Registro de eventos por recolección (historial de estados) para trazabilidad: permite reconstruir la historia completa de lo que pasó y soportar auditorías o reclamos con evidencia.

✅ **Adjuntos y evidencias**  
Soporte para cargar archivos (por ejemplo fotos/soportes) asociados a la recolección, manteniendo evidencia del proceso y facilitando el cierre con información verificable.

✅ **Arquitectura limpia y mantenible**  
Separación por capas (DTOs, servicios, repositorios), mapeo con **MapStruct**, validaciones y excepciones de dominio para mantener el código escalable y fácil de evolucionar.

🧠 **Objetivo del proyecto**

Crear una plataforma robusta para **reducir fricción operativa**, mejorar tiempos de respuesta, y dar **visibilidad total** sobre el estado de cada recolección. VialApp está pensada para equipos logísticos que necesitan orden, trazabilidad y control, sin depender de chats, hojas de cálculo o “memoria humana”.

📌 **Ideas de evolución ()**

- Panel operativo con métricas (recolecciones por estado, tiempos promedio, SLA)
- Notificaciones (correo/WhatsApp) por cambios críticos
- Geolocalización y tracking del domiciliario (si aplica)
- Integracion con api FEDEX y/o DHL
- Exportaciones (Excel/CSV) y filtros avanzados por fechas/cliente/estado
