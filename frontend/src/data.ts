import { Food } from "./shared/models/Food";
import { Tag } from "./shared/models/Tag";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: "Pizza Vegetable",
        price: 10,
        cookTime: "40-50",
        favorite: false,
        origins: ["italy"],
        stars: 4.0,
        imageUrl: "assets/falafel.jpeg",
        tags: ["FastFood", "Pizza", "Lunch"]
    },
    {
        id: '2',
        name: "falafel",
        price: 100,
        cookTime: "30-50",
        favorite: false,
        origins: ["America"],
        stars: 4.0,
        imageUrl: "assets/falafel.jpeg",
        tags: ["FastFood", "falafel", "Lunch"]
    },
    {
        id: '3',
        name: "Pizza Spicy",
        price: 20,
        cookTime: "30-40",
        favorite: true,
        origins: ["Canada"],
        stars: 3.0,
        imageUrl: "assets/falafel.jpeg",
        tags: ["Pizza", "Lunch"]
    },
    {
        id: '4',
        name: "Pizza fish",
        price: 10,
        cookTime: "20-30",
        favorite: true,
        origins: ["ukraine"],
        stars: 4.0,
        imageUrl: "assets/falafel.jpeg",
        tags: ["FastFood", "Pizza", "Lunch"]
    }
]

export const sample_tag: Tag[] = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Lunch', count: 3 },
    { name: 'Pizza', count: 2 },
    { name: 'Hamburger', count: 1 },
]