import Mobile from "./mobile.model";

const getAllData = async (filters: any) => {
  const { price, name, type, processor, memory, os } = filters;
  const query: any = {};

  if (name) {
    query.name = new RegExp(name, "i");
  }

  if (price !== undefined) {
    query.price = { $gte: price };
  }

  if (type) {
    query.type = type;
  }

  if (processor) {
    query.processor = processor;
  }

  if (memory) {
    query.memory = memory;
  }

  if (os) {
    query.os = os;
  }

  const filter: any = {};
  const result = await Mobile.find(query);
  return result;
};

export const mobileService = {
  getAllData,
};
