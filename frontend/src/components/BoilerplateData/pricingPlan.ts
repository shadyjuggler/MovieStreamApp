export type PlanType = "month" | "year";

const pricingData: {type: PlanType, title: string, text: string, price: number}[] = [
    {
        type: "month",
        title: "Basic Plan",
        text: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: 9.99
    },
    {
        type: "month",
        title: "Standard Plan",
        text: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        price: 12.99
    },
    {
        type: "month",
        title: "Premium Plan",
        text: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        price: 14.99
    },
    {
        type: "year",
        title: "Standard Plan",
        text: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: 115.99
    },
    {
        type: "year",
        title: "Premium Plan",
        text: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        price: 135.99
    },
]

export default pricingData;