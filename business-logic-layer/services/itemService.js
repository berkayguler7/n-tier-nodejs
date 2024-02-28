import Item from '../../data-access-layer/models/itemModel.js';

async function getAllItems() {
    return await Item.findAll();
}

async function createItem(name, description, userId) {
    return await Item.create({ name, description, UserId: userId });
}

export default { getAllItems, createItem };
