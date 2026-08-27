// Datos de ejemplo de la intranet UNO (agosto 2026).
// Estos arrays alimentan cada página estática vía app.js.

const HOME_TILES = [
  {icon:'📣',title:'COMUNICADOS',desc:'Novedades de Dirección, RRHH, Locales y Fábricas.',href:'comunicados.html'},
  {icon:'🪪',title:'DIRECTORIO',desc:'Encontrá a tus compañeros por área o local.',href:'directorio.html'},
  {icon:'👤',title:'INGRESOS DEL MES',desc:'Altas de personal registradas este mes.',href:'ingresos.html'},
  {icon:'👤',title:'EGRESOS DEL MES',desc:'Bajas de personal registradas este mes.',href:'egresos.html'},
  {icon:'🎖️',title:'ANIVERSARIOS',desc:'Antigüedad y trayectorias en la compañía.',href:'aniversarios.html'},
  {icon:'🎂',title:'CUMPLEAÑOS',desc:'Cumpleaños del equipo durante este mes.',href:'cumpleanos.html'},
  {icon:'📁',title:'MANUAL DE POLÍTICAS',desc:'Inducción, seguridad y procedimientos.',href:'politicas.html'},
  {icon:'☎️',title:'CONTACTOS DE EMERGENCIA',desc:'Números vigentes para feriados y guardias.',href:'contactos.html'},
];

const COMUNICADOS = [
  {cat:'DIRECCIÓN', title:'Nueva carta de invierno 2026', desc:'Curso obligatorio de producto antes del lanzamiento. Completalo desde Manual de políticas.', date:'08/08 · Vence 21/08'},
  {cat:'RRHH', title:'Ranking de locales - capacitación', desc:'Extremas Florida quedó 2do en el ranking zonal de exámenes completados este mes.', date:'05/08'},
  {cat:'LOCALES', title:'Se actualizó el manual de arqueo de caja (v2)', desc:'Incorpora el nuevo procedimiento de diferencias mayores a $5.000.', date:'02/08'},
  {cat:'FÁBRICAS', title:'Feriado - contactos de emergencia', desc:'Consultá los números vigentes para feriados y guardias.', date:'01/08'},
];

const DIRECTORIO = [
  {i:'MG',n:'Martina García',r:'Encargada',t:'EXTREMAS FLORIDA',cat:'LOCALES'},
  {i:'GT',n:'Gonzalo Torres',r:'Gerente de turno',t:'EXTREMAS FLORIDA',cat:'LOCALES'},
  {i:'RC',n:'Rocío Cabrera',r:'Entrenadora',t:'EXTREMAS FLORIDA',cat:'LOCALES'},
  {i:'CM',n:'Carla Méndez',r:'HRBP Zona Norte',t:'RRHH',cat:'RRHH'},
  {i:'NB',n:'Nicolás Bravo',r:'Caja',t:'EXTREMAS FLORIDA',cat:'LOCALES'},
  {i:'JN',n:'Julieta Núñez',r:'Cocina',t:'EXTREMAS FLORIDA',cat:'LOCALES'},
  {i:'FI',n:'Franco Ibarra',r:'Cocina',t:'EXTREMAS FLORIDA',cat:'LOCALES'},
  {i:'LD',n:'Lara Domínguez',r:'Mostrador',t:'EXTREMAS FLORIDA',cat:'LOCALES'},
];

const INGRESOS = [
  {i:'MG',n:'Martina García',r:'Encargada · Extremas Florida',d:'04/08'},
  {i:'NB',n:'Nicolás Bravo',r:'Caja · Extremas Florida',d:'04/08'},
  {i:'JN',n:'Julieta Núñez',r:'Cocina · Extremas Florida',d:'01/08'},
  {i:'LI',n:'Lucía Ibáñez',r:'Mostrador · Extremas Belgrano',d:'03/08'},
  {i:'PT',n:'Pedro Torres',r:'Delivery · Extremas Florida',d:'06/08'},
  {i:'S/D',n:'Pendiente de carga',r:'Se completa desde Drive',d:'–'},
];

const EGRESOS = [
  {i:'BS',n:'Bruno Sosa',r:'Cocina · Extremas Florida',d:'18/08'},
  {i:'SA',n:'Sol Aguirre',r:'Caja · Extremas Florida',d:'02/08'},
];

const ANIVERSARIOS = [
  {i:'5A',n:'Gonzalo Torres',s:'5 años · desde 2021'},
  {i:'3A',n:'Rocío Cabrera',s:'3 años · desde 2023'},
  {i:'7A',n:'Carla Méndez',s:'7 años · desde 2019'},
  {i:'1A',n:'Franco Ibarra',s:'1 año · desde 2025'},
  {i:'2A',n:'Nicolás Bravo',s:'2 años · desde 2024'},
  {i:'4A',n:'Lara Domínguez',s:'4 años · desde 2022'},
];

const CUMPLEANOS = [
  {i:'08',n:'Lara Domínguez',s:'6 de agosto'},
  {i:'08',n:'Matías Ledesma',s:'11 de agosto'},
  {i:'08',n:'Carla Méndez',s:'19 de agosto'},
  {i:'08',n:'Gonzalo Torres',s:'27 de agosto'},
  {i:'08',n:'Julieta Núñez',s:'14 de agosto'},
  {i:'08',n:'Rocío Cabrera',s:'22 de agosto'},
  {i:'08',n:'Sol Aguirre',s:'20 de agosto'},
];

const POLITICAS = [
  {t:'Manual de inducción - Extremas',cat:'INDUCCIÓN'},
  {t:'Reglamento interno de convivencia',cat:'INDUCCIÓN'},
  {t:'Protocolo de seguridad e higiene (BPM)',cat:'SEGURIDAD'},
  {t:'Manual de apertura y cierre de local',cat:'PROCEDIMIENTOS'},
  {t:'Procedimiento de arqueo de caja (v2)',cat:'PROCEDIMIENTOS'},
  {t:'Política de licencias y ausentismo',cat:'PROCEDIMIENTOS'},
];

const CONTACTOS = [
  {l:'RRHH ZONAL',v:'S/D'},
  {l:'GUARDIA MÉDICA',v:'S/D'},
  {l:'BOMBEROS',v:'100'},
  {l:'SEGURIDAD LOCAL',v:'S/D'},
  {l:'POLICÍA',v:'101'},
  {l:'MANTENIMIENTO EDILICIO',v:'S/D'},
];
