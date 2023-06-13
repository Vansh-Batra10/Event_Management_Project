// const express = require('express');
// const router= express.Router();
// const mongoose = require('mongoose');
// const bday_router=express.Router();

// //create model note
// const anniversarySchema={
// id:String,
// comments:Array,
// location:Array,
// rating:String,
// description:String,    
// title:String,
// img: Array,
// price: String,
// capacity:String

// }

// const Anniversary_Venue= mongoose.model("Anniversary_Venue", anniversarySchema);
// // First router for "/page" route
// const anniversaryRouter = express.Router();
// anniversaryRouter.get("/", (req, res) => {
//   Anniversary_Venue.find({})
//     .then(foundNotes => res.json(foundNotes))
// });
// const birthday_venue= mongoose.model("birthday_Venue", anniversarySchema);
// // First router for "/page" route
// const birthdayRouter = express.Router();
// birthdayRouter.get("/", (req, res) => {
//   birthday_venue.find({})
//     .then(foundNotes => res.json(foundNotes))
// });

// const wedding_venue= mongoose.model("wedding_Venue", anniversarySchema);
// // First router for "/page" route
// const weddingRouter = express.Router();
// weddingRouter.get("/", (req, res) => {
//   wedding_venue.find({})
//     .then(foundNotes => res.json(foundNotes))
// });

// const retirement_venue= mongoose.model("retirement_Venue", anniversarySchema);
// // First router for "/page" route
// const retirementRouter = express.Router();
// retirementRouter.get("/", (req, res) => {
//   retirement_venue.find({})
//     .then(foundNotes => res.json(foundNotes))
// });

// const gettogether_venue= mongoose.model("gettogether_Venue", anniversarySchema);
// // First router for "/page" route
// const gettogetherRouter = express.Router();
// gettogetherRouter.get("/", (req, res) => {
//   gettogether_venue.find({})
//     .then(foundNotes => res.json(foundNotes))
// });
// router.use("/anniversary", anniversaryRouter);
// router.use("/birthday", birthdayRouter);
// router.use("/retirement", retirementRouter);
// router.use("/wedding", weddingRouter);
// router.use("/gettogether", gettogetherRouter);
// // router.use("/hello", helloRouter);

// module.exports=router;


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const anniversarySchema = {
  id: String,
  comments: Array,
  location: Array,
  rating: String,
  description: String,
  title: String,
  img: Array,
  price: String,
  capacity: String
};
const storySchema={
  id:String,
  content:String,
  img:String,
  title:String
}

const models = {};

const createCategoryRouter = (category) => {
  const categoryRouter = express.Router();

  categoryRouter.get('/', (req, res) => {
    const CategoryVenueModel = getModel(`${category}_venues`, anniversarySchema);
    const CategoryCatererModel = getModel(`${category}_caterers`, anniversarySchema);
    const CategoryDecoratorModel = getModel(`${category}_decorators`, anniversarySchema);
    const CategoryStoryModel = getModel(`${category}_stories`, storySchema);

    Promise.all([
      CategoryVenueModel.find({}),
      CategoryCatererModel.find({}),
      CategoryDecoratorModel.find({}),
      CategoryStoryModel.find({})
    ])
      .then(([venueData, catererData, decoratorData,storyData]) => {
        res.json({ venues: venueData, caterers: catererData, decorators: decoratorData,stories:storyData });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
      });
  });

  return categoryRouter;
};

const getModel = (modelName, schema) => {
  if (!models[modelName]) {
    models[modelName] = mongoose.model(modelName, schema);
  }
  return models[modelName];
};

router.use('/anniversary', createCategoryRouter('anniversary'));
router.use('/birthday', createCategoryRouter('birthday'));
router.use('/retirement', createCategoryRouter('retirement'));
router.use('/wedding', createCategoryRouter('wedding'));
router.use('/gettogether', createCategoryRouter('gettogether'));
// Add more categories here as needed

module.exports = router;
