import { logger } from "./logger";

export async function sendTelegramMessage(msg: string) {
   
    try {
        const request = await fetch(`https://api.telegram.org/bot7471138286:AAGxmPbLJpPQjp79DgvZ_j_SXJ1kM2e-QI4/sendMessage?chat_id=-1002151611978&text=${msg}`, {
            method: 'GET',
            redirect: 'follow'
        });

        const response = await request.json();

        return response;
    } catch (error) {
        logger.info(`errorrino:${error}`);
    }
}