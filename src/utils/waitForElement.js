import { $ } from './selectors';

export const waitForElement  = selector  => new Promise((res, rej)=>{
    const intervalId = setInterval(()=>{
        if($(selector)){
            clearInterval(intervalId);
            res();
        }
    },10);

    setTimeout(()=>{rej();}, 12);
});