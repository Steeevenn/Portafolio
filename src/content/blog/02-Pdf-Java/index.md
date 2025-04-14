---
title: "Generación de PDFs en Java: Apache PDFBox vs iText vs JasperReports"
summary: "Comparativa técnica y ejemplo práctico con facturas dinámicas desde una base de datos"
date: "Jan 12 2025"
draft: false
tags:
  - Generacion pdf java
  - Caracteristicas Apache PDFBOX
---

---

## 📌 Introducción

En el desarrollo backend, la generación de documentos PDF es un requisito común para aplicaciones empresariales (facturas, reportes, contratos, etc.). Java ofrece varias librerías robustas para esta tarea, pero ¿cuál elegir?

En este post, compararemos Apache PDFBox, iText y JasperReports, analizando:

- ✅ Rendimiento
- ✅ Facilidad de uso
- ✅ Soporte para plantillas complejas
- ✅ Integración con bases de datos

Al final, implementaremos un ejemplo práctico: una factura dinámica generada desde MySQL.

---

## 🔍 Comparativa Técnica

---

| Librería      | Ventajas                                                                                                                | Desventajas                                                                                | Mejor Caso de Uso                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Apache PDFBox | ✔ Open Source (Apache License) <br> ✔ Manipulación avanzada (extraer/editar PDFs)                                       | ✖ Bajo nivel (más código para diseños complejos) <br> ✖ Sin soporte nativo para plantillas | Procesamiento de PDFs existentes (OCR, merge)          |
| iText         | ✔ Alta precisión en generación <br> ✔ Soporte para PDF/A (archivado) <br> ✔ Buen rendimiento                            | ✖ Licencia de pago para uso comercial <br> ✖ Curva de aprendizaje media                    | Facturas legales o documentos con requisitos estrictos |
| JasperReports | ✔ Diseño visual con JasperSoft Studio <br> ✔ Ideal para reportes con datos dinámicos <br> ✔ Integración directa con DBs | ✖ Overhead en proyectos simples <br> ✖ Requiere aprender su DSL                            | Reportes empresariales (tablas, gráficos, subreportes) |

## 💡 Recomendación:

---

- Usa PDFBox si necesitas manipular PDFs existentes.

- Elige iText para documentos con compliance estricto (ej: bancos).

- JasperReports es ideal para reportes con datos masivos y diseños predefinidos.

---

## 🛠 Ejemplo Práctico: Factura desde MySQL con iText

Vamos a generar una factura en PDF utilizando a librería mencionada ya que se obtienen excelentes resultados en cuanto a rendimiento y confiabilidad de proceso.

- Datos del cliente (Base de datos).

- Items de compra (tabla order_details).

- Total calculado automáticamente.

### Configuración (Dependencias Maven)

```js
<!-- iText Core -->
<dependency>
    <groupId>com.itextpdf</groupId>
    <artifactId>itextpdf</artifactId>
    <version>5.5.13.3</version>
</dependency>
<!-- Conexión a base de datos MySQL -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.28</version>
</dependency>
```

### Código Java (Generación del PDF)

```js


public class InvoiceGenerator {
    public static void main(String[] args) throws Exception {
        // 1. Obtener datos de la Base de Datos
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:8080/tu_base_datos", "usuario", "contraseña");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM invoices WHERE id = 100");

        // 2. Crear documento PDF
        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream("invoice_100.pdf"));
        document.open();

        // 3. Diseñar factura (ejemplo simplificado) aqui se podria agregar todo el contenido de la factura en este caso o lo que necesitamos para el caso especifico
        document.add(new Paragraph("FACTURA #" + rs.getString("invoice_id")));
        document.add(new Paragraph("Cliente: " + rs.getString("client_name")));

        // Tabla de items
        PdfPTable table = new PdfPTable(3);
        table.addCell("Producto");
        table.addCell("Cantidad");
        table.addCell("Precio");

        ResultSet items = conn.createStatement().executeQuery(
            "SELECT * FROM order_details WHERE invoice_id = 100"
        );
        while (items.next()) {
            table.addCell(items.getString("product_name"));
            table.addCell(items.getString("quantity"));
            table.addCell("$" + items.getDouble("price"));
        }
        document.add(table);

        // 4. Cerrar recursos
        document.close();
        conn.close();
    }
}
```

### Resultado

Factura generada con iText (Imagen ilustrativa)

![Texto alternativo](/ResultadoCodePdfItext.png)

## 🚀 Conclusión

- PDFBox es ligero pero manual.

- iText es preciso y profesional (ideal para facturas).

- JasperReports simplifica reportes complejos con arrastrar/soltar.

¿Qué librería prefieres? ¡Compártelo en los comentarios!

## Soluciones

📢 ¿Necesitas una solución personalizada? ¡Contáctame!

### 🌟 Bonus:

Si te interesa un tutorial detallado de JasperReports con Spring Boot, enviame un mensaje por cualquier red social. ¡También puedo mostrar cómo agregar logos, firmas digitales o gráficos! etc...
