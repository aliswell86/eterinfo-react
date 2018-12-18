const Item = require('models/Item');

/* 무기 목록 조회
  GET /api/item/weapon
*/
exports.weaponList = async (ctx) => {
  try {
    const items = await Item.find({ctype: "1"}).sort({"order": 1}).exec();
    ctx.body = items;
  } catch(e) {
    ctx.throw(e);
  }
};