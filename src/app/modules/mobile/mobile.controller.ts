import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { mobileService } from "./mobile.service";

const getAllData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters = req.query;

    const result = await mobileService.getAllData(filters);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Cows retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const mobileController = {
  getAllData,
};
