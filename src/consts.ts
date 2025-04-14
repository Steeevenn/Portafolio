import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "PORTAFOLIO",
  DESCRIPTION: "Bienvenido a mi sitio web personal, donde comparto mis trabajos realizados y recursos utiles para la comunidad de desarrolladores.",
  AUTHOR: "Michael Motivar",
}

// Work Page
export const WORK: Page = {
  TITLE: "Trabajo",
  DESCRIPTION: "Places I have worked.",
}


// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Busqueda",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Inicio", 
    HREF: "/", 
  },
  { 
    TEXT: "Trabajo",
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Proyectos", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "michaelbeltran80@gmail.com",
    HREF: "mailto:michaelbeltran80@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Steeevenn",
    HREF: "https://github.com/Steeevenn/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Michael Motivar",
    HREF: "https://linkedin.com/in/michael-motivar-517811149",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Michael Motivar",
    HREF: "https://x.com/MichaelMotivar",
  },
]

