export default function handler(req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.status(200).json({ result: a + b });
}
