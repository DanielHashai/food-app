export class Food {
    public foodId!: number;
    public name!: string;
    public price!: number;
    public tags?: string[];
    public favorite: number = 0;
    public stars!: number;
    public imageUrl!: string;
    public origins!: string
    public cookTime!: string;
    public image: File;
    public imageName: string;

}
// in ts.config --> strictnullchecks --> gives is the option not to use !: 