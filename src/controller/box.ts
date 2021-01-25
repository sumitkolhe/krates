// const getBoxData = async (req: Request, res: Response) => {
//   const db_instance = await db.find({
//     boxId: {
//       $in: [req.params.boxId],
//     },
//   });

//   res.json(db_instance);
// };

// const setBoxData = async (req: Request, res: Response) => {
//   console.log(req.params.boxId, req.body);
//   let db_instance = new db({
//     boxId: req.params.boxId,
//     data: req.body,
//     collectionId: req.params.collectionId,
//   });

//   res.json(await db_instance.save());
// };

// const updateBoxData = async (req: Request, res: Response) => {
//   console.log(req.params.boxId, req.body);
//   let db_instance = new db({
//     boxId: req.params.boxId,
//     data: req.body,
//     collectionId: req.params.collectionId,
//   });

//   res.json(await db_instance.save());
// };
