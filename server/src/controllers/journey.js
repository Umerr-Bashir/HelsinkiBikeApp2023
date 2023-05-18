import connectDatabase from "../config/database.js";
import logger from "../lib/tools/logger.js";
import * as JourneyService from "../services/journey.js";

export const getAllJourneys = async (req, res) => {
  try {
    let journeys = await JourneyService.getAllJourneys({
      page: req.query.page,
      size: req.query.pageSize,
    });

    res.send(journeys);
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

export const getJourneyByID = async (req, res) => {
  try {
    let journeyID = req.params.id;
    let journey = await JourneyService.getJourneyByID({ id: journeyID });
    res.send(journey);
  } catch (err) {
    logger.error(err);
    throw err;
  }
};
