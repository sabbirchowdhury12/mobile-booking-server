import { Response } from "express";

interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | null;
}

const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  const responseData: IResponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
