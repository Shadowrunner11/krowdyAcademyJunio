import { autoScroll } from '../utils/autoScroll';

async function start(){

    await autoScroll();
    
    console.log('termine de scrollear');
}

start();