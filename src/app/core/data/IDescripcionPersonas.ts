export interface IDescripcionPersona {
    nombre: string,
    cargo: string,
    descripcion: string,
    pathFoto: string,
}

const listaDescripcionPersonas: IDescripcionPersona[] = [
    {
    nombre: 'Jhonier Martinez Yela',
    cargo: 'Desarrollador web',
    descripcion: 'Lorem ipsum dolor sit amet, conse consequatur minus tenetur a voluptatum totam nihil!',
    pathFoto: '../../../../assets/img/calidad.png',
    },
    {
    nombre: 'Jhonier Martinez Yela',
    cargo: 'Desarrollador web',
    descripcion: 'Lorem ipsum dolor sit amet, conse consequatur minus tenetur a voluptatum totam nihil!',
    pathFoto: '../../../../assets/img/calidad.png',
    },
]

export const listaPersonas = {listaDescripcionPersonas}