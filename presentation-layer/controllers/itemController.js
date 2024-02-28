import itemService from '../../business_logic_layer/services/itemService.js';

export async function getAllItems(req, res) {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function createItem(req, res) {
    const { name, description } = req.body;
    const userId = req.user.id;
    try {
        const newItem = await itemService.createItem(name, description, userId);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
