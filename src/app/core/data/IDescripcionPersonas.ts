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
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, modi vitae officiis facere saepe consectetur nisi officia odit vero, cum voluptatum quas rerum at voluptates impedit perferendis magnam obcaecati libero. Molestiae ducimus sequi consequatur minus tenetur a voluptatum totam nihil!',
    pathFoto: '../../../../assets/img/calidad.png',
    },
]

export const listaPersonas = {listaDescripcionPersonas}