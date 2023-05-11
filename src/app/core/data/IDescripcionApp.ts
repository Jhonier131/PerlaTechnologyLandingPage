export interface IDescripcionApp {
  nombre: string,
  descripcion: string,
  pathImg: string,
  pathImgStore: string
}

const listaDescripcionApp : IDescripcionApp[] = [
    {
        nombre: 'Deudores plus',
        descripcion: 'Con más de 500 usuarios desde su inauguración el 26 de septiembre de 2019, esta App desarrolla el 95% de tus labores comerciales, potentemente utilizada por personas con manejo de clientes morosos o deudores.',
        pathImg: '../../../../assets/img/deudoresplus.webp',
        pathImgStore: '../../../../assets/img/google-play.png',
    },
    {
        nombre: 'Deudores control',
        descripcion: 'Desde su llegada el 25 de enero de 2019 esta App ha sido la solución para muchos comerciantes, siendo la versión gratuita de Deudores Plus y por ende sus recursos reducidos, esto no ha opacado a los usuarios con más de 15000 usuarios activos, su sostenibilidad va creciendo sin límites.',
        pathImg: '../../../../assets/img/deudorescontrol.webp',
        pathImgStore: '../../../../assets/img/google-play.png',
    },
    {
        nombre: 'Centinela universal',
        descripcion: 'Con una bonita experiencia nace esta aplicación muy útil para el personal de soldados y policías de todo el mundo, desde 20 de julio de 2018, esta App sin errores calcula un perfecto orden para turnos de guardia.',
        pathImg: '../../../../assets/img/centinelauniversal.webp',
        pathImgStore: '../../../../assets/img/google-play.png',
    }
]

export const listAplicaciones = {listaDescripcionApp}