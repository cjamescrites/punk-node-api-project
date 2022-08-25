import { CustomBeer } from "../models/customBeerModel.js"

const customBeer = [ 
    {
    id: 1994,
    name: "Cody's Tex-Mex Brew",
    tagline: "Taste you'll remember like the Alamo",
    first_brewed: "09/1994",
    description: "IPA brewed with American hops, packing a strong punch with added serranos with agave for a sweet after taste.",
    image_url: "https://www.thecarycompany.com/media/catalog/product/3/0/30blab_1.jpg",
    abv: 7,
    ph: 5
    }
];

export const getCustomBeer = (req, res) => {
    CustomBeer.findAll()
    .then(beers => {
        res.status(200).send(beers)})
        .catch(err => {
            console.log(err)
        })
}

export const getCustomBeerByID = (req, res) => {
    const id = parseInt(req.params.id);
    CustomBeer.findByPk(id)
    .then(beer => {
        res.status(200).send(beer || `Beer with the id of ${id} not found`)
    })
    .catch(err => {
        console.log(err)
    })
};