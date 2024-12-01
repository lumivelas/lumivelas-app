interface Route {
    location: string;
    title: string

}

const routes : Route[] = [
    {
        location: "/",
        title: "Home"
    },
    {
        location: "shopping-cart",
        title: "Carrinho"
    }
];

export default routes;