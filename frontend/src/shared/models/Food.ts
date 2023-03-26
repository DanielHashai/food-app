export class Food{
    public id!: string;
    public name!: string;
    public price!: number;
    public tags?: string[];
    public favorite!: boolean;
    public stars!: number;
    public imageUrl!:string;
    public origins!: string[]
    public cookTime!: string;
}
// in ts.config --> strictnullchecks --> gives is the option not to use !: 