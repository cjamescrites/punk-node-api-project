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

export const addCustomBeer = (req, res) => {
    CustomBeer.create({
        name: req.body.name,
        tagline: req.body.tagline,
        first_brewed: req.body.first_brewed,
        description: req.body.description,
        image_url: req.body.image_url,
        abv: req.body.abv,
        ph: req.body.ph
    })
    .then(() => {
        res.status(201).send({message: "Custom Beer Added!"})
    })
    .catch(err => {
        console.log(err)
    }) 
};

export const deleteCustomBeer = (req, res) => {
    const id = parseInt(req.params.id)
    CustomBeer.destroy({where: 
        {
            id: id
        },
        force: true
    })
    .then(() => {
        res.status(201).send({message: "Custom Beer Deleted"})
    })
    .catch(err => {
        console.log(err)
    })
};

export const updateCustomBeerByID = (req, res) => {
    const id = parseInt(req.params.id)
    CustomBeer.upsert({
        id: id,
        name: req.body.name,
        tagline: req.body.tagline,
        first_brewed: req.body.first_brewed,
        description: req.body.description,
        image_url: req.body.image_url,
        abv: req.body.abv,
        ph: req.body.ph
    })
    .then(() => {
        res.status(201).send({message: "Custom Beer Updated!"})
    })
    .catch(err => {
        console.log(err)
    })
}