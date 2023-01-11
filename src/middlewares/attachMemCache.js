const memCache = {};

export default async (req, res, next) => {
  req.memCache = memCache;
}