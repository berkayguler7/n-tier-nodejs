import weatherService from '../../business-logic-layer/services/weatherService.js';

export async function getWeather(req, res) {
    try {
        const weather = await weatherService.getWeather();
        res.json(weather);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { getWeather };