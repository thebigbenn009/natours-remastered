import { Tour } from '../models/tourModel.js';

export const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      mesage: 'invalid data sent',
    });
  }
};

export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.send(404).json({
      status: 'fail',
      messsage: error,
    });
  }
};

export const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    tour: 'updated tour here...',
  });
};
export const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    return res.status(200).json({
      statuss: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.send(404).json({
      status: 'fail',
      messsage: error,
    });
  }
};
export const deleteTour = (req, res) => {
  try {
    res.status(204).json({
      status: 'deleted',
    });
  } catch (error) {
    console.error(error);
  }
};
