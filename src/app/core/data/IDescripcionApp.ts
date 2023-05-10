export interface IDescripcionApp {
  nombre: string,
  descripcion: string,
  pathImg: string,
}

const listaDescripcionApp : IDescripcionApp[] = [
    {
        nombre: 'app1',
        descripcion: 'Con más de 500 usuarios desde su inauguración el 26 de septiembre de 2019, esta App desarrolla el 95% de tus labores comerciales, potentemente utilizada por personas con manejo de clientes morosos o deudores.',
        pathImg: '000'
    },
    {
        nombre: 'app2',
        descripcion: 'Con más de 500 usuarios desde su inauguración el 26 de septiembre de 2019, esta App desarrolla el 95% de tus labores comerciales, potentemente utilizada por personas con manejo de clientes morosos o deudores.',
        pathImg: '000'
    },
    {
        nombre: 'app3',
        descripcion: 'Con más de 500 usuarios desde su inauguración el 26 de septiembre de 2019, esta App desarrolla el 95% de tus labores comerciales, potentemente utilizada por personas con manejo de clientes morosos o deudores.',
        pathImg: '000'
    }
]

export const listAplicaciones = {listaDescripcionApp}