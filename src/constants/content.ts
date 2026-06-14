// ============================================
// inmoApp — Site Constants & Copy
// All copy aligned with product-marketing.md
// ============================================

export const SITE_META = {
  title:
    "inmoApp | Gestión de Alquileres para Corredores Inmobiliarios en Argentina",
  description:
    "El sistema todo-en-uno para corredores inmobiliarios que arrancan en Argentina. Automatizá aumentos, generá liquidaciones y manejá tu cartera desde un solo lugar.",
  keywords:
    "software inmobiliario Argentina, gestión alquileres corredor, automatizar aumentos ICL IPC, liquidaciones inmobiliarias, CRM inmobiliario Argentina, inmoApp",
  ogTitle: "inmoApp — Arrancá tu corredor con las herramientas correctas",
  ogDescription:
    "Contratos, pagos, aumentos automáticos y liquidaciones. Todo lo que necesita un corredor inmobiliario en Argentina desde el día uno.",
  canonical: "https://inmoapp.ar",
  ogImage: "https://inmoapp.ar/og-image.jpg",
  twitterHandle: "@inmoapp",
  locale: "es_AR",
  schema: {
    type: "SoftwareApplication",
    name: "inmoApp",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
    },
  },
} as const;

export const NAV_LINKS = [
  { label: "Funciones", href: "#funciones" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Precios", href: "#precios" },
] as const;

export const HERO = {
  eyebrow: "Software de gestión para corredores",
  headline: "Arrancá profesional.\nDesde el primer contrato.",
  subhead:
    "inmoApp es el sistema todo-en-uno que automatiza los aumentos, genera tus liquidaciones y te avisa de cada vencimiento. Sin Excel. Sin errores. Sin perder tiempo.",
  cta: "Empezar gratis",
  ctaSecondary: "Ver demo",
  imageAlt:
    "Edificio residencial en Argentina — inmoApp sistema de gestión inmobiliaria",
} as const;

export const SOCIAL_PROOF = [
  { value: "+200", label: "Corredores activos" },
  { value: "3.000+", label: "Contratos gestionados" },
  { value: "100%", label: "Aumentos sin errores" },
] as const;

export const PROBLEM = {
  eyebrow: "El problema",
  headline: "¿Todavía calculás los aumentos a mano?",
  subhead:
    "La mayoría de los corredores que empiezan usan Excel, cuadernos o nada — y eso les cuesta tiempo, plata y la confianza de sus clientes.",
  cards: [
    {
      icon: "history_toggle_off",
      title: "Vencimientos que se pasan",
      body: '"Se me pasó el contrato y el propietario se enojó." No volvés a perder un vencimiento ni un aumento.',
    },
    {
      icon: "calculate",
      title: "Horas calculando aumentos",
      body: "Calcular ICL e IPC a mano consume horas cada mes. inmoApp lo hace automático cada vez que corresponde.",
    },
    {
      icon: "receipt_long",
      title: "Liquidaciones con errores",
      body: "Un error en una liquidación le cuesta dinero al propietario — y te cuesta la relación. Nosotros las generamos sin intervención.",
    },
  ],
} as const;

export const FEATURES = {
  eyebrow: "Lo que hace inmoApp",
  headline: "Todo lo que necesitás para gestionar tu cartera",
  subhead:
    "Diseñado para el corredor que empieza, no para inmobiliarias grandes. Si sabés usar WhatsApp, podés usar inmoApp.",
  items: [
    {
      icon: "autorenew",
      title: "Aumentos automáticos",
      body: "Calcula y aplica los aumentos según ICL, IPC o el índice que corresponda. Se generan solos al vencer cada período.",
    },
    {
      icon: "payments",
      title: "Pagos mensuales automáticos",
      body: "El sistema genera los pagos de todos los contratos vigentes cada mes. Sin que tengas que hacer nada.",
    },
    {
      icon: "receipt_long",
      title: "Liquidaciones sin errores",
      body: "Generá la rendición al propietario con un clic. Cálculos exactos, formato profesional, listo para enviar.",
    },
    {
      icon: "notifications_active",
      title: "Avisos de vencimientos",
      body: "Recibís alertas antes de cada vencimiento y aumento próximo. Nunca más te agarrará desprevenido.",
    },
    {
      icon: "map",
      title: "Mapa de inmuebles",
      body: "Visualizá toda tu cartera en un mapa interactivo con estado, tipo de operación y precio de cada propiedad.",
    },
    {
      icon: "account_balance_wallet",
      title: "Caja integrada",
      body: "Llevá el control de tu flujo de caja sin salir de la herramienta. Sabé cuánta plata tenés en todo momento.",
    },
    {
      icon: "home_work",
      title: "Catálogo de propiedades en venta",
      body: "Registrá las propiedades de tu cartera de venta. Sin gestionar la operación, solo el inventario organizado.",
    },
    {
      icon: "description",
      title: "Contratos y clientes",
      body: "Llevá el registro completo de propietarios, inquilinos, inmuebles y contratos — todo vinculado entre sí.",
    },
  ],
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "Cómo funciona",
  headline: "Operativo en menos de un día",
  steps: [
    {
      number: "01",
      title: "Cargás tus datos",
      body: "Registrás tus inmuebles, propietarios, inquilinos y contratos vigentes. Si tenés Excel, te ayudamos a migrar.",
    },
    {
      number: "02",
      title: "inmoApp toma el control",
      body: "El sistema genera los pagos, calcula los aumentos y avisa sobre vencimientos sin que hagas nada.",
    },
    {
      number: "03",
      title: "Vos te enfocás en crecer",
      body: "Con la gestión resuelta, podés dedicar tu tiempo a conseguir más propiedades y cerrar más contratos.",
    },
  ],
} as const;

export const TESTIMONIAL = {
  quote:
    '"Es como tener un administrativo que trabaja solo. Desde que uso inmoApp no volví a perder un aumento ni a hacer una liquidación a mano."',
  author: "Sofía Torres",
  role: "Corredora independiente, Mendoza",
} as const;

export const PRICING = {
  eyebrow: "Precios",
  headline: "Un precio justo para empezar",
  subhead:
    "Un solo error en un aumento mal calculado o un contrato vencido te cuesta más que la suscripción anual.",
  plans: [
    {
      name: "Mensual",
      price: "Consultá precio",
      period: "por mes",
      highlight: false,
      features: [
        "Contratos ilimitados",
        "Aumentos automáticos (ICL/IPC)",
        "Pagos mensuales automáticos",
        "Liquidaciones con un clic",
        "Avisos de vencimientos",
        "Mapa de inmuebles",
        "Caja integrada",
        "Soporte por WhatsApp",
      ],
      cta: "Empezar gratis",
    },
    {
      name: "Trimestral",
      price: "Consultá precio",
      period: "por trimestre",
      highlight: true,
      badge: "Más elegido",
      features: [
        "Todo lo del plan mensual",
        "Descuento trimestral",
        "Onboarding personalizado",
        "Catálogo de propiedades en venta",
        "Acceso anticipado a nuevas funciones",
      ],
      cta: "Empezar con descuento",
    },
  ],
} as const;

export const OBJECTIONS = [
  {
    q: "¿Vale la pena si todavía tengo pocos contratos?",
    a: "Empezar organizado es más fácil que ordenar el caos después. Con tu primer contrato ya tiene sentido. Los corredores que arrancan bien escalan más rápido.",
  },
  {
    q: "¿Es un gasto más cuando recién arranco?",
    a: "Un solo error en un aumento mal calculado o un contrato vencido sin renovar te cuesta más que la suscripción anual. inmoApp se paga solo.",
  },
  {
    q: "¿Es difícil de usar?",
    a: "Fue diseñado para el corredor que empieza, no para técnicos. Si sabés usar WhatsApp, podés usar inmoApp. Además, el onboarding es acompañado.",
  },
  {
    q: "¿Qué pasa con mis datos actuales en Excel?",
    a: "Te ayudamos a migrar tu información. No empezás de cero — llevás todo lo que ya tenés y desde ahí inmoApp toma el control.",
  },
  {
    q: "¿Calcula aumentos por ICL e IPC?",
    a: "Sí. El sistema aplica automáticamente el índice que corresponda según el contrato: ICL, IPC u otros que se definan por normativa.",
  },
  {
    q: "¿Puedo cancelar cuando quiero?",
    a: "Sí, podés cancelar en cualquier momento sin cargos ni compromisos. No te atamos a contratos largos.",
  },
] as const;

export const FINAL_CTA = {
  headline: "Tu cartera, en orden. Desde el día uno.",
  subhead:
    "Unite a los corredores que ya gestionan sus contratos con inmoApp. Empezá gratis y comenzá a operar como profesional.",
  cta: "Empezar gratis",
  ctaSecondary: "Hablar con el equipo",
} as const;

export const FOOTER_LINKS = {
  producto: [
    { label: "Funciones", href: "#funciones" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Precios", href: "#precios" },
  ],
  empresa: [
    { label: "Contacto", href: "mailto:hola@inmoapp.ar" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
} as const;
