export class Book {
    constructor(
        readonly id: string,
        readonly title: string,
        readonly author: string,
        readonly editorial: string,
        readonly year: number,
        readonly pages: number,
        readonly price: number,
        readonly description: string
    ) { }
}